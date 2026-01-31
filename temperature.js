fetch("https://raw.githubusercontent.com/SebSeb11/iob-data/main/temperature.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("temperature").innerHTML = html;
  });
