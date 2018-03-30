var _ = require('lodash');

var metronomeData = [];
var measures = [];

module.exports = function addSection(section, index) {
  let begin = metronomeData.slice(0, index);
  let end = metronomeData.slice(index, metronomeData.length);
  let data = [].concat(begin, [section], end);
  metronomeData = data;
  updateMeasures();
};
module.exports = function createSection(name, tempo, timesig, len) {
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

module.exports = function removeSection(section) {
  let index = getIndex(section);
  let begin = metronomeData.slice(0, index);
  let end = metronomeData.slice(index, metronomeData.length);
  let data = [].concat(begin, end);
  metronomeData = data;
  updateMeasures();
};


module.exports = function updateSection(section, index) {
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

module.exports = function getMeasure(index) {
  return measures[index];
};

module.exports = function getSection(index) {
  return metronomeData[index];
};

module.exports = function initialize(array) {
  metronomeData = array;
};
