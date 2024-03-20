import React, { Component } from 'react';

class HeaderText extends Component<HeaderTextProps> {
  render() {
    const { text, level: Tag, className } = this.props;
    return <Tag className={className}>{text}</Tag>;
  }
}

export default HeaderText;
