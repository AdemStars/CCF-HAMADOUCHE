var items=[ //création de la constante
    {
        id:1,  // id du menu 1
        nom:"Menu Classic",  // nom du menu 1
        img:"https://firebasestorage.googleapis.com/v0/b/ccf-hamadouche.appspot.com/o/m1.png?alt=media&token=ed3613a5-067a-4000-9182-0a948ac8cadc", //image de présention
        prix: 5,  //prix donné
        description:"Burger, Salade, Tomate, Cornichon" // description du burger
    
    },
    
    {
        id:2,
        nom:"Menu Bacon",
        img:"https://firebasestorage.googleapis.com/v0/b/ccf-hamadouche.appspot.com/o/m2.png?alt=media&token=88f0bb0d-2bbe-405e-9869-2638eef996ba",
        prix: 6,
        description:"Burger, Fromage, Bacon, Salade, Tomate"
    
    },
    {
        id:3,
        nom:"Menu Big",
        img:"https://firebasestorage.googleapis.com/v0/b/ccf-hamadouche.appspot.com/o/m3.png?alt=media&token=141af37e-061f-4425-8f62-ae4f2d2c7cc6",
        prix: 8,
        description:"Double Burger, Fromage, Cornichon, Salade"
    
    },
    {
        id:4,
        nom:"Menu Chicken",
        img:"https://firebasestorage.googleapis.com/v0/b/ccf-hamadouche.appspot.com/o/m4.png?alt=media&token=f7680a51-bd36-47a3-a0e5-b9a977c2b5c8",
        prix: 7,
        description:"Poulet Frit, Tomate, Salade, Mayonnaise"
    
    },
]

const list = document.querySelector('.cards-list'); 

function afficheitem(doc){  // fonction qui va généré dans le html chaque items
    let carte = document.createElement('div'); // on créer une div 
        carte.setAttribute('id', doc.id); // dans cette div il y aura l'id
        carte.classList.add('card'); //et on lui rajoute la class card pour le css
        carte.innerHTML='<div class="card_image"><img src="'+ doc.img + '"/></div><div class="card_title title-white"><div><p>'+ doc.nom+'</p><p>'+doc.prix +' E</p></div> </div> </div>'; // le block principal en html
   list.appendChild(carte);
 
carte.addEventListener("click", function(){
    alert(doc.description);
}) 
    }
function vide(){
list.innerHTML=""
}

function maxValue() {
    vide();
    console.log(carte);
} 
items.map(item=>afficheitem(item)); // on execute la fonction