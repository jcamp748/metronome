var _ = require('lodash');

var metronomeData = [];
var measures = [];

var addSection = function(section,index) {
  if(index == lastIndex()) {
    metronomeData.push(section);
  } else {
    let begin = metronomeData.slice(0, index);
    let end = metronomeData.slice(index, metronomeData.length);
    let data = [].concat(begin, [section], end);
    metronomeData = data;
  }
  updateMeasures();
};

function getIndex(section) {
  for(var i = 0; i < metronomeData.length; i++) {
    if(_.isEqual(section, metronomeData[i])) {
      return i;
    }
  }
}

var removeSection = function(section) {
  let index = getIndex(section);
  let begin = metronomeData.slice(0, index);
  let end = metronomeData.slice(index + 1, metronomeData.length);
  let data = [].concat(begin, end);
  metronomeData = data;
  updateMeasures();
};

var updateSection = function(section, index) {
  metronomeData[index] = section;
  updateMeasures();
};

function updateMeasures() {
  let measuresArray = [];
  metronomeData.forEach(function(section){
    for(var i = 0; i < section.length; i++) {
      measuresArray.push(section);
    }
  });
  measures = measuresArray;
  // generate lead in measure
  generateLeadInMeasure();
}

function generateLeadInMeasure() {
  let firstSection = metronomeData[0];
  let leadIn = {
    name: 'Lead In',
    tempo: firstSection.tempo,
    timesig: firstSection.timesig,
    length: 1
  };
  measures.unshift(leadIn);
}

var getLeadInMeasure = function() {
  return measures[0];
};

var getMeasure = function(index) {
  return measures[index];
};

var initialize = function(array) {
  metronomeData = array;
  updateMeasures();
};

var getSection = function(index) {
  return metronomeData[index];
};

var lastSection = function() {
  return metronomeData.slice(-1)[0];
};

var lastIndex = function() {
  return metronomeData.length - 1;
};

module.exports = {getSection, getMeasure, addSection,
  removeSection, updateSection, initialize, lastSection,
  getLeadInMeasure, lastIndex};
