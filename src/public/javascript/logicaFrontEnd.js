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


fetchData("https://cimaapi.herokuapp.com/api/v1/static/html/manPage", function (error, data){
    if(error) return console.log(error);
    console.log(data.manProducts[0].product);

    global.document = new JSDOM("manIndex.html").window.document;

    let h1 = document.createElement("h1");
    h1.append(data.manProducts[0].product);
    console.log(h1.textContent);

})




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