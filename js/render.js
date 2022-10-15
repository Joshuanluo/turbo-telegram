
const squareRender = function (squareContent, squareId) {

    const currentPlayer = game.checkWhoseTurn();
    if (squareContent === '' && !game.checkWin()) {
        $(`#${squareId}`).html(`<img src="img/roles/${currentPlayer.name}.png">`);
    }

};

const roundRender = function () {
    if (game.checkWin()) {
        $('div.tips').html(`<p>Winner is ${currentPlayer.name}.</p>`).addClass('animate__animated animate__shakeY');

    } else if (game.checkDraw()) {
        $('div.tips').html(`<p>Draw</p>`).addClass('animate__animated animate__shakeY');
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
    $('div#player1').next().html(`score: ${game.player1.score}`).addClass('animate__animated animate__tada');

    $('div#player2').next().html(`score: ${game.player2.score}`).addClass('animate__animated animate__tada');

};

const roleClean = function () {
    $('#player1').html(``);
    $('#player2').html(``);
    $('.hidden').removeClass('hidden');

};

const squareClean = function () {
    $('div.square').html('');
    $('div.tips').html(`<p>this is tips</p>`);
    $('div#player1').next().removeClass('animate__animated animate__tada');
    $('div#player2').next().removeClass('animate__animated animate__tada');
    $('div.tips').removeClass('animate__animated animate__shakeY');
}