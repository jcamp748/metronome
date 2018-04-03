const controls = require('../src/controls');
const should = require('should');
const song = require('../src/song');


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

describe('controls module', function(){
  beforeEach(function(){
    let testData = initData();
    song.initialize(testData);
  });

});
