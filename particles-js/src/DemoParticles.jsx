import React from 'react';
import Particles from 'react-tsparticles';
function DemoParticles({particlesInit,particlesLoaded}){
    return(
        <>
                <Particles
                 id="tsparticles" 
                 init={particlesInit} 
                 loaded={particlesLoaded} 

                options={
                    {
                        "particles": {
                          "number": {
                            "value": 202,
                            "density": {
                              "enable": true,
                              "value_area": 560
                            }
                          },
                          "color": {
                            "value": ["#f1c40f", "#2ecc71","#e74c3c" ]
                          },
                          "shape": {
                            "type": ["circle", 'triangle', 'rectangle'],
                            "stroke": {
                              "width": 0,
                              "color": "#000000"
                            },
                            "polygon": {
                              "nb_sides": 4
                            },
                            "image": {
                              "src": "img/github.svg",
                              "width": 100,
                              "height": 100
                            }
                          },
                          "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                              "enable": false,
                              "speed": 1.1343656060348248,
                              "opacity_min": 0.1215391720751598,
                              "sync": false
                            }
                          },
                          "size": {
                            "value": 2,
                            "random": true,
                            "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                            }
                          },
                          "line_linked": {
                            "enable": true,
                            "distance": 228,
                            "color": "#f1c40f",
                            "opacity": 0.488,
                            "width": 1
                          },
                          "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "top",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                            }
                          }
                        },
                        "interactivity": {
                          "detect_on": "canvas",
                          "events": {
                            "onhover": {
                              "enable": true,
                              "mode": "bubble"
                            },
                            "onclick": {
                              "enable": true,
                              "mode": "push"
                            },
                            "resize": true
                          },
                          "modes": {
                            "grab": {
                              "distance": 400,
                              "line_linked": {
                                "opacity": 1
                              }
                            },
                            "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                            },
                            "repulse": {
                              "distance": 200,
                              "duration": 0.4
                            },
                            "push": {
                              "particles_nb": 4
                            },
                            "remove": {
                              "particles_nb": 2
                            }
                          }
                        },
                        "retina_detect": true
                      }
                }
                />
        </>
    )
}

export default DemoParticles;