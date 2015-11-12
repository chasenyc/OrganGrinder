(function () {
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();
  // var Note = window.Note = {};

  var Note = window.Note = function (freq) {

    this.freq = freq;
    this.oscillatorNode = new createOscillator(freq);
    this.gainNode = new createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  };

  Note.prototype.start = function () {
    this.gainNode.gain.value = 1;
  };
  Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };

  var createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.detune.value = 1;
    osc.start(ctx.currentTime);
    return osc;
  };

  var createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };



})();
