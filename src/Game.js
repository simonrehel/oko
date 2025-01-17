import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import OkoDeck from "./OkoDeck";
import BingoDeck from "./BingoDeck";
import Patterns from "./Patterns";
import Login from "./Login";
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
import flashIcon from "./images/flash.png";
import noFlashIcon from "./images/no-flash.png";
import speaker from "./images/speaker.png";
import mutedspeaker from "./images/muted-speaker.png";
import cardsShuffling from "./images/cards-shuffling.gif";
import ballsShuffling from "./images/balls-shuffling.gif";

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
                        'J': new Audio(valetpique),
                        'Q': new Audio(damepique),
                        'K': new Audio(roipique)},
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
                        'J': new Audio(valetcoeur),
                        'Q': new Audio(damecoeur),
                        'K': new Audio(roicoeur)},
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
                        'J': new Audio(valettrefle),
                        'Q': new Audio(dametrefle),
                        'K': new Audio(roitrefle)},
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
                        'J': new Audio(valetcarreau),
                        'Q': new Audio(damecarreau),
                        'K': new Audio(roicarreau)}};

    const shuffle = (items) => {
        items = [...items];
        let counter = items.length;
        let t;
        let i;
        
        while (counter) {
            i = Math.floor(Math.random() * counter-- );
            t = items[counter];
            items[counter] = items[i];
            items[i] = t;
        }

        for (let i in items) {
            items[i].drawn = false;
        }

        return items;
    };

    const drawCard = (cards) => {
        let newCards = [...cards];

        for (let i in cards) {
            if (!cards[i].drawn) {
                newCards[i].drawn = true;
                if (!muted) {
                    mp3[cards[i].suit][cards[i].val].play();
                }
                break;
            }
        }

        setCards(newCards);
    };

    const drawBall = (balls) => {
        let newBalls = [...balls];

        for (let i in balls) {
            if (!balls[i].drawn) {
                newBalls[i].drawn = true;

                break;
            }
        }

        setBalls(newBalls);
    };

    const [loggedIn, setLoggedIn] = useState(false);

    const [oko, setOko] = useState(true);

    const [autoDraw, setAutoDraw] = useState(false);

    const [flash, setFlash] = useState(true);

    const [muted, setMuted] = useState(true);

    const [delay, setDelay] = useState(5);

    const [cards, setCards] = useState(() => {
        const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        const suitNames = {"♠︎": "SPADE", "♥︎": "HEART", "♣︎": "CLUB", "♦︎": "DIAMOND"};
        let cards = [];
        let card = [];

        for (let x = 0; x < suits.length; x++) {
            for (let y = 0; y < values.length; y++) {
                card = {suit: suits[x], val: values[y], drawn: false, image: `${suitNames[suits[x]]}_${values[y]}`};
                cards.push(card);
            }
        };
        return shuffle(cards);
    });

    const [balls, setBalls] = useState(() => {
        const letters = ["B", "I", "N", "G", "O"];
        let balls = [];
        let ball = [];

        for (let x = 0; x < letters.length; x++) {
            for (let y = 1; y <= 15; y++) {
                ball = {letter: letters[x], val: x*15+y, drawn: false};
                balls.push(ball);
            }
        };
        return shuffle(balls);
    });

    useEffect(() => {
        let timer = null;
        if (autoDraw){
            timer = setInterval(() => {
                if (oko) {
                    drawCard(cards);
                } else {
                    drawBall(balls);
                }
            }, delay * 1000);
        }
        return () => {
            clearInterval(timer);
        };
    });

    const restartConfirm = () => {
        confirmAlert({
          title: 'Recommencer',
          message: 'Voulez-vous vraiment recommencer la partie?',
          buttons: [
            {
              label: 'Oui',
              onClick: () => { setCards(shuffle(cards)); setBalls(shuffle(balls)) }
            },
            {
              label: 'Non',
              onClick: () => {}
            }
          ],
          childrenElement: () => <img className="gif" src={oko ? cardsShuffling : ballsShuffling} alt="Shuffling ..."></img>
        });
      };

    return (
        <div>
            {   loggedIn &&
                <div>
                    <div className="left-panel"> 
                        <Patterns flash={flash}/>

                        <div className="button-div"></div>

                        <div className="button-div"><button className="button" onClick={() => restartConfirm() }>Recommencer la partie</button></div>

                        { oko &&
                            <div>
                                <div className="button-div"><button className="button" onClick={() => drawCard(cards)}>Tirer une carte</button></div>
                                <div className="button-div"><button className="button" onClick={() => setAutoDraw(!autoDraw)}>{autoDraw ? 'Tirage auto  \u23F8' : 'Tirage auto  \u23F5'}</button></div>
                            </div>
                        }

                        { !oko &&
                            <div>
                                <div className="button-div"><button className="button" onClick={() => drawBall(balls)}>Tirer une boule</button></div>
                                <div className="button-div"><button className="button" onClick={() => setAutoDraw(!autoDraw)}>{autoDraw ? 'Tirage auto  \u23F8' : 'Tirage auto  \u23F5'}</button></div>
                            </div>
                        }

                        { autoDraw && 
                            <div className="delay">
                                <button className="button" disabled={delay < 3} onClick={() => setDelay(delay - 1)}>-</button>
                                { delay } secondes
                                <button className="button" disabled={delay > 29} onClick={() => setDelay(delay + 1)}>+</button>
                            </div>
                        }

                        <div className="button-div"><button className="button" onClick={() => {setOko(!oko); setAutoDraw(false)}}>{oko ? 'Aller au bingo' : 'Aller à OKO'}</button></div>
                        
                        <div>
                            { oko && flash && 
                                <div className="button-div-half"><button className="button" onClick={() => setFlash(false)}>
                                    <img src={flashIcon} alt="Flash"></img></button>
                                </div>
                            }
                            { oko && !flash && 
                                <div className="button-div-half"><button className="button" onClick={() => setFlash(true)}>
                                    <img src={noFlashIcon} alt="No flash"></img></button>
                                </div>
                            }
                            { oko && muted && 
                                <div className="button-div-half"><button className="button" onClick={() => setMuted(false)}>
                                    <img src={mutedspeaker} alt="Muted"></img></button>
                                </div>
                            }
                            { oko && !muted && 
                                <div className="button-div-half"><button className="button" onClick={() => setMuted(true)}>
                                    <img src={speaker} alt="Unmuted"></img></button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="right-panel"> 
                        { oko && 
                            <OkoDeck cards={cards}/>
                        }
                        { !oko &&
                            <BingoDeck balls={balls}/>
                        }
                    </div>
                </div>
            }
            {   !loggedIn &&
                <Login loggedIn={setLoggedIn}></Login>
            }
        </div>
    );
}

export default Game;