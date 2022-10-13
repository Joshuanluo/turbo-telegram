
$(document).ready(function () {

    $('div.role').on('click', function () {
        const roleId = $(this).attr('id');
        const childClass = $(this).children().attr('class');
        console.log(childClass === 'hidden');
        const roleContent = $(this).html();
        // console.log(roleId);
        // console.log('role:', roleContent);
        //choose player1
        if (!game.isPlayer1Locked && childClass !== "hidden") {
            game.player1.name = roleId;
            game.isPlayer1Locked = true;
            $(this).children().addClass("hidden");
            roleRender();

        } else if (!game.isPlayer2Locked && childClass !== "hidden") {
            game.player2.name = roleId;
            game.isPlayer2Locked = true;
            $(this).children().addClass("hidden");
            roleRender();
        }
        //choose player2

    });

    $('div.square').on('click', function () {
        if (!game.isGameFinish && game.isPlayer1Locked && game.isPlayer2Locked) {
            const squareId = $(this).attr('id');
            const squareContent = $(this).html();
            squareRender(squareContent, squareId);
            const turnTaken = game.turnTaken(squareId, squareContent);
            roundRender();
            if (game.isGameFinish) {
                game.checkWhoseTurn().score++;

                renderScore();
            }
            if (turnTaken) {

                game.turnNumber++;
            }

        }
        // console.log(game);


    });

    $('div#restart').on('click', function () {
        game.player1 = {
            name: '',
            chioce: [],
            score: 0,
        };
        game.player2 = {
            name: '',
            chioce: [],
            score: 0,
        };
        game.turnNumber = 1;
        game.isGameFinish = false;
        game.isPlayer1Locked = false;
        game.isPlayer2Locked = false;
        roleClean();
        squareClean();
    });

    $('div#nextRound').on('click', function () {
        game.player1.chioce = [];
        game.player2.chioce = [];
        game.turnNumber = 1;
        game.isGameFinish = false;

        squareClean();
    });

});
