var TrackPlayer = React.createClass({

  playTrack: function(){
    this.props.track.play();
  },

  deleteTrack: function(){
    TrackStore.removeTrack(this.props.track);
  },

  render: function(){

    return <div className='jukebox-track-player'>
            <li>{this.props.track.name} 
            <button onClick={this.playTrack}>Play</button>
            <button onClick={this.deleteTrack}>Delete</button>
            </li>
          </div>;
  }
});
