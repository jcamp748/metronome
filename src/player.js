var sections = [];          // the sections to be played
var measures = [];          // the measures to be played
var loop = false;           // loop over the staging array
var section = {};           // the current section data
var measure = {};           // the current measure data
var measureNumber = 0;      // the current measure being played

var start = function() {

};

var stop = function() {

};

// pass an array of indicies to be pulled from metronomeData
var set = function(indicies) {

};

var play = function() {

};

var pause = function() {

};

var fastForward = function() {

};

var skipForward = function() {

};

var skipBack = function() {

};

var rewind = function() {

};

var getSection = function(index) {
  return sections[index];
};

var getMeasure = function(index) {
  return measures[index];
};

var setLoop = function(bool) {
  loop = bool;
};

module.exports = { play, pause, set, fastForward, skipForward,
  skipBack, rewind, getSection, getMeasure, setLoop};
