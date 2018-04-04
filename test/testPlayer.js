const player = require('../src/player');
const should = require('should');

// a global var is used to represent song data
var metronomeData = {};

// testing utility functions
function initData() {
  return [
    {
      name: 'first section',
      tempo: '110',
      timesig: '1/4',
      length: 1
    },
    {
      name: 'second section',
      tempo: '120',
      timesig: '2/4',
      length: 2
    },
    {
      name: 'third section',
      tempo: '130',
      timesig: '3/4',
      length: 3
    },
    {
      name: 'fourth section',
      tempo: '140',
      timesig: '4/4',
      length: 4
    }
  ];
}

describe('player module', function(){
  beforeEach(function(){
    metronomeData = initData();
  });

  describe('#set', function(){
    it('should use an array of indicies to set measures measures', function(){
      let indicies = [1,2];
      player.set(indicies);
      player.getSection(0).should.deepEqual(metronomeData[1]);
      player.getSection(1).should.deepEqual(metronomeData[2]);
      should(player.getSection(2)).equal(undefined);
    });
  });
  describe('#play', function(){

  });
  describe('#pause', function(){

  });
  describe('#fastForward', function(){

  });
  describe('#skipForward', function(){

  });
  describe('#skipBack', function(){

  });
  describe('#rewind', function(){

  });
});
