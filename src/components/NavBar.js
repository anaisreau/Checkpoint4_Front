import React, { Component } from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
        <Link to ='/'> <Menu.Item
            name='Accueil'
            active={activeItem === 'Accueil'}
            onClick={this.handleItemClick}
          /></Link>
          
      <Link to ='/SignUp'><Button color='green'>Sign up</Button></Link>
      <Link to ='/auth'><Button>Log-in</Button></Link>
    
        </Menu>
      </Segment>
    )
  }
}
