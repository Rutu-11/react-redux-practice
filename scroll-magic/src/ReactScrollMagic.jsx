import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import conffeti from './utils/conffeti.png';
import bird from './utils/bird.jpg'
import cloud from './utils/cloud.png';
import light from './utils/light.png';
import Lottie from "lottie-react";
import Parrot from './Parrot.json'

export default function ReactScrollMagic() {

    return (
        <div>
            <Controller>
                <Scene duration={1000} pin={true} indicators={true} triggerHook="onLeave">
                    {(progress) => (
                        <div style={{
                            background: "#000000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100vh",
                            width: "100vw",
                            overflow: 'hidden'
                        }} >

                            <Timeline totalProgress={progress} paused>
                                <Tween from={{ y: '-10vh'}} to={{y:'90vh'}} duration={1000}>
                                        <img src={conffeti} alt="conffeti"  style={{width:'100%', transition:'transform .4s ease out', position:'absolute', zIndex:1, left:0, top:0}}/>
                                </Tween>

                                 <Tween from={{ y: '11vh'}} to={{y:'12vh'}} duration={1000}>
                                        {/* <img src={bird} alt="bird"  style={{width:'30%', transition:'transform .4s ease out', position:'absolute', zIndex:2}}/> */}
                                        <Lottie animationData={Parrot} style={{zIndex:"4"}} />
                                </Tween>

                                <Tween from={{ y: '0vh', scale:1}} to={{y:'1vh', scale:1.3}} duration={1000}>
                                        {/* <img src={light} alt="light"  style={{width:'100%', transition:'transform .4s ease out', position:'absolute', zIndex:1, left:0, top:0}}/> */}
                                </Tween>

                                 <Tween from={{y: '85vh', opacity: 0.5}}
                                    to={{y: '70vh', opacity: 0.6}}
                                    duration={1000} >
                                        <img src={cloud} alt="cloud"  style={{width:'100%', transition:'transform .4s ease out', position:'absolute', zIndex:1, left:0, top:0}}/>
                                </Tween> 
                            </Timeline>
                        </div>
                    )
                    }
                </Scene>
            </Controller>
        </div>
    )
}
