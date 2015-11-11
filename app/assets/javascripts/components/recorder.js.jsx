var Recorder = React.createClass({
  getInitialState: function () {
    return {isRecording: false, track: new Track ({name: "blah"})};
  },

  componentDidMount: function(){
    KeyStore.addChangeHandler(this.change);
  },

  change: function(){
    var keys = KeyStore.all();
    this.state.track.addNotes(keys);
  },

  render: function () {
    var track = this.state.track;
    return (
      <div className="jukebox">
        <div className="recorder">
          <button onClick={track.startRecording.bind(track)}>Start</button>
          <button onClick={track.stopRecording.bind(track)}>Stop</button>
        </div>
        <button onClick={track.play.bind(track)}>Play</button>
      </div>
    );
  }
});
