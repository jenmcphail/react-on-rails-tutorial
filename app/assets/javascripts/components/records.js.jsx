var Records = React.createClass({
  getInitialState: function() {
    return {records: this.props.data};
  },

  getDefaultProps: function(){
    return {records: []};
  },

  addRecord: function(record) {
    var records = React.addons.update(this.state.records, {$push: [record]})
    this.setState({records: records})
  },

//   deleteRecord: function(record) {
//     var index = this.state.records.indexOf(record)
//     var records = React.addons.update(this.state.records, {$splice: [[index, 1]]});
//     this.replaceState({ records: records })
//   },

//   updateRecord: function(record, data){
//     var index = ths.state.records.indexOf(record);
//     var records = React.addons.update(this.state.records, {$splice [[index, 1, data]]});
//     this.replaceState({ records: records });
//   },
// updateRecord: function(record, data) {

//     var index = this.state.records.indexOf(record);
//     var records = React.addons.update(this.state.records, { $splice: [index, 1, data] });
//     this.replaceState({ records: records });
//   },


  render: function() {
    return(
      <div className='records'>
        <h2 className='title'>
          Records
        </h2>
      </div>
    );
  }
});