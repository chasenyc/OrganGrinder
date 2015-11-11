var Key = React.createClass({
  getInitialState: function(){
    return {note: new Note(TONES[NOTES[this.props.noteName]]), playing: false };
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(this.startPlaying);
  },

  startPlaying: function(){
    var keys = KeyStore.all();
    // debugger;
    var idx = keys.indexOf(this.props.noteName);
    if (idx >= 0) {
      this.state.note.start();
      this.setState({playing: true});
    } else {
      this.stopPlaying();
    }
  },

  stopPlaying: function () {
    this.state.note.stop();
    this.setState({playing: false});
  },

  render: function(){
    var playing = (this.state.playing) ? "playing" : "";
    klass = "key " + this.props.noteName + " " + playing;
    return <div className={klass}></div>;
  }

});
