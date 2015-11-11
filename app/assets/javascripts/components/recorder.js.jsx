var Recorder = React.createClass({
  getInitialState: function () {
    return {
      isRecording: false,
      track: new Track({name: ""}),
      trackName: ""
    };
  },

  componentDidMount: function(){
    KeyStore.addChangeHandler(this.change);
  },

  change: function(){
    var keys = KeyStore.all();
    this.state.track.addNotes(keys);
  },

  saveRecording: function () {
    this.state.track.setName(this.state.trackName);
    TrackActions.addTrack(this.state.track);
    this.setState({track: new Track({name: this.state.trackName}), trackName: ""});
  },

  trackNameChanged: function(e){
    this.setState({trackName: e.currentTarget.value});
  },

  startRecording: function(){
    this.state.track.startRecording();
  },

  stopRecording: function(){
    this.state.track.stopRecording();
  },

  playRecording: function(){
    this.state.track.play();
  },

  render: function () {
    var track = this.state.track;
    return (
      <div className="jukebox">
        <div className="recorder">
          <button onClick={this.startRecording}>Start</button>
          <button onClick={this.stopRecording}>Stop</button>
        </div>
        <button onClick={this.playRecording}>Play</button>
        <button onClick={this.saveRecording}>Save</button>
          <input type="text" onChange={this.trackNameChanged}
                 value={this.state.trackName}/>
        <Jukebox />
      </div>
    );
  }
});
