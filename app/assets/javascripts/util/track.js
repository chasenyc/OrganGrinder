(function () {
  var Track = window.Track = function (attributes) {
    this.name = attributes.name;
    this.roll = attributes.roll || [];
    this.startTime = '';
  };

  Track.prototype.startRecording = function () {
    this.roll = [];
    this.startTime = new Date();
  };

  Track.prototype.stopRecording = function () {
    this.addNotes([]);
  };

  Track.prototype.addNotes = function (notes) {
    var currTime = new Date ();
    var startTime = this.startTime;

    this.roll.push({
      timeSlice: (currTime - startTime),
      notes: notes
    });
  };

  Track.prototype.play = function(){
    var length = this.roll.length;
    var i = 0;
    var playBackStartTime = Date.now();
    var intervalId;
    var callback = function(){
      if (i >= length) {
        clearInterval(intervalId);
      } else if (Date.now() - playBackStartTime > this.roll[i].timeSlice){
        var curKeys = KeyStore.all();
        curKeys.forEach(function(note){
          KeyActions.removeKey(note);
        });
        this.roll[i].notes.forEach(function(note){
        KeyActions.addKey(note);
      });
        console.log(i);
        i++;
      }
    };
    intervalId = setInterval(callback.bind(this), 10);


  };
})();
