'require strict'

function alerting() {
  alert('the lounge is not fully furnished as of yet...');
}

document.getElementById('enterButton').addEventListener('click', alerting);