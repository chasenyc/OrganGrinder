var Jukebox = React.createClass({
  getInitialState: function () {
    return {tracks: []};
  },

  componentDidMount: function(){
    TrackStore.addChangeHandler(this.change);
  },

  change: function(){
    var tracks = TrackStore.all();
    this.setState({tracks: tracks});
  },

  render: function(){
    var tracks = TrackStore.all();
    return <div className='jukebox'>{tracks.map(function(track){
      return <TrackPlayer track={track} />;

    })}</div>;

  }

});
