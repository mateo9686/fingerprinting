const express = require('express')
const fpcalc = require('fpcalc')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

function calculateFingerprint() {
    fpcalc("audio.mp3", function (err, result) {
        if (err) throw err;
        return result.fingerprint;
    });
}

app.post('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
    console.log('Got body:', req.body);
    res.sendStatus(200);
    res.send();
    // res.send(calculateFingerprint());
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))