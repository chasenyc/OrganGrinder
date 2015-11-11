(function() {

  var _tracks = [];
  var CHANGE_EVENT = 'CHANGE';
  var TrackStore = window.TrackStore = $.extend({}, EventEmitter.prototype);

  TrackStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  TrackStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  TrackStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  TrackStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.eventType) {
      case 'addtrack':
        TrackStore.addTrack(payload.track);
        break;
    }
  });

  TrackStore.addTrack = function (track) {
    _tracks.push(track);
    TrackStore.changed();
  };

  TrackStore.removeTrack = function (track) {
    var idx = _tracks.indexOf(track);
    if (idx >= 0) {
      _tracks.splice(idx,1);
      TrackStore.changed();
    }
  };

  TrackStore.all = function(){
    return _tracks.slice();
  };

})();
