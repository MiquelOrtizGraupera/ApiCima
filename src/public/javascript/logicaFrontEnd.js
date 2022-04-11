//URL
const API_URL = 'https://localhost:3000/api/v1';

//REQUEST CONST
const requestLogin = new XMLHttpRequest();
const requestNewPassword = new XMLHttpRequest();
const requestMyAccount = new XMLHttpRequest();
const requestMainPage = new XMLHttpRequest();
const requestManPage = new XMLHttpRequest();
const requestWomanPage = new XMLHttpRequest();
const requestKidPage = new XMLHttpRequest();
const requestAddProduct = new XMLHttpRequest();

function putImgIntoDetail(){
    const img = document.getElementById("detailImage");
    const imgFolder = document.images.namedItem("public/uploads/1649508428773.jpg");
    img.innerText = imgFolder;
}

