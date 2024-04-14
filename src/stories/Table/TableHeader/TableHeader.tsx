import React, { Component } from "react";

class TableHeader extends Component<TableHeaderProps> {
  render() {
    const { children, className } = this.props;
    return <thead className={className}>{children}</thead>;
  }
}

export default TableHeader;
