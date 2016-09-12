var Record = React.createClass({
  recordRow: function(){
    return(
        <tr>
          <td>{this.props.record.date}</td>
          <td>{this.props.record.title}</td>
          <td>{amountFormat(this.props.record.amount)}</td>
          <td>
            <a className="btn btn-default" onClick={this.handleToggle}>
              Edit
            </a>
            <a className="btn btn-danger" onClick={this.handleDelete}>
              Delete
            </a>
          </td>
        </tr>
      );
    },

renderedRecord: function() {
    if (this.state.edit === true) {
      return this.recordForm();
    } else {
      return this.recordRow();
    }
  },
  
  render: function() {
    return this.renderedRecord();
  }
});