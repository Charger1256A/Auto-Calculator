const request = require('request');
const fs = require('fs');
function pathData(path) {
    return new Promise((resolve, reject) => {
        var list = {
            url: `https://www.thebluealliance.com/api/v3${path}`,
            method: 'GET',
            headers: {
                'X-TBA-Auth-Key': 'oSSXMWPE2jOJrLTYpgMvgP5BTvbtOJRwR6LSv1ytb0g5FS6RlaWBx70Pw0B8cwvA'
            }
        };
        request(list, function (err, res, body) {
            resolve(JSON.parse(body));
        });
    });
};
function matchData(eventId) {
    return new Promise((resolve, reject) => {
        pathData(`/event/${eventId}/matches`).then(snapshot => {
            var array = [];
            for (var i in snapshot) {
                if ("qm" == snapshot[i]["comp_level"]) {
                    var object = {
                        match: snapshot[i]["match_number"],
                        blue: snapshot[i]["alliances"]["blue"]["team_keys"].map(x => x.replace('frc', '')),
                        red: snapshot[i]["alliances"]["red"]["team_keys"].map(x => x.replace('frc', ''))
                    }
                    array.push(object);
                }
            }
            resolve(array);
        });
    });
}
matchData('2019casj').then(snapshot => {
    fs.writeFile('matchdata.json', JSON.stringify(snapshot), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
});
exports.matchData = matchData;
exports.pathData = pathData;