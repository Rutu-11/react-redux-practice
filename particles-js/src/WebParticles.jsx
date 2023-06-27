
import React from "react"; 
import Particles from "react-tsparticles"; 

function WebParticles({particlesInit,particlesLoaded}) {

  
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
        "line_linked": {
          "enable": true,
          "distance": 228,
          "color":[ '#e74c3c'],
          "opacity": 0.488,
          "width": 1
        },

        color: { 
          value:[ "#f1f1f1","#ff00cc","#e74c3c"], 
        }, 
        number: { 
          value: 180, 
        }, 

        size: {
            value: 3
        },
        }, 
        interactivity:{
            events:{
                onhover:{
                    enable:true,
                    mode:"attract" // attract, push, repulse

                }
            },

        },
        
      } 
    } 
  /> 
)
}

export default WebParticles;
