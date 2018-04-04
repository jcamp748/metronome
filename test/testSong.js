// const assert = require('assert').strict;
const song = require('../src/song');
const should = require('should');

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
function leadMeasure(obj) {
  return {
    name: 'Lead In',
    tempo: obj.tempo,
    timesig: obj.timesig,
    length: 1
  };
}
describe('song module', function(){

  describe('#initialize', function(){
    it('can be initialized with an array of sections', function(){
      let testData = initData();
      song.initialize(testData);
      testData.forEach(function(section, index) {
        song.getSection(index).should.deepEqual(section);
      });
      song.getLeadInMeasure().should.deepEqual(leadMeasure(testData[0]));
    });
  });
  describe('modifying metronomeData', function(){
    let testData = {};
    let testSection = {};
    beforeEach(function(){
      testData = initData();
      testSection =
        {
          name: 'test section',
          tempo: '300',
          timesig: '3/8',
          length: '5'
        };
      song.initialize(testData);
    });
    describe('#addSection', function() {
      describe('add section to beginning', function() {
        it('should have 1st section moved to 2nd section', function() {
          song.addSection(testSection, 0);
          song.getSection(0).should.deepEqual(testSection);
          song.getSection(1).should.deepEqual(testData[0]);
          song.getLeadInMeasure().should.deepEqual(leadMeasure(testSection));
        });
      });
      describe('add section to the end', function() {
        it('should have the last section 2nd to last', function() {
          song.addSection(testSection, song.lastIndex());
          song.getSection(song.lastIndex()).should.deepEqual(testSection);
          song.getSection(song.lastIndex() - 1).should.deepEqual(testData[3]);
        });

      });

      describe('add section to the middle', function() {
        it('should add section to metronomeData[1]', function() {
          song.addSection(testSection, 1);
          song.getSection(1).should.deepEqual(testSection);
        });
      });
    });
    describe('#removeSection', function(){
      describe('remove first section', function(){
        it('should have second section be first', function(){
          let firstSection = testData[0];
          song.removeSection(firstSection);
          song.getSection(0).should.deepEqual(testData[1]);
          song.getLeadInMeasure().should.deepEqual(leadMeasure(testData[1]));
        });
      });
      describe('remove last section ', function(){
        it('should have 2nd to last section be last', function(){
          var last = testData.slice(-1)[0];
          song.removeSection(last);
          song.lastSection().should.deepEqual(testData[2]);
        });
      });
      describe('remove middle section', function() {
        it('should have 3rd section be 2nd', function() {
          var second = testData[1];
          song.removeSection(second);
          song.getSection(1).should.deepEqual(testData[2]);
        });
      });
    });
    describe('#updateSection', function(){
      it('should uptade 2nd section data', function() {
        song.updateSection(testSection, 1);
        song.getSection(1).should.deepEqual(testSection);
      });
      it('should update lead in measure after updating first section', function(){
        song.updateSection(testSection, 0);
        song.getSection(0).should.deepEqual(testSection);
        song.getLeadInMeasure().should.deepEqual(leadMeasure(testSection));
      });
    });
  });
});
