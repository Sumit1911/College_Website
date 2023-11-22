function updateLiveTime() {
    var now = new Date();
    var options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kolkata'
    };
    var formattedTime = now.toLocaleString('en-IN', options);
    document.getElementById('timeDate').textContent = formattedTime;
  }
  setInterval(updateLiveTime, 1000);
  updateLiveTime();


  var counterElement = document.getElementById('.counter');
  var count = 0;
  var limit = 6000;
  var speed = 100; 

  function updateCounter() {
    count++;
    if (count <= limit) {
      counterElement.textContent = count;
      if (count % 5 === 0) {
        speed /= 2;
        clearInterval(counterInterval);
        counterInterval = setInterval(updateCounter, speed);
      }
    } else {
      clearInterval(counterInterval);
    }
  }
  var counterInterval = setInterval(updateCounter, speed);