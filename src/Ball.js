function Ball(props) {
    return (
    <div className={`${ props.last ? 'big-circle' : 'circle' } ${ props.letter }-color`}>
        <div className={`${ props.last ? 'big-inner-circle' : 'inner-circle' }`}>
            <div className={`${ props.last ? 'big-centered-line' : 'centered-line' }`}>{props.letter} {props.value}</div>
        </div>
    </div>);
}

export default Ball;