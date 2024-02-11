import React, { useState, useEffect } from 'react';
import Deck from "./Deck";
import Pattern from "./Pattern";
import ascoeur from "./mp3/as-coeur.mp3";
import deuxcoeur from "./mp3/deux-coeur.mp3";
import troiscoeur from "./mp3/trois-coeur.mp3";
import quatrecoeur from "./mp3/quatre-coeur.mp3";
import cinqcoeur from "./mp3/cinq-coeur.mp3";
import sixcoeur from "./mp3/six-coeur.mp3";
import septcoeur from "./mp3/sept-coeur.mp3";
import huitcoeur from "./mp3/huit-coeur.mp3";
import neufcoeur from "./mp3/neuf-coeur.mp3";
import dixcoeur from "./mp3/dix-coeur.mp3";
import valetcoeur from "./mp3/valet-coeur.mp3";
import damecoeur from "./mp3/dame-coeur.mp3";
import roicoeur from "./mp3/roi-coeur.mp3";
import astrefle from "./mp3/as-trefle.mp3";
import deuxtrefle from "./mp3/deux-trefle.mp3";
import troistrefle from "./mp3/trois-trefle.mp3";
import quatretrefle from "./mp3/quatre-trefle.mp3";
import cinqtrefle from "./mp3/cinq-trefle.mp3";
import sixtrefle from "./mp3/six-trefle.mp3";
import septtrefle from "./mp3/sept-trefle.mp3";
import huittrefle from "./mp3/huit-trefle.mp3";
import neuftrefle from "./mp3/neuf-trefle.mp3";
import dixtrefle from "./mp3/dix-trefle.mp3";
import valettrefle from "./mp3/valet-trefle.mp3";
import dametrefle from "./mp3/dame-trefle.mp3";
import roitrefle from "./mp3/roi-trefle.mp3";
import ascarreau from "./mp3/as-carreau.mp3";
import deuxcarreau from "./mp3/deux-carreau.mp3";
import troiscarreau from "./mp3/trois-carreau.mp3";
import quatrecarreau from "./mp3/quatre-carreau.mp3";
import cinqcarreau from "./mp3/cinq-carreau.mp3";
import sixcarreau from "./mp3/six-carreau.mp3";
import septcarreau from "./mp3/sept-carreau.mp3";
import huitcarreau from "./mp3/huit-carreau.mp3";
import neufcarreau from "./mp3/neuf-carreau.mp3";
import dixcarreau from "./mp3/dix-carreau.mp3";
import valetcarreau from "./mp3/valet-carreau.mp3";
import damecarreau from "./mp3/dame-carreau.mp3";
import roicarreau from "./mp3/roi-carreau.mp3";
import aspique from "./mp3/as-pique.mp3";
import deuxpique from "./mp3/deux-pique.mp3";
import troispique from "./mp3/trois-pique.mp3";
import quatrepique from "./mp3/quatre-pique.mp3";
import cinqpique from "./mp3/cinq-pique.mp3";
import sixpique from "./mp3/six-pique.mp3";
import septpique from "./mp3/sept-pique.mp3";
import huitpique from "./mp3/huit-pique.mp3";
import neufpique from "./mp3/neuf-pique.mp3";
import dixpique from "./mp3/dix-pique.mp3";
import valetpique from "./mp3/valet-pique.mp3";
import damepique from "./mp3/dame-pique.mp3";
import roipique from "./mp3/roi-pique.mp3";

