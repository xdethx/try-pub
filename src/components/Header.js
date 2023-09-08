import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { fixedMenuStyle,menuStyle } from '../helpers/styleHelper';
import {
    Container,
 
    
   
    Image,
    
    Menu,
   
  } from 'semantic-ui-react'
class Header extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
      }
      toggleOverlay = (inView) => this.setState({ overlayFixed: !inView })
      toggleTopMenu = (inView) => this.setState({ menuFixed: !inView })
    render() { 


        const { menuFixed } = this.state
        return (
<div>
<Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src='/logo.png' />
              </Menu.Item>
              <Menu.Item header>Movie App</Menu.Item>
              <Menu.Item as={Link} to="/movies">
                Movies
              </Menu.Item>
              <Menu.Item as='a'>Add New</Menu.Item>

            </Container>
          </Menu>
        
</div>

        );
    }
}
 
export default Header;