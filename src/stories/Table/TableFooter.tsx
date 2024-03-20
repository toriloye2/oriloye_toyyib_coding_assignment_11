import React, { Component } from "react";

class TableFooter extends Component<TableFooterProps> {
  render() {
    const { children, className } = this.props;
    return <tfoot className={className}>{children}</tfoot>;
  }
}

export default TableFooter;
