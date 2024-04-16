import React, { Component } from 'react';
import { TableProps } from './Table.types';

class Table extends Component<TableProps> {
  render() {
    const { children, className } = this.props;
    return <table className={className}>{children}</table>;
  }
}

export default Table;
