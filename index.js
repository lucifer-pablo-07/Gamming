
let chimg1 = document.getElementById("changeimg1"),
    chimg2 = document.getElementById("changeimg2"),
    chimg3 = document.getElementById("changeim3");
   chimg4 = document.getElementById("changeimg4");

function contleft() {
    let changee = changeimg1.src;

    changeimg1.src =  changeimg2.src;
    changeimg2.src = changeimg3.src;
    changeimg3.src = changeimg4.src;
    changeimg4.src = changee;

    // changeimg1.style="background:red"
    // changeimg1.style="background:red"
    console.log("succes")

}

function contright() {
    let changee = changeimg4.src;
    changeimg4.src = changeimg3.src;
    changeimg3.src = changeimg2.src;
    changeimg2.src = changeimg1.src;
    changeimg1.src = changee;
    console.log("succes")
    // changeimg1.style="background:transprent"

    // changeimg1.style="background:red"
}













let img1 = document.getElementById("img1"),
    img2 = document.getElementById("img2"),
    img3 = document.getElementById("img3"),
    img4 = document.getElementById("img4"),
    img5 = document.getElementById("img5");

function swapImagesright() {

    let temp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = img5.src;
    img5.src = temp;

}

function swapImagesleft() {
    let tempp = img5.src;
    img5.src = img4.src;
    img4.src = img3.src;
    img3.src = img2.src;
    img2.src = img1.src;
    img1.src = tempp;
}


let a1 = document.getElementById("a1"),
    a2 = document.getElementById("a2"),
    a3 = document.getElementById("a3"),
    a4 = document.getElementById("a4"),
    a5 = document.getElementById("a5"),
    a6 = document.getElementById("a6");

function left() {

    let temprory = a1.src;
    a1.src = a2.src;
    a2.src = a3.src;
    a3.src = a4.src;
    a4.src = a5.src;
    a5.src = a6.src;
    a6.src = temprory;

}

function right() {

    let b = a6.src;
    a6.src = a5.src;
    a5.src = a4.src;
    a4.src = a3.src;
    a3.src = a2.src;
    a2.src = a1.src;
    a1.src = b;

}

let a =document.getElementById("menubar");
aji = false

function menu(){
    aji = !aji;
    if(aji==true){
        a.style="transform: translateX(0px);"
    } else{
        a.style="transform: translateX(900px);"
    }
}