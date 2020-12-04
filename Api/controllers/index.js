const { modules } = require('../../helpers')
const { fs, path, express } = modules
let app = express()

fs.readdir(path.join(__dirname), (err, files) => {
  if (err) return console.log('fs.readdir----------------------->>>>', err)
  for (let file of files) {
    if (!file.includes('.')) {
      app.use(
        `/${file}`,
        require(`./${file}/${file}.index`)
      )
    }
  }
})

module.exports = app