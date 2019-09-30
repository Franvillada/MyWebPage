import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'

export default class ContactForm extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="contact-form">
                <a href="/">Home</a>
                <img className="logo" src="img/logo.svg" alt="logo"></img>
                <p>Leave me message and I will contact you ASAP...</p>
                <form>
                    <input type="text" id="name" placeholder="Name"/>
                    <input type="email" id="email" placeholder="Email" />
                    <textarea id="message" placeholder="Leave a message">
                    </textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

if(document.getElementById('contact-form')) {
    ReactDOM.render(<ContactForm />, document.getElementById('contact-form'));
}