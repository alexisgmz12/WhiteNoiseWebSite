var imagesArray = [
    './ImagesForWeb/UNAS.jpg',
    './ImagesForWeb/IMG_20220216_191354_578.jpg',
    './ImagesForWeb/IMG-20220215-WA0008_mr1644970268312_mh1644970369968 (1).jpg',
    './ImagesForWeb/843dc25f-f152-44c1-95fd-602ba164f989.JPG', 
    './ImagesForWeb/IMG_3823.jpg', 
];

var imagesArrayLashes = [
    './ImagesForWeb/LashesPics/IMG_20211007_210653_mh1633659406100.jpg',
    './ImagesForWeb/LashesPics/IMG_20211011_203542_mr1634019276201_mh1634019417583.jpg',
    './ImagesForWeb/LashesPics/IMG_20220221_113447_184.jpg',
    './ImagesForWeb/LashesPics/MAKEUP_2021101023301859.jpg',
]

var menu = 0;

//onclicks
function changeHTML(page){
    switch (page){
        case 'Home':
            window.location.href = "index.html"
            break;
        case 'Servicios':
            window.location.href = "servicios.html"
            break;
        case 'Promo':
            window.location.href = "promo.html"
            break;
        case 'Contact':
            window.location.href = "contact.html"
            break;
    }
    
}

//Start functions of animations
function startAnimations(){
    addImagesToDivCascadeCarousel();
    addImagesToDivCascadeCarouselLeft();
}

function addImagesToDivCascadeCarousel(){
    console.log("Va addImagesToDivCascadeCarousel");
    for (let i=0; i<imagesArray.length; i++){
        setTimeout(() => {
            console.log(i)
            console.log("Va el ciclo con " + imagesArray[i]);
            const divContainer = document.createElement('div');
            divContainer.style.setProperty("display","flex");
            divContainer.style.setProperty("justify-content","end");
            
            const newImage = document.createElement('img');
            newImage.classList.add("divImgForCascadeAnimation");
            newImage.setAttribute("src", imagesArray[i]);
            newImage.style.setProperty('transition', '.3s');

            divContainer.append(newImage);

            newImage.addEventListener("mouseover",(event) => {
                newImage.style.setProperty('border-radius', '15px');
                newImage.style.setProperty('height','auto');
                newImage.style.setProperty('width','40%');

            })
            newImage.addEventListener("mouseleave",(event)=>{
                newImage.style.setProperty('border-radius', '0px');
                newImage.style.setProperty('height','auto');
                newImage.style.setProperty('width','20%');
            })
            document.getElementById('divToCascadeCarouselRight').append(divContainer);
       }, 1000 * i);
     }
}

function addImagesToDivCascadeCarouselLeft(){
    console.log("Va addImagesToDivCascadeCarousel");
    for (let i=0; i<imagesArrayLashes.length; i++){
        setTimeout(() => {
            console.log(i)
            console.log("Va el ciclo con " + imagesArrayLashes[i]);
            const divContainer = document.createElement('div');
            divContainer.style.setProperty("display","flex");
            divContainer.style.setProperty("justify-content","start");
            
            const newImage = document.createElement('img');
            newImage.classList.add("divImgForCascadeAnimation");
            newImage.setAttribute("src", imagesArrayLashes[i]);
            newImage.style.setProperty('transition', '.3s');

            divContainer.append(newImage);

            newImage.addEventListener("mouseover",(event) => {
                newImage.style.setProperty('border-radius', '15px');
                newImage.style.setProperty('height','auto');
                newImage.style.setProperty('width','40%');

            })
            newImage.addEventListener("mouseleave",(event)=>{
                newImage.style.setProperty('border-radius', '0px');
                newImage.style.setProperty('height','auto');
                newImage.style.setProperty('width','20%');
            })
            document.getElementById('divToCascadeCarouselLeft').append(divContainer);
       }, 1000 * i);
     }
}

// Initialize and add the map
function initMap() {
    console.log("Va ini map")
    // The location of Uluru
    const uluru = { lat: 19.28390437983895, lng: -99.175317074257 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

//Show menu function
function showMenu(){
    document.getElementById('navBar').classList.remove('navBar')
    console.log("Se mostrara el menu")
    const divMenu = document.getElementById('menuToShowNaviation');
    if(menu == 0){
        document.getElementById('sandwichMenuNavBar').src = './ImagesForWeb/Icons/icons8-eliminar-480.png'
        menu = 1;
        divMenu.classList.remove('menuHidden');
        divMenu.classList.add('menuToShow');
    } else{
        document.getElementById('sandwichMenuNavBar').src = './ImagesForWeb/Icons/icons8-menu-512.png'
        menu = 0;
        divMenu.classList.remove('menuToShow');
        divMenu.classList.add('menuHidden')
    }   
}