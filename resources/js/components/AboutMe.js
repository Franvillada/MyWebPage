import React, {Component} from 'react'
import SkillCard from './SkillCard'

export default class AboutMe extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="about-me" className="about-me">
                <div className="description">
                    <h2>Hi!! My name is Francisco Villada</h2>
                    <p>I'm an Industrial Engineer graduated from the Catholic University of Argentina. I always been interested in software development, and for about 2 years I'm studying Web Development. I'm reliable person, 100% dedicated to my work. I find myself continually learning new techonologies and practices to deliver the best possible product.</p>
                </div>
                <div className="skills">
                    <div className="mmm">
                        <SkillCard 
                            title="Technologies & Programming Languages"
                            description="Specialized in PHP and JavaScript the languages created for the web. I write semantic code, using the new HTML5 tags, for a good SEO position."
                            tools={["HTML 5","CSS 3","JavaScript ES6","PHP","MySQL"]}
                        />
                        <SkillCard 
                            title="Libraries & Frameworks"
                            description="I use React.js to achieve clean and component-based interfaces. I also use Laravel as a framework to build robust and scalable web applications."
                            tools={["React.js","Laravel","Bootstrap"]}
                        />
                        <SkillCard 
                            title="Other Tools"
                            description="This are my day to day tools that help me in my work."
                            tools={["GIT","Visual Studio Code","Terminal","Adobe XD","Illustrator"]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}