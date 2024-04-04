import React, { useState, useEffect } from 'react';
import Pattern from "./Pattern";

function Patterns() {
    const patterns = {
        "Aucun": [[]],
        "Centre": [[13]],
        "Ligne ou 4 coins": [[1,2,3,4,5], [1,6,11,16,21], [1,7,13,19,25], [1,5,21,25]],
        "Tour de carte": [[1,2,3,4,5,6,10,11,15,16,20,21,22, 23, 24, 25]],
        "Tour du milieu de la carte": [[7,8,9,12,14,17,18,19]],
        "Carte pleine": [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]],
        1: [[3,7,8,13,18,22,23,24]],
        2: [[1,2,3,9,12,13,16,21,22,23,24]],
        3: [[1,2,3,4,9,12,13,14,19,21,22,23,24]],
        4: [[1,4,6,9,11,12,13,14,19,24]],
        5: [[1,2,3,4,6,11,12,13,14,19,21,22,23,24]],
        6: [[1,2,3,4,6,11,12,13,14,16,19,21,22,23,24]],
        7: [[1,2,3,4,5,9,13,17,21]],
        8: [[1,2,3,4,6,9,11,12,13,14,16,19,21,22,23,24]],
        9: [[1,2,3,4,6,9,11,12,13,14,19,24]],
        A: [[3,7,9,11,12,13,14,15,16,20,21,25]],
        B: [[1,2,3,6,9,11,12,13,16,19,21,22,23]],
        C: [[2,3,4,6,11,16,22,23,24]],
        D: [[1,2,3,6,9,11,14,16,19,21,22,23]],
        E: [[1,2,3,4,6,11,12,13,16,21,22,23,24]],
        F: [[1,2,3,4,6,11,12,13,16,21]],
        G: [[2,3,4,6,11,13,14,15,16,20,22,23,24]],
        H: [[1,5,6,10,11,12,13,14,15,16,20,21,25]],
        I: [[2,3,4,8,13,18,22,23,24]],
        J: [[2,3,4,8,13,16,18,21,22,23]],
        K: [[1,4,6,8,11,12,16,18,21,24]],
        L: [[1,6,11,16,19,21,22,23,24]],
        M: [[1,5,6,7,9,10,11,13,15,16,20,21,25]],
        N: [[1,5,6,7,10,11,13,15,16,19,20,21,25]],
        O: [[2,3,4,6,10,11,15,16,20,22,23,24]],
        P: [[1,2,3,4,6,9,11,12,13,14,16,21]],
        Q: [[2,3,4,6,10,11,13,15,16,19,22,23,25]],
        R: [[1,2,3,6,9,11,12,13,16,18,21,24]],
        S: [[2,3,4,5,6,12,13,14,20,21,22,23,24]],
        T: [[1,2,3,4,5,8,13,18,23]],
        U: [[1,5,6,10,11,15,16,20,22,23,24]],
        V: [[1,5,6,10,11,15,17,19,23]],
        W: [[1,5,6,10,11,13,15,16,18,20,22,24]],
        X: [[1,5,7,9,13,17,19,21,25]],
        Y: [[1,5,7,9,13,18,23]],
        Z: [[1,2,3,4,5,9,13,17,21,22,23,24,25]],
        Ancre: [[2,3,4,8,13,16,18,20,21,22,23,24,25]],
        Avion: [[3,7,8,9,11,13,15,18,22,23,24]],
        "Chapeau de sorcière": [[3,8,12,13,14,17,18,19,21,22,23,24,25]],
        Chiot: [[4,5,6,9,10,12,13,14,16,17,18,21,23]],
        Cloche: [[3,7,8,9,12,13,14,16,17,18,19,20,23]],
        Flambeau: [[3,7,8,9,12,13,14,18,23]],
        Hache: [[3,5,7,8,9,10,13,15,20,25]],
        Hibou: [[1,5,7,9,11,13,15,16,20,22,23,24]],
        Losange: [[3,7,8,9,11,12,13,14,15,17,18,19,23]],
        "Note de musique": [[3,8,9,13,15,17,18,22,23]],
        Paix: [[3,8,13,17,18,19,21,23,25]],
        Papillon: [[1,5,7,8,9,12,14,17,18,19,21,25]],
        Parapluie: [[2,3,4,6,7,8,9,10,11,13,15,18,22,23]],
        Satellite: [[3,7,8,9,11,12,14,15,17,18,19,23]],
        Singe: [[1,2,4,6,7,10,12,13,15,17,18,19,21,23]],
        "Verre à champagne": [[1,2,3,4,5,7,8,9,13,18,22,23,24]],
        Voilier: [[3,8,9,13,16,17,18,19,20,22,23,24]],
    };

    const colors = ['Bleu', 'Orange', 'Noir', 'Rouge', 'Vert'];

    const [currentPatternName, setCurrentPatternName] = useState(() => {
        return "Ligne ou 4 coins";
    })

    const [currentSubPatternIndex, setCurrentSubPatternIndex] = useState(() => {
        return 0;
    })

    const [currentColor, setCurrentColor] = useState(() => {
        return "Rouge";
    })

    useEffect(() => {
        let timer = setInterval(() => {
            let index = currentSubPatternIndex + 1;
            if (index === patterns[currentPatternName].length) {
                index = 0;
            }
            setCurrentSubPatternIndex(index);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    });

    const patternOptions = [];
    for (const [key] of Object.entries(patterns)) {
        patternOptions.push(<option value={key} key={key}>{key}</option>);
    }

    const colorOptions = [];
    for (const color in colors) {
        colorOptions.push(<option value={colors[color]} key={colors[color]}>{colors[color]}</option>);
    }

    return (
        <div className="button-div">
            <Pattern pattern={patterns[currentPatternName][currentSubPatternIndex]} color={currentColor}></Pattern>
            <select onChange={e => {setCurrentSubPatternIndex(0); setCurrentPatternName(e.target.value)}} value={currentPatternName}>{patternOptions}</select>
            <select onChange={e => setCurrentColor(e.target.value)} value={currentColor}>{colorOptions}</select>
        </div>
    );
}

export default Patterns;