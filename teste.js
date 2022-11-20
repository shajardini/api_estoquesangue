
const rp = require('request-promise')
const cheerio = require('cheerio')
const options = {
  uri: 'http://prosangue.sp.gov.br/home/',
  transform: function (body) {
    return cheerio.load(body)
  }
}

function processarDados(dados){
  console.log(JSON.stringify(dados))
}
rp(options)
  .then(($) => {
    const sangue = []
  $('.estoque').each((i, item) => {

        
        $(item).children().each((i, p) => {
            //console.log($(p).text() + "   " + $(p).find('li span').attr('class'))

            const estoqueatual ={
              tsangue: $(p).text(),
              estado: $(p).find('li span').attr('class')
            }
            if(estoqueatual.tsangue !== "")
            sangue.push(estoqueatual)
        })
        processarDados(sangue)
    })
  })
  .catch((err) => {
    console.log(err);
  })