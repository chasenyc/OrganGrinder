window.KeyActions = {

  addKey: function (key) {
    AppDispatcher.dispatch({
      eventType: "addkey",
      key: key
    });
  },

  removeKey: function(key){
    AppDispatcher.dispatch({
      eventType: "removekey",
      key: key
    });

  }

};
