const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getRandomNumbers(WIDTH),
  y: getRandomNumbers(HEIGH),
};
let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;
$map.addEventListener("click", (e) => {
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  clicks++;
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;
  if (distance < 20) {
    alert("found the Treasure in " + clicks);
    location.reload();
  }
});
