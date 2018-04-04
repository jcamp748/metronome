
var timer = null;

function tick() {
  postMessage('tick');
}

onmessage = function(e) {
  if(e.message == 'start') {
    let interval = ( 1 / e.tempo ) * 60 * 1000;
    timer = setInterval(tick(), interval);
  } else if(e.message == 'stop') {
    clearInterval(timer);
  } else {
    // do something else
  }
};
