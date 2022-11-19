const rp = require('request-promise')
const cheerio = require('cheerio')
const options = {
  uri: 'http://prosangue.sp.gov.br/home/',
  transform: function (body) {
    return cheerio.load(body)
  }
}

rp(options)
  .then(($) => {
  $('.estoque').each((i, item) => {
        $(item).children().each((i, p) => {
            console.log($(p).text() + "   " + $(p).find('li span').attr('class'))
        })
    })
  })
  .catch((err) => {
    console.log(err);
  })