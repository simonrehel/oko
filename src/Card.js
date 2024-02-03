function Card(props) {
    if (props.visible) {
        if (props.suit == "♣︎" || props.suit == "♠︎") {
            return (
            <div className="card card-black">
                <div className="card-tl">
                    <div className="card-value">{props.value}</div>
                    <div className="card-suit">{props.suit}</div>
                </div>
                <div className="card-br">
                    <div className="card-value">{props.value}</div>
                    <div className="card-suit">{props.suit}</div>
                </div>
            </div>);
        } else {
            return (
            <div className="card card-red">
                <div className="card-tl">
                    <div className="card-value">{props.value}</div>
                    <div className="card-suit">{props.suit}</div>
                </div>
                <div className="card-br">
                    <div className="card-value">{props.value}</div>
                    <div className="card-suit">{props.suit}</div>
                </div>
            </div>);
        }
    } else {
        return (<div />);
    }
}

export default Card;