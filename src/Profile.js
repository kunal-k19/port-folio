import React from "react"
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function Profile(){
    return(
        <>
        <div className="photo">
            <h1 className="h">Hi, I'm Kunal.</h1>
            <p className="p">I like to think that I'm an engineer by choice.<br/></p>
        </div>
        <div className="about">
                <div className="info1">
                    <h1 className="h2">About Me</h1>
                    <p className="para1">An engineer by education and an Anime enthusiast by choice, who sometimes finds himself delving into the modern-day tech stack. Looking to forge a decent grip over front-end technologies, I try to develope UIs that are uncoventional and bold while being completely responsive.</p>
                </div>
                <div className="picture">
                    
                </div>
        </div>
        <div className="project">
        <p className="p1">Stuff I've Worked On</p>

        </div>
        <div className="wrapper">
            <div className="col1">
                <div className="info">
                    <h1 className="h1">Alphagram</h1>
                    <p className="para">A complete and responsive portfolio which displays the content and collaborative works in the field of photography.<br/><span>Tech Involved: HTML5, CSS, Bootstrap, JavaScript, PHP</span></p>
                </div>
                <div className="pic">
                    
                </div>
                <div className="innerpic1"></div>
                
            </div>
            <div className="col2">
                    <div className="pic1">
                    
                    </div>
                    <div className="innerpic2"></div>
                    <div className="info1">
                        <h1 className="h1">Coinweiser</h1>
                        <p className="para">A web-based application that tracks and displays the price, market cap and volume of the top 100 cryptocurrencies in real time.<br/><span>Tech Involved: ReactJS, HTML5, CSS, JavaScript</span></p>
                    </div>
            </div>
            <div className="col3">
                <div className="info2">
                    <h1 className="h1">Weather101</h1>
                    <p className="para">A completely functional web-based application that fetches the current weather conditions for location as the user types. The information is presented on a neat interface.<br/><span>Tech Involved: ReactJS, HTML5, CSS, JavaScript</span></p>
                </div>
                <div className="pic2"></div>
                <div className="innerpic3"></div>
            </div>
            <div className="workedon">
                <p className="p3">Stuff I've Worked With</p>
            </div>
            <div className="col4">
                
                    <div className="i1"></div>
                    <div className="i2"></div>
                    <div className="i3"></div>
                    <div className="i4"></div>
                    <div className="i5"></div>
            </div>
        </div>
        <div className="find">
            <p className="p2">Find Me On</p>
        </div>
        <div className="footer">
            <div className="icon1"><a href="google.com"><BsGithub size="50px"/></a></div>
            <div className="icon2"><a href="google.com"><BsLinkedin size="50px"/></a></div>
            <div className="icon3"><a href="google.com"><BsInstagram size="50px"/></a></div>
        </div>
        </>
    )
}