import React, {Component} from 'react';
import './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Logo from '../img/CrimeCheck_ CClogoWhite.png';

class Header extends Component {
       state = {
          isOpen: false
        };
    
    toggleNavbar = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    render(){
        return(
            <div>
            <Navbar expand="md" className="topNav">
              <img src={Logo} className="header-logo"></img>
              <button type="button" className="navbar-toggler" onClick={this.toggleNavbar} ><i className="fas fa-bars"></i></button>


              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }

}

export default Header;
