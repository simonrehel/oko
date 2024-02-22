function Ball(props) {
    return (
    <div className={`${ props.last ? 'big-circle' : 'circle' }`}>
        <div className={`${ props.last ? 'big-centered-line' : 'centered-line' }`}>{props.letter} {props.value}</div>
    </div>);
}

export default Ball;