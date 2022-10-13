console.log('yes');

const game = {
    player1: {
        name: '',
        chioce: [],
        score: 0,
    },
    player2: {
        name: '',
        chioce: [],
        score: 0,
    },
    turnNumber: 1,
    isGameFinish: false,
    isPlayer1Locked: false,
    isPlayer2Locked: false,
    winConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ],

    checkWhoseTurn: function () {
        const remainder = this.turnNumber % 2;

        currentPlayer = this.player1;
        if (remainder === 0) {
            currentPlayer = this.player2;
        }
        return currentPlayer;
    }, //end of checkWhoseTurn


    turnTaken: function (squareId, squareContent) {
        const currentPlayer = this.checkWhoseTurn();
        //console.log('turnTaken', currentPlayer);
        const numberId = Number(squareId.substring(1));
        if (squareContent === '' && !this.checkWin()) {
            currentPlayer.chioce.push(numberId);
            console.log('turn', this.turnNumber)
            return true;
        }
    }, //end of turnTaken


    checkWin: function () {
        const winConditions = this.winConditions;
        const chioce = this.checkWhoseTurn().chioce;

        let result = false;
        for (let i = 0; i < winConditions.length; i++) {
            result = winConditions[i].every(e => chioce.includes(e));
            if (result) {
                this.isGameFinish = true;
                break;
            }
        }
        return result;

    }, //end of checkWin


}; // end of game object;





