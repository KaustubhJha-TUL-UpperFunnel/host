import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container,Navbar, Nav} from 'react-bootstrap';
import Footer from './components/Footer';

import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends Component{
  
  state = {
    title: "Kaustubh Jha",
    headerLinks:[
      {title:'Home', path:'/'},
      {title:'About', path:'/about'},
      {title:'Contact', path:'/contact'}
    ],
    home: {
      title: 'Exploring Possibilities',
      subtitle: 'Projects That I Did',
      text: 'Checkout my projects below'
    },
    about:{
      title: 'About Me',
    },
    contact:{
      title: 'Contact Me Here',
      text: 'Can\'t figure out the issue with contanct page, You can Just Email me Here',
      
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className='border-bottom' bg="transparent" expand="md">
            <Navbar.Brand>Kaustubh Jha</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/Contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" render={()=><HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          {/* <Route path="/host" exact render={()=><HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} /> */}
          <Route path="/about" render={()=><AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={()=><ContactPage title={this.state.contact.title} text={this.state.contact.text}/>} />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
