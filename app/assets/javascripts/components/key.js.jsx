var Key = React.createClass({
  getInitialState: function(){
    return {note: new Note(TONES[this.props.noteName])};
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(this.startPlaying);
  },

  startPlaying: function(){
    var keys = KeyStore.all();
    var idx = keys.indexOf(this.props.noteName);
    if (idx >= 0) {
      this.state.note.start();
    } else {
      this.stopPlaying();
    }
  },

  stopPlaying: function () {
    this.state.note.stop();
  },

  render: function(){
    console.log("laksdjflkajfkl");
    return <div></div>;
  }

});
