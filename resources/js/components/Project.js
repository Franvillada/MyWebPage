import React, {Component} from 'react'

export default class Project extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="project" className="project">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}