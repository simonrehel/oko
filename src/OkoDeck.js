import Card from "./Card";

function OkoDeck(props) {
    const cards = {};
    const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    for (const suit in suits) {
        cards[suits[suit]] = {};
        for (const val in values) {
            cards[suits[suit]][values[val]] = 'not-drawn';
        }
    }

    let nbDrawn = 0;
    for (const card in props.cards) {
        cards[props.cards[card].suit][props.cards[card].val] = props.cards[card].drawn ? 'drawn' : 'not-drawn';
        if (props.cards[card].drawn) {
            nbDrawn++;
        }
    }

    let lastDrawn = [];
    for (let i = nbDrawn - 1; i >= 0 && i >= nbDrawn - 1 ; i--) {
        lastDrawn.push(props.cards[i]);
        cards[lastDrawn[0].suit][lastDrawn[0].val] = 'drawn blink';
    }

    let history = [];
    for (let i = nbDrawn - 2; i >= 0 && i >= nbDrawn - 6 ; i--) {
        history.push(props.cards[i]);
    }

    return (
        <div>
            <table className="deck">
                <tbody>
                    <tr>
                        <th className='card-black'>♣︎</th>
                        <td className={`${ cards['♣︎']['A'] }`}>A</td>
                        <td className={`${ cards['♣︎']['2'] }`}>2</td>
                        <td className={`${ cards['♣︎']['3'] }`}>3</td>
                        <td className={`${ cards['♣︎']['4'] }`}>4</td>
                        <td className={`${ cards['♣︎']['5'] }`}>5</td>
                        <td className={`${ cards['♣︎']['6'] }`}>6</td>
                        <td className={`${ cards['♣︎']['7'] }`}>7</td>
                        <td className={`${ cards['♣︎']['8'] }`}>8</td>
                        <td className={`${ cards['♣︎']['9'] }`}>9</td>
                        <td className={`${ cards['♣︎']['10'] }`}>10</td>
                        <td className={`${ cards['♣︎']['J'] }`}>J</td>
                        <td className={`${ cards['♣︎']['Q'] }`}>Q</td>
                        <td className={`${ cards['♣︎']['K'] }`}>K</td>
                    </tr>
                    <tr>
                        <th className='card-red'>♦︎</th>
                        <td className={`${ cards['♦︎']['A'] }`}>A</td>
                        <td className={`${ cards['♦︎']['2'] }`}>2</td>
                        <td className={`${ cards['♦︎']['3'] }`}>3</td>
                        <td className={`${ cards['♦︎']['4'] }`}>4</td>
                        <td className={`${ cards['♦︎']['5'] }`}>5</td>
                        <td className={`${ cards['♦︎']['6'] }`}>6</td>
                        <td className={`${ cards['♦︎']['7'] }`}>7</td>
                        <td className={`${ cards['♦︎']['8'] }`}>8</td>
                        <td className={`${ cards['♦︎']['9'] }`}>9</td>
                        <td className={`${ cards['♦︎']['10'] }`}>10</td>
                        <td className={`${ cards['♦︎']['J'] }`}>J</td>
                        <td className={`${ cards['♦︎']['Q'] }`}>Q</td>
                        <td className={`${ cards['♦︎']['K'] }`}>K</td>
                    </tr>
                    <tr>
                        <th className='card-black'>♠︎</th>
                        <td className={`${ cards['♠︎']['A'] }`}>A</td>
                        <td className={`${ cards['♠︎']['2'] }`}>2</td>
                        <td className={`${ cards['♠︎']['3'] }`}>3</td>
                        <td className={`${ cards['♠︎']['4'] }`}>4</td>
                        <td className={`${ cards['♠︎']['5'] }`}>5</td>
                        <td className={`${ cards['♠︎']['6'] }`}>6</td>
                        <td className={`${ cards['♠︎']['7'] }`}>7</td>
                        <td className={`${ cards['♠︎']['8'] }`}>8</td>
                        <td className={`${ cards['♠︎']['9'] }`}>9</td>
                        <td className={`${ cards['♠︎']['10'] }`}>10</td>
                        <td className={`${ cards['♠︎']['J'] }`}>J</td>
                        <td className={`${ cards['♠︎']['Q'] }`}>Q</td>
                        <td className={`${ cards['♠︎']['K'] }`}>K</td>
                    </tr>
                    <tr>
                        <th className='card-red'>♥︎</th>
                        <td className={`${ cards['♥︎']['A'] }`}>A</td>
                        <td className={`${ cards['♥︎']['2'] }`}>2</td>
                        <td className={`${ cards['♥︎']['3'] }`}>3</td>
                        <td className={`${ cards['♥︎']['4'] }`}>4</td>
                        <td className={`${ cards['♥︎']['5'] }`}>5</td>
                        <td className={`${ cards['♥︎']['6'] }`}>6</td>
                        <td className={`${ cards['♥︎']['7'] }`}>7</td>
                        <td className={`${ cards['♥︎']['8'] }`}>8</td>
                        <td className={`${ cards['♥︎']['9'] }`}>9</td>
                        <td className={`${ cards['♥︎']['10'] }`}>10</td>
                        <td className={`${ cards['♥︎']['J'] }`}>J</td>
                        <td className={`${ cards['♥︎']['Q'] }`}>Q</td>
                        <td className={`${ cards['♥︎']['K'] }`}>K</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div className="deck deck-oko">
                {lastDrawn.map((card) => (
                    <Card suit={card.suit} value={card.val} last={true} image={card.image}/>
                ))}

                {history.map((card) => (
                    <Card suit={card.suit} value={card.val} image={card.image}/>
                ))}
            </div>
            <div className="deck-footer">Cartes tirées: {nbDrawn}</div>
        </div>
    );
}

export default OkoDeck;