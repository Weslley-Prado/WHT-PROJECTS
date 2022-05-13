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
                <h3 className='contactTitulo'> Deixe sua mensagem aqui</h3>
                <div>
                    <form action="/action_page.php">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                            value={this.state.fname}
                            onChange={e => this.setState({ fname: e.target.value })} />
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."
                            value={this.state.lname}
                            onChange={e => this.setState({ lname: e.target.value })} />


                        <input type="email" id="email" name="email" placeholder="Your email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })} />

                        <input type="text" id="phone" name="phone" placeholder="Seu telefone"
                            value={this.state.phone}
                            onChange={e => this.setState({ phone: e.target.value })} />

                        <input type="text" id="estado" name="estado" placeholder="Seu estado"
                            value={this.state.estado}
                            onChange={e => this.setState({ estado: e.target.value })} />
                         <input type="text" id="cidade" name="cidade" placeholder="Sua cidade"
                            value={this.state.cidade}
                            onChange={e => this.setState({ cidade: e.target.value })} />
                        
                        <textarea id="subject" name="subject" placeholder="Write something.."
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}></textarea>
                        <input className="send"type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
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