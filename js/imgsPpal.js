
let goToProduct = (e) => {

    if(e.currentTarget.id == "cactus"){
        window.location.assign("/productos.html#cactus");
    }else if(e.currentTarget.id == "ficus"){
        window.location.assign("/productos.html#ficus");
    }else if(e.currentTarget.id == "senecio"){
        window.location.assign("/productos.html#senecio");
    }

};

let imgs = document.getElementsByTagName("img");

for(let i=1; i<imgs.length; i++){
    imgs[i].addEventListener("click",goToProduct);
}
