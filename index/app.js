const items=[ //création de la constante
    {
        id:1,  // id du menu 1
        nom:"Menu Classic",  // nom du menu 1
        img:"img/m1.png", //image de présention
        prix: 5,  //prix donné
        description:"Burger, Salade, Tomate, Cornichon" // description du burger
    
    },
    
    {
        id:2,
        nom:"Menu Bacon",
        img:"img/m2.png",
        prix: 6,
        description:"Burger, Fromage, Bacon, Salade, Tomate"
    
    },
    {
        id:3,
        nom:"Menu Big",
        img:"img/m3.png",
        prix: 8,
        description:"Double Burger, Fromage, Cornichon, Salade"
    
    },
    {
        id:4,
        nom:"Menu Chicken",
        img:"img/m4.png",
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
  ;

}
    function affichedescription(doc){
    document.addEventListener("click", function(){
  alert(doc.description);
})
    }
items.map(item=>afficheitem(item)); // on execute la fonction
items.map(item=>affichedescription(item));

