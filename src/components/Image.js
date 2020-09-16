import React from 'react';
import aframe from 'aframe';
import {Entity, Scene} from 'aframe-react';
import Iphoto from '../miami.jpeg';

const Image = () => {
    return ( 
        <Scene>
            <a-scene vr-mode-ui="enabled: false" vr-mode-ui="enterVRButton: #myEnterVRButton; enterARButton: #myEnterARButton">
                <a-sky src={Iphoto} rotation="0 -130 0"></a-sky>

                <a-text font="kelsonsans" value="Miami, Florida, USA" width="6" position="-2.5 0.25 -1.5"
                rotation="0 15 0"></a-text>
                vr-mode-ui="enterVRButton: #myEnterVRButton; enterARButton: #myEnterARButton"
                {/* <!-- Style the button with images or whatever. --> */}
                <a id="myEnterVRButton" href="https://www.youtube.com/watch?v=1OMq3QLX6_4">Boton</a>

            </a-scene>
                
        </Scene>
     );
}
 
export default Image;