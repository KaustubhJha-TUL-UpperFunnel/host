import React, { Component } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Form,Button } from 'react-bootstrap';
import Axios from 'axios';

class ContactPage extends Component{
    state = {
        name:"",
        email:"",
        message: "",
        disabled:false,
        emailSent: null,
    }

    handleChange =(event)=>{
        //console.log(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked:target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })

    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            disabled:true,
            emailSent:false
        })

        Axios.post('http://localhost:3030/api/email', this.state)
        .then(res=>{
            if(res.data.success){
                this.setState({
                    disabled: false,
                    emailSent: true
                })
            }
            else{
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            }
            
        })
        .catch(error=>{
            this.setState({
                disabled: false,
                emailSent: false
            })
        })
    }
    render(){
        return(
            <div>
                <Hero title={this.props.title} subtitle={this.props.subtitle} text={this.props.text}>
                    <strong>kaustubhjha1998@gmail.com</strong>
                </Hero>
            

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control if="full-name" name="name" type="text" value={this.state.name} onChange={(event)=>{this.handleChange(event)}}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control if="email" name="email" type="email" value={this.state.email} onChange={(event)=>{this.handleChange(event)}}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control if="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={(event)=>{this.handleChange(event)}}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent===true && <p className="d-inline success-msg">Email Sent</p>}
                        
                        {this.state.emailSent===false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        )
    }
}

export default ContactPage;