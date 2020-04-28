

const breedsSelect = document.querySelector('.breeds');
let BREEDS_IMAGES_URL;
const imgDog = document.querySelector('.img-dog');
const doggos = document.querySelector('.doggos');


/*function addDoggo(){
    fetch(BREEDS_IMAGES_URL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = "Cute Doggo";
        
        const doggos = document.querySelector('.doggos')
        doggos.innerHTML= '';
        doggos.appendChild(img);
    });

}

const dogButton = document.querySelector('.add-doggo');
dogButton.addEventListener('click', addDoggo)  
*/
const BREEDS_URL =
    "https://dog.ceo/api/breeds/list/all";


    fetch(BREEDS_URL)
        .then((response)=>response.json())
            .then((data)=> {
                const breedsObject = data.message;
                const breedsArray = Object.keys(breedsObject)
                breedsArray.forEach((dog)=>{
                    const option = document.createElement('option');
                    option.innerHTML = dog;
                    breedsSelect.appendChild(option);
                });
            })
                .then(()=>{ document.getElementsByTagName('OPTION')[25].selected = true;
                })

breedsSelect.addEventListener('change', (e)=>{
    searchDog = e.target.value;
    BREEDS_IMAGES_URL = 
        `https://dog.ceo/api/breed/${searchDog}/images/random`;
    addDoggo();
});



function addDoggo(){
    fetch(BREEDS_IMAGES_URL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        imgDog.src = data.message;
        imgDog.alt = "Cute Doggo";
    });

}