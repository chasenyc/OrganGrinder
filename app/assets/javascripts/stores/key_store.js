(function () {
  var _currKeys = [];
  var CHANGE_EVENT = 'CHANGE';
  var KeyStore = window.KeyStore = $.extend( {},  EventEmitter.prototype);

  KeyStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.eventType) {
      case "addkey":
        KeyStore.addKey(payload.key);
        break;
      case "removekey":
        KeyStore.removeKey(payload.key);
        break;
    }
  });

  KeyStore.addKey = function(char){
    if(_currKeys.indexOf(char) === -1){
      _currKeys.push(char);
      KeyStore.changed();
    }
    console.log(_currKeys);
  };

  KeyStore.removeKey = function (char) {
    var idx = _currKeys.indexOf(char);
    if (idx >= 0) {
      _currKeys.splice(idx, 1);
      KeyStore.changed();
    }
  };

  KeyStore.all = function () {
    return _currKeys.slice();
  };

})();
