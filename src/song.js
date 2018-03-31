var _ = require('lodash');

var metronomeData = [];
var measures = [];

var addSection = function(section,index) {
  let begin = metronomeData.slice(0, index);
  let end = metronomeData.slice(index, metronomeData.length);
  let data = [].concat(begin, [section], end);
  metronomeData = data;
  updateMeasures();
};

var createSection = function(name, tempo, timesig, len) {
  return {
    name: name,
    tempo: tempo,
    timesig: timesig,
    length: len
  };
};

function getIndex(section) {
  metronomeData.forEach(function(currentValue, index){
    if(_.isEqual(section, currentValue)){
      return index;
    }
  });
}

var removeSection = function(section) {
  let index = getIndex(section);
  let begin = metronomeData.slice(0, index);
  let end = metronomeData.slice(index, metronomeData.length);
  let data = [].concat(begin, end);
  metronomeData = data;
  updateMeasures();
};

var updateSection = function(section, index) {
  metronomeData[index] = section;
};

function updateMeasures() {
  let measuresArray = [];
  metronomeData.forEach(function(section){
    for(var i = 0; i < section.length; i++) {
      measuresArray.push(section);
    }
  });
  measures = measuresArray;
}

var getMeasure = function(index) {
  return measures[index];
};


module.exports = function initialize(array) {
  metronomeData = array;
};

var getSection = function(index) {
  return metronomeData[index];
};

module.exports = {getSection, getMeasure, createSection, addSection,
  removeSection, updateSection};
