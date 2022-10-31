

    let deck = [
        {carte: "ace_of_spades",
         valeur: [1, 11],
         nombre: undefined},

        {carte: "2_of_spades",
         valeur: 2,
         nombre: undefined},

        {carte: "3_of_spades",
         valeur: 3,
         nombre: undefined},

        {carte: "4_of_spades",
         valeur: 4,
         nombre: undefined},

        {carte: "5_of_spades",
         valeur: 5,
         nombre: undefined},

        {carte: "6_of_spades",
         valeur: 6,
         nombre: undefined},

        {carte: "7_of_spades",
         valeur: 7,
         nombre: undefined},

        {carte: "8_of_spades",
         valeur: 8,
         nombre:  undefined},

        {carte: "9_of_spades",
         valeur: 9,
         nombre: undefined},

        {carte: "10_of_spades",
         valeur: 10,
         nombre: undefined},

        {carte: "jack_of_spades",
         valeur: 10, 
         nombre: undefined},
         
        {carte: "queen_of_spades",
         valeur: 10, 
         nombre: undefined},

        {carte: "king_of_spades",
         valeur: 10, 
         nombre: undefined },

        {carte: "ace_of_clubs",
         valeur: [1, 11], 
         nombre: undefined},

        {carte: "2_of_clubs",
         valeur: 2, 
         nombre: undefined},

        {carte: "3_of_clubs",
         valeur: 3, 
         nombre: undefined },

        {carte: "4_of_clubs",
         valeur: 4, 
         nombre: undefined},

        {carte: "5_of_clubs",
         valeur: 5, 
         nombre: undefined },

        {carte: "6_of_clubs",
         valeur: 6, 
         nombre: undefined},

        {carte: "7_of_clubs",
         valeur: 7, 
         nombre: undefined },

        {carte: "8_of_clubs",
         valeur: 8, 
         nombre:  undefined},

        {carte: "9_of_clubs",
         valeur: 9 , 
         nombre:  undefined},
         
        {carte: "10_of_clubs",
         valeur: 10, 
         nombre: undefined},

        {carte: "jack_of_clubs",
         valeur: 10,
         nombre:  undefined},

        {carte: "queen_of_clubs",
         valeur: 10,
         nombre:  undefined},

        {carte: "king_of_clubs",
         valeur: 10,
         nombre:  undefined},

        {carte: "ace_of_diamonds",
         valeur: [1, 11], 
         nombre: undefined},

        {carte: "2_of_diamonds",
         valeur: 2, 
         nombre: undefined},

        {carte: "3_of_diamonds",
         valeur: 3, 
         nombre: undefined},

        {carte: "4_of_diamonds",
         valeur: 4, 
         nombre: undefined},

        {carte: "5_of_diamonds",
         valeur: 5, 
         nombre: undefined},

        {carte: "6_of_diamonds",
         valeur: 6, 
         nombre: undefined},

        {carte: "7_of_diamonds",
         valeur: 7, 
         nombre: undefined},

        {carte: "8_of_diamonds",
         valeur: 8, 
         nombre:  undefined},

        {carte: "9_of_diamonds",
         valeur: 9 ,
         nombre:  undefined},

        {carte: "10_of_diamonds",
         valeur: 10, 
         nombre:  undefined},

        {carte: "jack_of_diamonds",
         valeur: 10, 
         nombre:  undefined},

        {carte: "queen_of_diamonds",
         valeur: 10, 
         nombre:  undefined},

        {carte: "king_of_diamonds",
         valeur: 10, 
         nombre:  undefined},

        {carte: "ace_of_hearts",
         valeur: [1, 11], 
         nombre: undefined},

        {carte: "2_of_hearts",
         valeur: 2, 
         nombre: undefined},

        {carte: "3_of_hearts",
         valeur: 3, 
         nombre: undefined},

        {carte: "4_of_hearts",
         valeur: 4, 
         nombre: undefined},

        {carte: "5_of_hearts",
         valeur: 5, 
         nombre: undefined},

        {carte: "6_of_hearts",
         valeur: 6, 
         nombre: undefined},

        {carte: "7_of_hearts",
         valeur: 7, 
         nombre: undefined},

        {carte: "8_of_hearts",
         valeur: 8, 
         nombre: undefined},

        {carte: "9_of_hearts",
         valeur: 9 ,
         nombre: undefined},

        {carte: "10_of_hearts",
         valeur: 10, 
         nombre: undefined},

        {carte: "jack_of_hearts",
         valeur: 10, 
         nombre: undefined},

        {carte: "queen_of_hearts",
         valeur: 10, 
         nombre: undefined},

        {carte: "king_of_hearts",
         valeur: 10, 
         nombre: undefined}]
         ;


        //start-screen//
         function caJoue() 
            {
                document.getElementById("newGameScreen").style.display = "none";
                document.getElementById("nombreDeck").style.display = "flex";
            };

        //fonction qui choisit une carte au hasard//

        function carteAuHasard(){
                let indexCarte = Math.floor(Math.random()*deck.length);
                deck[indexCarte].nombre --;
                if (deck[indexCarte].nombre == 0){
                    deck.splice(indexCarte,1);
                }
                return ["Deck/"+deck[indexCarte].carte+".png",deck[indexCarte].valeur];

            };
        
       

        //fonctions qui attribuent une quantité a chaque carte (=deck)//
        function quatreDeck () {
            document.getElementById("nombreDeck").style.display = "none";
            document.getElementById("ecranDeDepart").style.display = "none";
            deck.forEach(item => item.nombre = 4)
           
        };
        function cinqDeck () {
            document.getElementById("nombreDeck").style.display = "none";
            document.getElementById("ecranDeDepart").style.display = "none";
            deck.forEach(item => item.nombre = 5)
           
        };
        function sixDeck () {
            document.getElementById("nombreDeck").style.display = "none";
            document.getElementById("ecranDeDepart").style.display = "none";
            deck.forEach(item => item.nombre = 6)
           
        }
           
        //action des boutons des écrans de démarrage//

         document.getElementById("newGame").onclick = caJoue;
         document.getElementById("quatre").onclick = quatreDeck;
         document.getElementById("cinq").onclick = cinqDeck;
         document.getElementById("six").onclick = sixDeck;

         function donnerCarte (){
            var arrayCarte = carteAuHasard;
            let nouvelleCarte = document.createElement("img");
            playerHand.appendChild(nouvelleCarte);
            getElementById(playerHand, Image).src = arrayCarte[0];
            board.querySelector(playerHand, Image).setAttribute('class', 'carte');
            playerHand.appendChild(nouvelleCarte);
         }

         document.getElementById("test").onclick = function (){donnerCarte};


        







          
        


         



         







