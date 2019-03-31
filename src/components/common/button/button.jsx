import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <button type="button">
        {children}
      </button>
    );
  }
}
