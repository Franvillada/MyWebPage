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
                        title=""
                        description=""
                        imgUrl=""
                    />
                    <Project 
                        title=""
                        description=""
                        imgUrl=""
                    />
                    <Project 
                        title=""
                        description=""
                        imgUrl=""
                    />
                    <Project 
                        title=""
                        description=""
                        imgUrl=""
                    />
                </div>
            </div>
        )
    }
}