import React from "react"
import Boss from "../images/heroImage/Boss.jpg";
import {MoreAboutMeButton1} from "./buttons/AboutmeButton"

const AboutMe = ()=>{
    return(
        <>
        <section className="about" id="about">
            <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="lg:ml-14 mt-11">

 <img
                            src={Boss}
                            alt="Description"
                            className="lg:w-60 h-auto rounded-lg shadow-md sm:w-72 mt-16"
                        />
                </div>
                <div className="mt-16">
                    <h2 className="font-bold text-5xl">About <span>Me</span></h2>
                    <h4 className="text-white">Full Stack Developer</h4>
                    <p>I am a self-motivated and passionate IT personnel 
                        with a keen interest in fullstack web development. I am proficient in wring HTML, CSS, tailwind, SASS, Gits & Github,
                         Figma, and Bootstrap. Experienced in database management with MySql. Able to design and implement responsive user interfaces,
                          ensuring seamless user experiences. Strong problem-solving and collaboration abilities, dedicated to delivering high-quality code and meeting project deadlines. 
                          Continuously learning and adapting to the latest industry trends to deliver cutting-edge solutions.</p>
<MoreAboutMeButton1/>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutMe;