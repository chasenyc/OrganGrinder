window.TrackActions = {

  addTrack: function(track) {
    AppDispatcher.dispatch({
      eventType: 'addtrack',
      track: track
    });
  }

};
