const rp = require('request-promise')
const cheerio = require('cheerio')
const sangue= []
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
            //console.log($(p).text() + "   " + $(p).find('li span').attr('class'))

            const estoqueatual ={
              tsangue: $(p).text(),
              estado: $(p).find('li span').attr('class')
            }
            
            //console.log(estoqueatual)
            sangue.push(estoqueatual)
        })
        console.log(JSON.stringify(sangue))
    })
    return sangue
  })
  .catch((err) => {
    console.log(err);
  })




  const express = require('express');
  const router = express.Router();
  router.get('/', function (req, res, next) {
      res.status(200).send({
          sangue
      });
  });
  module.exports = router;