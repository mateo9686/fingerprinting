const fpcalc = require('fpcalc')

fpcalc("./audio.mp3", function (err, result) {
    if (err) throw err;
    console.log(result.file, result.duration, result.fingerprint);
});