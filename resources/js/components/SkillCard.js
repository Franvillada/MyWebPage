import React, {Component} from 'react'

export default class SkillCard extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div id="skill-card" className="skill-card">
                <div>
                    <h3>{this.props.title}</h3>
                </div>
                <div>
                    <p>{this.props.description}</p>
                </div>
                <div>
                    <p>Tools</p>
                    <ul>
                        {this.props.tools.map((tool) =>
                            <li key={tool}>{tool}</li>
                        )}
                    </ul>
                </div>
                
            </div>
        )
    }
}