import React from 'react'
import Particles from "react-tsparticles";

const Background = () => {
    const ParticlesInit = (main) =>{
        console.log(main)
    } 
    const Particlesloaded =(container) =>{
        console.log(container)
    }

    return(
        <Particles
        id="tsparticles"
        init={ParticlesInit}
        loaded={Particlesloaded}
        options={{
            background: {
                color:{
                    value: "#"
                },
            },
            fpsLimit: 60,
            interactivity:{
                events:{
                    onclick: true,
                    mode: "push",
                },
                onHover:{
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            mode: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity:0.8,
                    size: 40,
                },
                push:{
                    quantity: 4,
                },
                repulse:{
                    distance: 200,
                    duration:0.4,
                },
            },
            particles: {
                color:{
                    value:"#",
                    
                },
                links:{
                    color:"#",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collision:{
                    enable: true,
                },
                move:{
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: "false",
                    speed: 6,
                    straight: false,
                },
                number:{
                    density:{
                        enable: true,
                        value_area: 800,
                    },
                    value:80,
                },
                opacity:{
                    value: 0.5,
                },
                shape:{
                    type: "circle",

                },
                size:{
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
        }} />
    );
};