(function() {
  var root = this;
  var SM = {};
  
  function variance(limit) {
    var rand = Math.floor(Math.random() * limit);
    if (Math.random() > 0.5) {
      return rand; 
    } else {
      return -rand;
    }
  }

  if (!root.Synth) {
    throw new Error('audiosynth library missing');
  }
  SM.INST = root.Synth.createInstrument('piano');
  SM.BPS = 1.4;
  SM.BLEND = 1.5;

  var cur = 0;
  SM.playChord = function(chord, beats) {
    var duration = beats / SM.BPS + SM.BLEND / SM.BPS;
    for (var i = 0; i < chord.length; i++) {
      (function() {
        var note = chord[i];
        setTimeout(function() {
          SM.INST.play(note.letter, note.octave, duration);
        }, (cur / SM.BPS) * (1000 + variance(3)));
      })();
    }
    cur += beats;
  };

  SM.playNote = function(note, beats) {
    SM.playChord([note], beats);
  };

  SM.NOTE = {
    C5:  {letter: 'C', octave: 5},
    D5:  {letter: 'D', octave: 5},
    E5:  {letter: 'E', octave: 5},
    F5:  {letter: 'F', octave: 5},
    G5:  {letter: 'G', octave: 5},
    A5:  {letter: 'A', octave: 5},
    B5:  {letter: 'B', octave: 5},
    C4:  {letter: 'C', octave: 4},
    D4:  {letter: 'D', octave: 4},
    E4:  {letter: 'E', octave: 4},
    F4:  {letter: 'F', octave: 4},
    G4:  {letter: 'G', octave: 4},
    A4:  {letter: 'A', octave: 4},
    B4:  {letter: 'B', octave: 4},
    C:  {letter: 'C', octave: 4},
    D:  {letter: 'D', octave: 4},
    E:  {letter: 'E', octave: 4},
    F:  {letter: 'F', octave: 4},
    G:  {letter: 'G', octave: 4},
    A:  {letter: 'A', octave: 4},
    B:  {letter: 'B', octave: 4}
  };
  
  SM.apply = function(thing) {
    thing.playNote = SM.playNote;
    thing.playChord = SM.playChord;
    thing.note = SM.NOTE;
  }

  root.ScriptedMusic = SM;
 

}.call(this));