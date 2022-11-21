const puppteer = require('puppeteer');
const cheerio = require('cheerio');


async function extrairDados(){
    const browser = await puppteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.prosangue.sp.gov.br/home/')
    let html = await page.content();
    const $ = await cheerio.load(html);
    //console.log(html);
    let data = $(`#posicao_estoque > div.caixa.pt-BR > p`).text()
    
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
            
              //console.log(data)
              //console.log(sangue)
          })
        
          //console.log(sangue)
                
       
    
    browser.close();
    return sangue;
}
extrairDados()

const dados = JSON.stringify(extrairDados)
console.log(dados)

const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).get({
      
   
       
    
});
});
module.exports = router;