
import React from "react"; 
import Particles from "react-tsparticles"; 

function StarParticles({particlesInit,particlesLoaded}) {

  
return (
    <Particles 
    id="tsparticles" 
    init={particlesInit} 
    loaded={particlesLoaded} 
    options={{ 
      background: { 
        color: "rgb(10,10,25)", 
      }, 
      fpsLimit: 60, 
      particles: { 
        shape: { 
          type: ["circle","triangle","cylinder","square","star"], 
        }, 
        size: { 
          random: { 
            enable: true, 
            minimumValue: 0.5, 
          }, 
          value: 3.5, 
        }, 
        color: { 
          value:[ "#f1f1f1","#ff00cc","#e73827","#a8e063"], 
        }, 
        number: { 
          density: { 
            enable: true, 
            area: 1080, 
          }, 
          limit: 0, 
          value: 800, 
        }, 
        opacity: { 
          animation: { 
            enable: true, 
            minimumValue: 0.5, 
            speed: 1.6, 
            sync: false, 
          }, 
          random: { 
            enable: true, 
            minimumValue: 0.1, 
          }, 
          value: 1, 
        }, 
        interactivity: { 
          detectsOn: "canvas", 
          events: { 
            resize: true, 
          }, 
        }, 
      }, 
    }} 
  /> 
);
}

export default StarParticles;
