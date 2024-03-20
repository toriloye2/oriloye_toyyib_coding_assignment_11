import React, { Component } from "react";

class TableRow extends Component<TableRowProps> {
  render() {
    const { children, className } = this.props;
    return <tr className={className}>{children}</tr>;
  }
}

export default TableRow;
