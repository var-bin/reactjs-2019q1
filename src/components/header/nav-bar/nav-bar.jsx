import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class NavBarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleContainer = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState((state) => ({
      isOpen: !state.isOpen
    }));
  }

  handleClickOutside = (e) => {
    if (this.state.isOpen && !this.toggleContainer.current.contains(e.target)) {
      this.setState({
        isOpen: false
      });
    }
  }

  render() {
    const isActiveCSSClass = !this.state.isOpen ? '' : 'is-active';

    const navbarBurgerCSSClass = `navbar-burger ${isActiveCSSClass}`;
    const navbarMenuCSSClass = `navbar-menu ${isActiveCSSClass}`;

    return (
      <div className="hero">
        <nav
          className="app__header-navbar navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div
            className="navbar-brand"
            ref={this.toggleContainer}
          >
            <a
              role="button"
              className={navbarBurgerCSSClass}
              aria-label="menu"
              aria-expanded={this.state.isOpen}
              onClick={this.handleClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={navbarMenuCSSClass}>
            <div className="navbar-start">
              <NavLink
                to="/"
                className="navbar-item"
                exact
                activeClassName="is-active"
              >
                Home
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
