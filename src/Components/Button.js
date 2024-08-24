import React from 'react';
import { useState } from 'react';

    function Button(){
        const [state, setState] = useState(true);
        const [word, setWord] = useState("on");
        function WhenClicked(){
            if (state){
                setState(false);
                setWord("off");
            } else{
                setState(true);
                setWord("on");
            }
        }
        return (
            <button onClick={WhenClicked}>
                The button is {word}.
            </button>
        );
    }

export default Button