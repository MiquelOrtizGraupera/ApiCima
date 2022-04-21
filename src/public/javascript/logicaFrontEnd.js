//REQUEST CONST
// const requestLogin = new XMLHttpRequest();
// const requestNewPassword = new XMLHttpRequest();
// const requestMyAccount = new XMLHttpRequest();
// const requestMainPage = new XMLHttpRequest();
const requestManPage = new XMLHttpRequest();
// const requestWomanPage = new XMLHttpRequest();
// const requestKidPage = new XMLHttpRequest();
// const requestAddProduct = new XMLHttpRequest();
// const jsdom = require("jsdom");
// const {JSDOM} = require("jsdom");

// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//URL
const API_URL = 'https://rickandmortyapi.com/api/character/';
//    'http://localhost:3000/api/v1/manPage';

function fetchData(url_api, callback){
     // const xhttp = new XMLHttpRequest();
      requestManPage.open('GET', url_api, true);
        requestManPage.onreadystatechange = function (event){
        if(requestManPage.readyState === 4){
            if(requestManPage.status === 200){
                callback(null, JSON.parse(requestManPage.responseText))
            }else{
                const error = new Error("Error "+ url_api);
                return callback(error, null)
            }
        }
    }
    requestManPage.send();
}

function onloadBodyMan(){
    fetchData("http://localhost:3000/api/v1/static/manPage", function (error, data){
        console.log(data.manProducts.length);
        if(error) return console.log(error);
        else{
            for (let i = 0; i < data.manProducts.length ; i++) {
                let img = document.getElementById("productImage"+i);
                let h4 = document.getElementById("productName"+i);
                let p1 = document.getElementById("descriptionProduct"+i);
                let p2 = document.getElementById("priceProduct"+i);
                let infoImage = data.manProducts[i].file;
                let infoName = document.createTextNode(data.manProducts[i].product.toString());
                let infoDescription = document.createTextNode(data.manProducts[i].description.toString());
                let infoPrice = document.createTextNode(data.manProducts[i].price.toString());
                img.setAttribute("src","/api/v1/static/uploads/"+infoImage);
                h4.append(infoName);
                p1.append(infoDescription);
                p2.append(infoPrice);
            }
        }
    })
}





// fetchData("http://localhost:3000/api/v1/static/manPage", function (error, data){
//     if(error) return console.log(error);
//
//     global.document = new JSDOM("manIndex.html").window.document;
//     let info = data.manProducts[0].product;
//     console.log(info);
//
//     $(document).ready(function (){
//         document.open();
//         let h4 = document.getElementById("productName");
//         document.write("<h1>Informatione</h1>")
//         console.log(h4.textContent);
//     });
// })
// fetchData(API_URL, function (error1, data1){
//     if(error1) return console.error(error1);
//     fetchData(API_URL + data1.results[0].id, function (error2, data2){
//         if(error2) return console.error(error2);
//         fetchData(data2.origin.url, function (error3, data3){
//             if(error3) return console.error(error3);
//             console.log(data1.info.count);
//             console.log(data2.name);
//             console.log(data3.dimension);
//         })
//     });
// })
//https://cimaapi.herokuapp.com/api/v1/static/html/manPage









