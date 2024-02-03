import React, { useState } from 'react';
import Deck from "./Deck";
import Pattern from "./Pattern";

function Game() {
    const patterns = [ [[false, false, true , false, false],
                        [false, false, true , false, false],
                        [true , true , true,  true , true ],
                        [false, false, true , false, false],
                        [false, false, true , false, false]],
                       [[true , false, false, false, true ],
                        [false, true , false, true , false],
                        [false, false, true,  false, false],
                        [false, true , false, true , false],
                        [true , false, false, false, true ]],
                       [[true , true , true , true , true ],
                        [true , false, false, false, true ],
                        [true , false, false, false, true ],
                        [true , false, false, false, true ],
                        [true , true , true , true , true ]]];

    const shuffle = (cards) => {
        cards = [...cards];
        let counter = cards.length;
        let t;
        let i;
        
        while (counter) {
            i = Math.floor(Math.random() * counter-- );
            t = cards[counter];
            cards[counter] = cards[i];
            cards[i] = t;
        }

        for (let i in cards) {
            cards[i].visible = false;
        }

        return cards;
    };

    const draw = (cards) => {
        cards = [...cards];
        
        for (let i in cards) {
            if (cards[i].visible == false) {
                cards[i].visible = true;
                break;
            }
        }

        return cards;
    };

    const nextPattern = () => {
        let index = currentPatternIndex + 1;
        if (index == patterns.length) {
            index = 0;
        }
        return index;
    }

    const [cards, setCards] = useState(() => {
        const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let cards = [];
        let card = [];

        for (let x = 0; x < suits.length; x++) {
            for (let y = 0; y < values.length; y++) {
                card = {suit: suits[x], val: values[y], visible: false};
                cards.push(card);
            }
        };
        return shuffle(cards);
    });

    const [currentPatternIndex, setCurrentPatternIndex] = useState(() => {
        return 0;
    })

    return (
        <div>
            <div class="left-panel"> 
                <Pattern pattern={patterns[currentPatternIndex]}/>
                <div class="button-div"><button class="button" onClick={() => setCurrentPatternIndex(nextPattern())}>Changer de modèle</button></div>
                <div class="button-div"><button class="button" onClick={() => setCards(shuffle(cards))}>Recommencer la partie</button></div>
                <div class="button-div"><button class="button" onClick={() => setCards(draw(cards))}>Tirer une carte</button></div>
            </div>
            <div class="right-panel"> 
                <Deck cards={cards}/>
            </div>
        </div>
    );
}

export default Game;