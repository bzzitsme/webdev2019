let team = {
    _players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 15
    }, {
        firstName: 'Hulio',
        lastName: 'Alvarez',
        age: 19
    }, {
        firstName: 'Francesco',
        lastName: 'Puaero',
        age: 21
    }],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }, {
        opponent: 'Sharks',
        teamPoints: 66,
        opponentPoints: 33
    }, {
        opponent: 'Doggies',
        teamPoints: 42,
        opponentPoints: 42
    }],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer: function (firstName, lastName, age) {
        let newPlayer = {
            firstName,
            lastName,
            age
        };
        this._players.push(newPlayer);
    },
    addGame: function (opponent, teamPoints, opponentPoints) {
        let newGame = {
            opponent,
            teamPoints,
            opponentPoints
        };
        this._games.push(newGame);
    }
};

team.addPlayer('Steph', 'Curry', 28);
console.log(team.players);

team.addGame('Huanos', 42, 12);
console.log(team.games);