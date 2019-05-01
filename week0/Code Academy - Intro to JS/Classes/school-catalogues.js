class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level}.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let randomTeacherIndex = Math.floor(substituteTeachers.length * Math.random());
        return substituteTeachers[randomTeacherIndex];

    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = numberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
        super(name, numberOfStudents);
        this._level = 'Primary';
        this._pickUpPolicy = pickUpPolicy;
    }

    get pickUpPolicy() {
        return this._pickUpPolicy;
    }
}


class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, numberOfStudents);
        this._level = 'High';
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'students must be picked up by a parent, guardian, or a family member over the age of 13');

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);