import React from "react";
import { loadFull } from "tsparticles";
import StarParticles from "./StarParticles";
import WebParticles from "./WebParticles";
import DemoParticles from "./DemoParticles";
import Lottie from "lottie-react";
import Parrot from './Parrot.json'
const App = () => {
  const particlesInit = async (main) => {
    console.log(main);
    
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App" width={'250px'}>
      {/* <StarParticles particlesInit={particlesInit} particlesLoaded={particlesLoaded} /> */}
      <WebParticles particlesInit={particlesInit} particlesLoaded={particlesLoaded} />
      {/* <DemoParticles particlesInit={particlesInit} particlesLoaded={particlesLoaded}/> */}
      <h1 className="heading">Welcome to Particle js</h1>
      <div style={{ width: '850px', margin:'auto' }}>
        <Lottie animationData={Parrot} />
      </div>
    </div>
  );
};
export default App; 