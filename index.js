const 
fs = require('fs'),
https = require('https'),
app = express()

app.use(express.static('.'))

https.createServer({
  key: fs.readFileSync('etc/letsencrypt/live/grimorian.com/privkey.pem'),
  cert: fs.readFileSync('etc/letsencrypt/live/grimorian.com/cert.pem'),
  ca: fs.readFileSync('etc/letsencrypt/live/grimorian.com/chain.pem')
}, app).listen(443, () => {
  console.log('Grimorian is listening...')
})
