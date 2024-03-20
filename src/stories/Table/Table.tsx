import React, { Component } from 'react';

class Table extends Component<TableProps> {
  render() {
    const { children, className } = this.props;
    return <table className={className}>{children}</table>;
  }
}

export default Table;
