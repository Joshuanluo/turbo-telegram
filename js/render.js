// const autoRender = function () {
//     const player1 = game.player1;
//     const player2 = game.player2;
//     $('#player1').html(`<img src="img/roles/${player1.name}.png">`);
//     $('#player2').html(`<img src="img/roles/${player2.name}.png">`);


// };

const squareRender = function (squareContent, squareId) {

    const currentPlayer = game.checkWhoseTurn();
    if (squareContent === '' && !game.checkWin()) {
        $(`#${squareId}`).html(`<img src="img/roles/${currentPlayer.name}.png">`);
    }

};

const roundRender = function () {
    if (game.checkWin()) {
        $('div.tips').html(`<p>Winner is ${currentPlayer.name}.</p>`);

    } else if (game.turnNumber === 9) {
        $('div.tips').html(`<p>Draw</p>`);
    };
};

const roleRender = function () {
    if (game.isPlayer1Locked) {
        const player1 = game.player1;
        $('#player1').html(`<img src="img/roles/${player1.name}.png">`);
    }
    if (game.isPlayer2Locked) {
        const player2 = game.player2;
        $('#player2').html(`<img src="img/roles/${player2.name}.png">`);
    }
};

const renderScore = function () {
    $('div#player1').next().html(`score:${game.player1.score}`);
    $('div#player2').next().html(`score:${game.player2.score}`);
};

const roleClean = function () {
    $('#player1').html(``);
    $('#player2').html(``);
    $('.hidden').removeClass('hidden');
};

const squareClean = function () {
    $('div.square').html('');
    $('div.tips').html(`<p>this is tips</p>`);
}