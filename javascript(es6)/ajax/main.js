// exorcist 1
function currentTime(){
    fetchTime()
}

function fetchTime(){
    fetch('http://api.timezonedb.com/v2.1/list-time-zone?key=YKRJT4M0HEOI&format=json&country=HU')
      .then(response => {
        return response.json()
      })
      .then(data => {
        // Work with JSON data here
        let button = document.getElementById("timeHere")
        let date = new Date((data.zones[0].timestamp-data.zones[0].gmtOffset)*1000);
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        let seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        button.textContent = formattedTime
      })
      .catch(err => {
        // Do something for an error here
  });
}

// exorcist 2
function zoneDrop(){
  let select = document.getElementById("zoneChanger")
  select.addEventListener('change', function(){
  console.log(select.value)

  })
  var x = document.getElementById("zoneChanger").selectedIndex;
  var y = document.getElementById("zoneChanger").options;
  fetchZone()
}

function fetchZone(){
  const url = "https://api.aerisapi.com/observations/"
  fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    // still working here with jason statham

  })
  .catch(err => {
    // should write something here
    console.log(err)
  })
}

zoneDrop();