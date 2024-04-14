import React, { Component } from "react";

class TableCell extends Component<TableCellProps> {
  render() {
    const { children, className } = this.props;
    return <td className={className}>{children}</td>;
  }
}

export default TableCell;
