// const bcrypt = require('bcrypt');

//REQUEST CONST
const requestPage = new XMLHttpRequest();
const requestLogIn = new XMLHttpRequest();



function FetchDataLogInUser(url_api, callback){
    requestLogIn.open('GET',url_api, true);
    requestLogIn.onreadystatechange = function (event){
        if(requestLogIn.readyState === 4){
            if(requestLogIn.status === 200){
                callback(null, JSON.parse(requestLogIn.responseText))
            }else{
                const error = new Error("Error "+ url_api);
                return callback(error, null)
            }
        }
    }
    requestLogIn.send();
}

function LogIn(){
    FetchDataLogInUser("http://localhost:3000/api/v1/static/addUser", function (error, data){
        console.log(data);
        if(error) console.log(error);
        else{
            let user = document.getElementById("nombreUsuario").value;
            let password = document.getElementById("passwordUsuario").value;


            for (let i = 0; i < data.userList.length ; i++) {
                if(user === data.userList[i].username){
                    console.log("El usuario existe");
                    console.log("Password coincide");
                    window.location.replace("http://localhost:3000/api/v1/static/html/AddProduct.html")

                }else{
                    console.log("El usuario no existe");
                }
            }
        }
    })
}


function fetchData(url_api, callback){
     // const xhttp = new XMLHttpRequest();
      requestPage.open('GET', url_api, true);
        requestPage.onreadystatechange = function (event){
        if(requestPage.readyState === 4){
            if(requestPage.status === 200){
                callback(null, JSON.parse(requestPage.responseText))
            }else{
                const error = new Error("Error "+ url_api);
                return callback(error, null)
            }
        }
    }
    requestPage.send();
}

function onloadBodyMan(){
    fetchData("http://localhost:3000/api/v1/static/manPage", function (error, data){
        if(error) return console.log(error);
        else {
            for (let i = 0; i <data.manProducts.length ; i++) {
            let cardContainer = document.getElementsByClassName("cards-containerMan");

            let divItem = document.createElement("div");
            divItem.setAttribute("class", "item");

            cardContainer[0].appendChild(divItem);

            let href = document.createElement("a");
            href.setAttribute("href", "detail.html");
            divItem.append(href);

            let image = document.createElement("img");
            image.setAttribute("id", "productImage" + i);
            image.setAttribute("src","/api/v1/static/uploads/"+data.manProducts[i].file)
            divItem.append(image);

            let h4 = document.createElement("h4");
            h4.setAttribute("id", "productName" + i);
            h4.append(data.manProducts[i].product);
            divItem.append(h4);

            let p1 = document.createElement("p");
            p1.setAttribute("id", "descriptionProduct" + i);
            p1.append(data.manProducts[i].description);
            divItem.append(p1);

            let p2 = document.createElement("p");
            p2.setAttribute("id", "priceProduct" + i);
            p2.append(data.manProducts[i].price);
            divItem.append(p2);
        }
            // for (let i = 0; i < data.manProducts.length ; i++) {
            //     let img = document.getElementById("productImage"+i);
            //     let h4 = document.getElementById("productName"+i);
            //     let p1 = document.getElementById("descriptionProduct"+i);
            //     let p2 = document.getElementById("priceProduct"+i);
            //     let infoImage = data.manProducts[i].file;
            //     let infoName = data.manProducts[i].product;
            //     let infoDescription = data.manProducts[i].description;
            //     let infoPrice = data.manProducts[i].price;
            //     img.setAttribute("src","/api/v1/static/uploads/"+infoImage);
            //     h4.append(infoName);
            //     p1.append(infoDescription);
            //     p2.append(infoPrice);
            // }
        }
    })
}

function onloadBodyWoman(){
    fetchData("http://localhost:3000/api/v1/static/womanPage", function (error, data){
        console.log(data);
        if(error) return console.log(error);
        else{
            for (let i = 0; i < data.womanProducts.length ; i++) {

                let img = document.getElementById("wimgProduct"+i);
                let h4 = document.getElementById("wnameProduct"+i);
                let p1 = document.getElementById("wdescriptionProduct"+i);
                let p2 = document.getElementById("wpriceProduct"+i);

                let infoImg = data.womanProducts[i].file;
                let infoName = data.womanProducts[i].product;
                let infoDescription = data.womanProducts[i].description;
                let infoPrice = data.womanProducts[i].price;

                img.setAttribute("src","/api/v1/static/uploads/"+infoImg);
                h4.append(infoName);
                p1.append(infoDescription);
                p2.append(infoPrice);
            }
        }
    })
}

function onloadBodyKid(){
    fetchData("http://localhost:3000/api/v1/static/kidsPage", function (error, data){
        if(error) return console.log(error);
        else{
            for (let i = 0; i < data.kidsProducts.length; i++) {

                let img = document.getElementById("kimgProduct"+i);
                let h4 = document.getElementById("knameProduct"+i);
                let p1 = document.getElementById("kdescriptionProduct"+i);
                let p2 = document.getElementById("kpriceProduct"+i);

                let infoImg = data.kidsProducts[i].file;
                let infoName = data.kidsProducts[i].product;
                let infoDescription = data.kidsProducts[i].description;
                let infoPrice = data.kidsProducts[i].price;

                img.setAttribute("src","/api/v1/static/uploads/"+infoImg);
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









