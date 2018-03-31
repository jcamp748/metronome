const assert = require('assert').strict;
const song = require('../src/song');

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

describe('song module', function(){
  it('should start with empty metronomeData', function(){
    assert.strictEqual(song.getSection(0), 1);
  });

  it('should start with empty metronomeData', function(){
    assert.strictEqual(song.getMeasure(0), undefined);
  });

  describe('modifying metronomeData', function(){
    beforeEach(function(){
      let data = initData();
    });


  });


});
