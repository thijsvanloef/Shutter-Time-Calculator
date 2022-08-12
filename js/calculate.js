function calculateNPF() {
  // TODO: form validation
  var sensorSize = document.querySelector('#sensorSize').value;
  var aperture = isNumber(document.querySelector('#aperture').value);
  var focalLength = isNumber(document.querySelector('#focalLength').value);
  var pixelSize = isNumber(document.querySelector('#pixelSize').value);
  var declination = isNumber(document.querySelector('#declination').value);
  var accuracy = isNumber(document.querySelector('#accuracy').value);
  result = accuracy * (16.856 * aperture + 0.0997 * focalLength + 13.713 * pixelSize) / (focalLength * Math.cos(declination))
  document.getElementById("result").innerHTML = result.toFixed(1) + "s";
  simplifiedResult = (35 * aperture + 30 * pixelSize) / focalLength
  document.getElementById("simplifiedResult").innerHTML = simplifiedResult.toFixed(1) + "s";
  fivehundredResult = 500 / (sensorSize * focalLength)
  document.getElementById("fivehundredResult").innerHTML = fivehundredResult.toFixed(1) + "s";
  fourcropResult = (4 - sensorSize) * 100 / focalLength
  document.getElementById("fourcropResult").innerHTML = fourcropResult.toFixed(1) + "s";
}
function isNumber(input) {
  if (!isNaN(input)) {
    return input
  } else {
    document.getElementById("err").innerHTML = "Please enter a valid number"
  }
}