function Game() {
    const mp3 = {"♠︎": { 'A': new Audio(aspique),
                        '2': new Audio(deuxpique),
                        '3': new Audio(troispique),
                        '4': new Audio(quatrepique),
                        '5': new Audio(cinqpique),
                        '6': new Audio(sixpique),
                        '7': new Audio(septpique),
                        '8': new Audio(huitpique),
                        '9': new Audio(neufpique),
                        '10': new Audio(dixpique),
                        'V': new Audio(valetpique),
                        'D': new Audio(damepique),
                        'R': new Audio(roipique)},
                 "♥︎": { 'A': new Audio(ascoeur),
                        '2': new Audio(deuxcoeur),
                        '3': new Audio(troiscoeur),
                        '4': new Audio(quatrecoeur),
                        '5': new Audio(cinqcoeur),
                        '6': new Audio(sixcoeur),
                        '7': new Audio(septcoeur),
                        '8': new Audio(huitcoeur),
                        '9': new Audio(neufcoeur),
                        '10': new Audio(dixcoeur),
                        'V': new Audio(valetcoeur),
                        'D': new Audio(damecoeur),
                        'R': new Audio(roicoeur)},
                 "♣︎": { 'A': new Audio(astrefle),
                        '2': new Audio(deuxtrefle),
                        '3': new Audio(troistrefle),
                        '4': new Audio(quatretrefle),
                        '5': new Audio(cinqtrefle),
                        '6': new Audio(sixtrefle),
                        '7': new Audio(septtrefle),
                        '8': new Audio(huittrefle),
                        '9': new Audio(neuftrefle),
                        '10': new Audio(dixtrefle),
                        'V': new Audio(valettrefle),
                        'D': new Audio(dametrefle),
                        'R': new Audio(roitrefle)},
                 "♦︎": { 'A': new Audio(ascarreau),
                        '2': new Audio(deuxcarreau),
                        '3': new Audio(troiscarreau),
                        '4': new Audio(quatrecarreau),
                        '5': new Audio(cinqcarreau),
                        '6': new Audio(sixcarreau),
                        '7': new Audio(septcarreau),
                        '8': new Audio(huitcarreau),
                        '9': new Audio(neufcarreau),
                        '10': new Audio(dixcarreau),
                        'V': new Audio(valetcarreau),
                        'D': new Audio(damecarreau),
                        'R': new Audio(roicarreau)}};

    const patterns = [ [[[false, false, false, false, false],
                        [false, false, false, false, false],
                        [false, false, true,  false, false],
                        [false, false, false, false, false],
                        [false, false, false, false, false]]],

                       [[[true , true , true , true , true ],
                        [false, false, false, false, false],
                        [false, false, false, false, false],
                        [false, false, false, false, false],
                        [false, false, false, false, false]],
                        [[true, false, false, false, false ],
                        [true, false, false, false, false],
                        [true, false, false, false, false],
                        [true, false, false, false, false],
                        [true, false, false, false, false]],
                        [[true, false, false, false, false],
                        [false, true, false, false, false],
                        [false, false, true, false, false],
                        [false, false, false, true, false],
                        [false, false, false, false, true]],
                       [[true , false, false, false, true ],
                        [false, false, false, false, false],
                        [false, false, false, false, false],
                        [false, false, false, false, false],
                        [true , false, false, false, true ]]],

                       [[[true , true , true , true , true ],
                        [true , false, false, false, true ],
                        [true , false, false, false, true ],
                        [true , false, false, false, true ],
                        [true , true , true , true , true ]]],
                       [[[true , true , true , true , true ],
                        [true , true , true , true , true ],
                        [true , true , true , true , true ],
                        [true , true , true , true , true ],
                        [true , true , true , true , true ]]]];

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
            cards[i].drawn = false;
        }

        return cards;
    };

    const draw = (cards) => {
        let newCards = [...cards];

        for (let i in cards) {
            if (!cards[i].drawn) {
                newCards[i].drawn = true;
                mp3[cards[i].suit][cards[i].val].play();
                break;
            }
        }

        setCards(newCards);
    };

    const nextPattern = () => {
        let index = currentPatternIndex + 1;
        if (index === patterns.length) {
            index = 0;
        }

        setCurrentSubPatternIndex(0);

        return index;
    }

    const [autoDraw, setAutoDraw] = useState(false);

    const [delay, setDelay] = useState(5);

    const [cards, setCards] = useState(() => {
        const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "D", "R"];
        let cards = [];
        let card = [];

        for (let x = 0; x < suits.length; x++) {
            for (let y = 0; y < values.length; y++) {
                card = {suit: suits[x], val: values[y], drawn: false};
                cards.push(card);
            }
        };
        return shuffle(cards);
    });

    useEffect(() => {
        let timer = null;
        if (autoDraw){
            timer = setInterval(() => {
                setCards((cards) => draw(cards));
            }, delay * 1000);
        }
        return () => {
            clearInterval(timer);
        };
    }, [autoDraw, delay]);

    const [currentPatternIndex, setCurrentPatternIndex] = useState(() => {
        return 0;
    })

    const [currentSubPatternIndex, setCurrentSubPatternIndex] = useState(() => {
        return 0;
    })

    useEffect(() => {
        let timer = setInterval(() => {
            let index = currentSubPatternIndex + 1;
            if (index === patterns[currentPatternIndex].length) {
                index = 0;
            }
            setCurrentSubPatternIndex(index);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div class="desktop">
            <div class="left-panel"> 
                <Pattern pattern={patterns[currentPatternIndex][currentSubPatternIndex]}/>
                <div class="button-div"><button class="button" onClick={() => setCurrentPatternIndex(nextPattern())}>Changer de modèle</button></div>
                <div class="button-div"><button class="button" onClick={() => setCards(shuffle(cards))}>Recommencer la partie</button></div>
                <div class="button-div"><button class="button" onClick={() => draw(cards)}>Tirer une carte</button></div>
                <div class="button-div"><button class="button" onClick={() => setAutoDraw(!autoDraw)}>{autoDraw ? 'Tirage manuel' : 'Tirage automatique'}</button></div>
                { autoDraw && 
                    <div class="delay">
                        <button class="button" disabled={delay < 3} onClick={() => setDelay(delay - 1)}>-</button>
                        { delay } secondes
                        <button class="button" disabled={delay > 29} onClick={() => setDelay(delay + 1)}>+</button>
                    </div>
                }
            </div>
            <div class="right-panel"> 
                <Deck cards={cards}/>
            </div>
        </div>
    );
}

export default Game;