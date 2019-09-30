import React, {Component} from 'react'

export default class Project extends Component{
    constructor(props){
        super(props)
        this.state={
            hover: false
        }
        this.handleHover = this.handleHover.bind(this)
    }

    handleHover(){
        if(this.state.hover === false){
            this.setState({
                hover: true
            })
        }else{
            this.setState({
                hover: false
            })
        }
    }
    render(){
        const imgStyles={
            position: "absolute",
            left: "0",
            top: "0",
            height: "50vh",
            width: "30vw",
            backgroundImage: "url(" + this.props.imgUrl + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: this.state.hover ? "0.15" : "1"
        }
        const infoStyles = {
            display: this.state.hover ? "flex" : "none",
        }
        return(
            <div id={this.props.title} className="project" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <div style={imgStyles}></div>
                <div style={infoStyles} className="info-project-container">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <a href={this.props.url} target="_blank">Visit!</a>
                </div>
                
            </div>
        )
    }
}