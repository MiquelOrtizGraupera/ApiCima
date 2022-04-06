//URL
const API_URL = 'https://fierce-lake-30610.herokuapp.com/api/v1';

//REQUEST CONST
const requestLogin = new XMLHttpRequest();
const requestNewPassword = new XMLHttpRequest();
const requestMyAccount = new XMLHttpRequest();
const requestMainPage = new XMLHttpRequest();
const requestManPage = new XMLHttpRequest();
const requestWomanPage = new XMLHttpRequest();
const requestKidPage = new XMLHttpRequest();
const requestAddProduct = new XMLHttpRequest();

//-----------GET manStuff-------------//

/*function onManProductsRequestHandler(){
    console.log("Successful connection to API");
    const data = JSON.parse(this.response);
    console.log(data);
}

requestManPage.addEventListener('load',onManProductsRequestHandler);
requestManPage.open('GET',API_URL+"/manPage");
requestManPage.send();

/*------------------------------------------*/
const handlePictureClick = () =>{
    console.log('picture');
}

const handleFileChange = (e)=>{
    console.log(e.objectStoreNames);
}