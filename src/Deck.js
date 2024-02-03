import Card from "./Card";

function Deck(props) {
    return (
        <div className="deck">
            {props.cards.map(function(card) {
                    return <Card suit={card.suit} value={card.val} visible={card.visible}/>
            })}
        </div>
    );
}

export default Deck;