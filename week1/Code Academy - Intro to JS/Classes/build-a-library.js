class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        return this._ratings.reduce((prev, curr) => prev + curr) / this._ratings.length;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(rating) {
        if (rating >= 1 && rating <= 5) {
            this._ratings.push(rating);
        } else {
            console.log('Invalid rating value')
        }
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director
    }

    get runTime() {
        return this._runTime
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}


const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
console.log(historyOfEverything.getAverageRating());



const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());



const thumbthumper = new CD('thumbthumper', 'chumbawamba', ["i get it", "knocked down"]);
thumbthumper.toggleCheckOutStatus();
console.log(thumbthumper.isCheckedOut);
thumbthumper.addRating(10);
thumbthumper.addRating(1);
thumbthumper.addRating(5);
console.log(thumbthumper.getAverageRating());