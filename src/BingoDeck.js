import Ball from "./Ball";

function BingoDeck(props) {
    const balls = new Object();
    const letters = ["B", "I", "N", "G", "O"];
    for (const letter in letters) {
        balls[letters[letter]] = new Object();
        for (let x = 1; x <= 15; x++) {
            balls[letters[letter]][letter*15+x] = 'not-drawn';
        }
    }

    let nbDrawn = 0;
    for (const ball in props.balls) {
        balls[props.balls[ball].letter][props.balls[ball].val] = props.balls[ball].drawn ? 'drawn' : 'not-drawn';
        if (props.balls[ball].drawn) {
            nbDrawn++;
        }
    }

    let lastDrawn = [];
    for (let i = nbDrawn - 1; i >= 0 && i >= nbDrawn - 1 ; i--) {
        lastDrawn.push(props.balls[i]);
        balls[lastDrawn[0].letter][lastDrawn[0].val] = 'drawn blink';
    }

    let history = [];
    for (let i = nbDrawn - 2; i >= 0 && i >= nbDrawn - 6 ; i--) {
        history.push(props.balls[i]);
    }

    return (
        <div>
            <table className="deck">
                {[0,1,2,3,4].map(letter => (
                    <tr>
                        <th>{letters[letter]}</th>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(val => (
                            <td className={`${ balls[letters[letter]][letter*15+val] }`}>{letter*15+val}</td>
                        ))}
                    </tr>
                ))}
            </table>
            <br/>
            <div className="deck">
                {lastDrawn.map((ball) => (
                    <Ball letter={ball.letter} value={ball.val} last={true}/>
                ))}

                {history.map((ball) => (
                    <Ball letter={ball.letter} value={ball.val}/>
                ))}

            </div>
        </div>
    );
}

export default BingoDeck;