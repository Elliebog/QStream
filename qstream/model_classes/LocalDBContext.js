export class LocalJsonDB {
    constructor() {
        this.liTeams = {};
        this.liMatches = {};
    }

    saveDB() {
        //json.stringify and save to data folder
    }
}

export class Team {
    constructor(id, teamname, teamlogoURI) {
        this.id = id;
        this.name = teamname;
        this.logoURI = teamlogoURI
    }
}

export class Match {
    constructor(t1, t2) {
        this.team1 = t1;
        this.team2 = t2;

        this.elapsedSeconds = 0;
        this.score = (new TeamScoreStat(t1.id), new TeamScoreStat(t2.id));
    }
}

//This class is used for a few different things:
// 1. keep track of the scoreline, cards, timeouts etc...
// 2. can be saved for later use as stats
export class TeamScoreStat {
    constructor(id) {
        this.teamid = id;
        this.catch = false;
        this.score = 0;

    }
}