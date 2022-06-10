import './Form.css'
import React, { Component } from 'react'
import axios from 'axios';

const API_PATH = 'https://www.westhightechnology.com.br/php/index.php';


export default class Form extends Component {



    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }

    }


    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    };
    render() {
        return (
            <div className="Form">
                <div>
                    <form action="/action_page.php">
                        <input type="text" id="fname" name="firstname" placeholder="First name..."
                            value={this.state.fname}
                            onChange={e => this.setState({ fname: e.target.value })} />
                        <input type="text" id="lname" name="lastname" placeholder="Last name..."
                            value={this.state.lname}
                            onChange={e => this.setState({ lname: e.target.value })} />


                        <input type="email" id="email" name="email" placeholder="E-mail"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })} />

                        <input type="text" id="phone" name="phone" placeholder="Phone"
                            value={this.state.phone}
                            onChange={e => this.setState({ phone: e.target.value })} />

                        <input type="text" id="estado" name="estado" placeholder="State"
                            value={this.state.estado}
                            onChange={e => this.setState({ estado: e.target.value })} />
                        <input type="text" id="cidade" name="cidade" placeholder="City"
                            value={this.state.cidade}
                            onChange={e => this.setState({ cidade: e.target.value })} />

                        <textarea id="subject" name="subject" placeholder="Write your message..."
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}></textarea>
 <label for="fupload" class="control-label label-bordered">Choose a file</label>
     <input type="file" id="fupload" name="fupload" class="fupload form-control" /><br/>
                        <label> Mark where you prefer the answer:
                            
                        </label><br/>

                        <input
                                name="isGoing"
                                type="checkbox"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange} /><label className="active"> E-mail </label>
                        <input
                                name="isGoing"
                                type="checkbox"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange} /><label className="active"> WhatsApp </label> <br/>
                        <input className="send" type="submit" onClick={e => this.handleFormSubmit(e)} value="Send" />
                        <div>
                            {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}