import React,{ Component } from 'react'
import ReactDOM from 'react-dom'

export default class ContactForm extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="contact-form" class="contact-form">
                <p>Leave me message and I will contact you ASAP</p>
                <form>
                    <input type="text" id="name" />
                    <input type="email" id="email" />
                    <textarea>

                    </textarea>
                    <button type="submit">Enviar</button>
                </form>
                <Footer />
            </div>    
        )
    }
}

if(document.getElementById('contact')) {
    ReactDOM.render(<ContactForm />, document.getElementById('contact'));
}