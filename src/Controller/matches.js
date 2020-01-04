class Matches{
    constructor(){

        this.upcommingMatchList = [];
        
    }

    getUpcommingMatches(){

        var dummey = require('./upcommingMatchesDummey.json');

        return dummey;

    }
}


const _matches = new Matches();

export default _matches;