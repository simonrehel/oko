import HEART_A from "./images/HEART-A.svg";
import HEART_2 from "./images/HEART-2.svg";
import HEART_3 from "./images/HEART-3.svg";
import HEART_4 from "./images/HEART-4.svg";
import HEART_5 from "./images/HEART-5.svg";
import HEART_6 from "./images/HEART-6.svg";
import HEART_7 from "./images/HEART-7.svg";
import HEART_8 from "./images/HEART-8.svg";
import HEART_9 from "./images/HEART-9.svg";
import HEART_10 from "./images/HEART-10.svg";
import HEART_J from "./images/HEART-J.svg";
import HEART_Q from "./images/HEART-Q.svg";
import HEART_K from "./images/HEART-K.svg";
import CLUB_A from "./images/CLUB-A.svg";
import CLUB_2 from "./images/CLUB-2.svg";
import CLUB_3 from "./images/CLUB-3.svg";
import CLUB_4 from "./images/CLUB-4.svg";
import CLUB_5 from "./images/CLUB-5.svg";
import CLUB_6 from "./images/CLUB-6.svg";
import CLUB_7 from "./images/CLUB-7.svg";
import CLUB_8 from "./images/CLUB-8.svg";
import CLUB_9 from "./images/CLUB-9.svg";
import CLUB_10 from "./images/CLUB-10.svg";
import CLUB_J from "./images/CLUB-J.svg";
import CLUB_Q from "./images/CLUB-Q.svg";
import CLUB_K from "./images/CLUB-K.svg";
import DIAMOND_A from "./images/DIAMOND-A.svg";
import DIAMOND_2 from "./images/DIAMOND-2.svg";
import DIAMOND_3 from "./images/DIAMOND-3.svg";
import DIAMOND_4 from "./images/DIAMOND-4.svg";
import DIAMOND_5 from "./images/DIAMOND-5.svg";
import DIAMOND_6 from "./images/DIAMOND-6.svg";
import DIAMOND_7 from "./images/DIAMOND-7.svg";
import DIAMOND_8 from "./images/DIAMOND-8.svg";
import DIAMOND_9 from "./images/DIAMOND-9.svg";
import DIAMOND_10 from "./images/DIAMOND-10.svg";
import DIAMOND_J from "./images/DIAMOND-J.svg";
import DIAMOND_Q from "./images/DIAMOND-Q.svg";
import DIAMOND_K from "./images/DIAMOND-K.svg";
import SPADE_A from "./images/SPADE-A.svg";
import SPADE_2 from "./images/SPADE-2.svg";
import SPADE_3 from "./images/SPADE-3.svg";
import SPADE_4 from "./images/SPADE-4.svg";
import SPADE_5 from "./images/SPADE-5.svg";
import SPADE_6 from "./images/SPADE-6.svg";
import SPADE_7 from "./images/SPADE-7.svg";
import SPADE_8 from "./images/SPADE-8.svg";
import SPADE_9 from "./images/SPADE-9.svg";
import SPADE_10 from "./images/SPADE-10.svg";
import SPADE_J from "./images/SPADE-J.svg";
import SPADE_Q from "./images/SPADE-Q.svg";
import SPADE_K from "./images/SPADE-K.svg";

function Card(props) {
    const images = {
        HEART_A: HEART_A,
        HEART_2: HEART_2,
        HEART_3: HEART_3,
        HEART_4: HEART_4,
        HEART_5: HEART_5,
        HEART_6: HEART_6,
        HEART_7: HEART_7,
        HEART_8: HEART_8,
        HEART_9: HEART_9,
        HEART_10: HEART_10,
        HEART_J: HEART_J,
        HEART_Q: HEART_Q,
        HEART_K: HEART_K,
        CLUB_A: CLUB_A,
        CLUB_2: CLUB_2,
        CLUB_3: CLUB_3,
        CLUB_4: CLUB_4,
        CLUB_5: CLUB_5,
        CLUB_6: CLUB_6,
        CLUB_7: CLUB_7,
        CLUB_8: CLUB_8,
        CLUB_9: CLUB_9,
        CLUB_10: CLUB_10,
        CLUB_J: CLUB_J,
        CLUB_Q: CLUB_Q,
        CLUB_K: CLUB_K,
        DIAMOND_A: DIAMOND_A,
        DIAMOND_2: DIAMOND_2,
        DIAMOND_3: DIAMOND_3,
        DIAMOND_4: DIAMOND_4,
        DIAMOND_5: DIAMOND_5,
        DIAMOND_6: DIAMOND_6,
        DIAMOND_7: DIAMOND_7,
        DIAMOND_8: DIAMOND_8,
        DIAMOND_9: DIAMOND_9,
        DIAMOND_10: DIAMOND_10,
        DIAMOND_J: DIAMOND_J,
        DIAMOND_Q: DIAMOND_Q,
        DIAMOND_K: DIAMOND_K,
        SPADE_A: SPADE_A,
        SPADE_2: SPADE_2,
        SPADE_3: SPADE_3,
        SPADE_4: SPADE_4,
        SPADE_5: SPADE_5,
        SPADE_6: SPADE_6,
        SPADE_7: SPADE_7,
        SPADE_8: SPADE_8,
        SPADE_9: SPADE_9,
        SPADE_10: SPADE_10,
        SPADE_J: SPADE_J,
        SPADE_Q: SPADE_Q,
        SPADE_K: SPADE_K,
      };

    return (
    <div className={`${ props.last ? 'bigger-card' : 'card' }`}>
        <img src={ images[props.image] } alt="carte"></img>
    </div>);
}

export default Card;