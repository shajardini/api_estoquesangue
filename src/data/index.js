// // const rp = require('request-promise')
// // const cheerio = require('cheerio')
// // const options = {
// //   uri: 'http://prosangue.sp.gov.br/home/',
// //   transform: function (body) {
// //     return cheerio.load(body)
// //   }
// // }

// // function processarDados(dados){
// //   console.log(JSON.stringify(dados))
// // }
// // rp(options)
// //   .then(($) => {
// //     const sangue = []
// //   $('.estoque').each((i, item) => {

        
// //         $(item).children().each((i, p) => {
// //             //console.log($(p).text() + "   " + $(p).find('li span').attr('class'))

// //             const estoqueatual ={
// //               tsangue: $(p).text(),
// //               estado: $(p).find('li span').attr('class')
// //             }
// //             console.log(estoqueatual)
            
// //         })
// //     })
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   })

// /*
// http://www.prosangue.sp.gov.br/home/
// ÚLTIMA ATUALIZAÇÃO
// O+
// a+
// aB+
// B+
// O-
// A-
// AB-
// B-
// */

// const puppteer = require('puppeteer');
// const cheerio = require('cheerio');
// const mongoose = require('mongoose');
// const megaSchema = require('./megaSchema');

// async function extrairDados(){
//     const browser = await puppteer.launch();
//     const page = await browser.newPage();
//     await page.goto('http://www.prosangue.sp.gov.br/home/')
//     let html = await page.content();
//     const $ = await cheerio.load(html);
//     //console.log(html);
//     let data = $(`#posicao_estoque > div.caixa.pt-BR > p`).text()
    
//     const sangue = []
//         $('.estoque').each((i, item) => {
//               $(item).children().each((i, p) => {
//                   //console.log($(p).text() + "   " + $(p).find('li span').attr('class'))
      
//                   const estoqueatual ={
//                     tsangue: $(p).text(),
//                     estado: $(p).find('li span').attr('class')
//                   }
//                   if(estoqueatual.tsangue !== "")
//                   sangue.push(estoqueatual)
                  
                
//               })
            
//               //console.log(data)
//               //console.log(sangue)
//           })
        
//           console.log(sangue)
                
       
    
//     browser.close();
//     return sangue;
// }
// export {extrairDados}

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