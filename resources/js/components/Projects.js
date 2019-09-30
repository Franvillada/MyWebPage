import React, {Component} from 'react'
import Project from './Project'


export default class Projects extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="projects" className="projects">
                <h3>Some Projects</h3>
                <div className="projects-grid">
                    <Project
                        title = "Adelaida Landing-Page"
                        description = "Landing Page for a lingerie store, with a content manager to give the owner the posibility to update the page with new content, images or news."
                        imgUrl = "img/adelaida.png"
                        url = "//www.adelaida.com.ar"
                    />
                    <Project 
                        title = "FCC Landing-Page"
                        description = "FCC project to obtain the Responsive Web Design Certification. Product Landing Page for a Trombone business."
                        imgUrl = "img/trombones.png"
                        url = "https://codepen.io/franvillada/full/gVwOwV"
                    />
                    <Project 
                        title = "FCC Tribut-Page"
                        description = "FCC project to obtain the Responsive Web Design Certification. Tribut page of Dr Norman Borlaug."
                        imgUrl = "img/norman.png"
                        url = "https://codepen.io/franvillada/full/YmWqvO"
                    />
                    <Project 
                        title = "FCC Technical Documentation-Page"
                        description = "FCC project to obtain the Responsive Web Design Certification. Technical Documentation page for JavaScript programming language."
                        imgUrl = "img/tech-doc.png"
                        url = "https://codepen.io/franvillada/full/aeBOyN"
                    />
                </div>
            </div>
        )
    }
}