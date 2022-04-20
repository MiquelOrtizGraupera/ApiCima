//REQUEST CONST
// const requestLogin = new XMLHttpRequest();
// const requestNewPassword = new XMLHttpRequest();
// const requestMyAccount = new XMLHttpRequest();
// const requestMainPage = new XMLHttpRequest();
// const requestManPage = new XMLHttpRequest();
// const requestWomanPage = new XMLHttpRequest();
// const requestKidPage = new XMLHttpRequest();
// const requestAddProduct = new XMLHttpRequest();
const jsdom = require("jsdom");
const {JSDOM} = require("jsdom");

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//URL
const API_URL = 'https://rickandmortyapi.com/api/character/';
//    'http://localhost:3000/api/v1/manPage';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error("Error "+ url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

function onloadBody(){
    fetchData("https://cimaapi.herokuapp.com/api/v1/static/html/manPage", function (error, data){
        if(error) return console.log(error);

        global.document = new JSDOM("manIndex.html").window.document;
        let info = data.manProducts[0].product;
        console.log(info);

        $(document).ready(function (){
            document.open();
            let h4 = document.getElementById("productName");
            document.write("<h1>Informatione</h1>")
            console.log(h4.textContent);
        });
    })
}






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