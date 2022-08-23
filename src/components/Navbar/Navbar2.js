import React, { useContext, useState } from "react";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { ThemeContext } from "../theme";
import {LinkContainer} from 'react-router-bootstrap'


import "../Navbar/Navbar.css";

function Navbar2() {

    const [{navbartheme, isDark}, toggleTheme] = useContext(ThemeContext)



    
    

  return (
    <Navbar className="asd" variant={isDark ? `dark` : `light`} collapseOnSelect expand="lg" style={{ backgroundColor:navbartheme.backgroundColor, color:navbartheme.color}} >
        <Container >
            <LinkContainer to="/">
            <Navbar.Brand> {isDark ? <img src="constant/whitelogo.png" alt="" /> : <img src='constant/Logo.png' alt="" />}</Navbar.Brand>
            </LinkContainer>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav >
                
                <NavDropdown className="nav_dropdown" title="Pourquoi Resilience ?" id="collasible-nav-dropdown"> 
                   <LinkContainer to="/manifest">
                   <NavDropdown.Item className='toggle'><img src="constant/manifest.png" alt=""/>Manifeste</NavDropdown.Item>
                   </LinkContainer>
                   
                
                   
                    <NavDropdown.Item href="#action/3.2"><img src="constant/vector.png" alt=""/>Le Cashback Solidaire</NavDropdown.Item>
                   
                </NavDropdown>

               
                <NavDropdown className="nav_dropdown" title="En savoir plus" id="collasible-nav-dropdown">

             
                  <LinkContainer to="/saviourplus">
                  <NavDropdown.Item><img src="constant/props.png" alt=""/>A propos</NavDropdown.Item>
                  </LinkContainer>
                    
                    <NavDropdown.Item href="#action/3.2"><img src="constant/faq.png" alt=""/>FAQ</NavDropdown.Item>
                 
                   
                    
                </NavDropdown>
            
                </Nav>

                <Nav className="right_navbar">
                
                <Nav.Link  onClick={toggleTheme} className="modechane" href="#memes">{isDark ? <img src="constant/lightmode.png" alt=""/> : <img src='constant/mode.png' alt="" />}</Nav.Link>
                <Nav.Link className="language" href="#deets"><i class="fas fa-globe"></i> FR</Nav.Link>
                <Nav.Link className="connexion" href="#memes">Connexion</Nav.Link>
              
                <button className="sincrire">S’incrire</button>
           
                

                
                </Nav>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
    
  )
}

export default Navbar2