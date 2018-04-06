import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/ch_logo.svg'
import animated_logo from '../img/ch_logo_animate.svg'

export default class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      mouseOver: false,
    }
  }

  mouseEnter = () => {
    this.setState({ mouseOver: true })
  }
  mouseLeave = () => {
    this.setState({ mouseOver: false })
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure
                className="image"
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
              >
                {this.state.mouseOver ? (
                  <img
                    src={animated_logo}
                    alt="Charli Hungry"
                    style={{ width: '40px', maxHeigh: '2.5em' }}
                  />
                ) : (
                  <img
                    src={logo}
                    alt="Charli Hungry"
                    style={{ width: '40px', maxHeigh: '2.5em' }}
                  />
                )}
              </figure>
            </Link>
          </div>
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
