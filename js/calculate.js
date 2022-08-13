function calculateNPF() {
  var sensorSize = document.querySelector('#sensorSize').value;
  var aperture = isNumber(document.querySelector('#aperture').value);
  var focalLength = isNumber(document.querySelector('#focalLength').value);
  var pixelSize = isNumber(document.querySelector('#pixelSize').value);
  var declination = isNumber(document.querySelector('#declination').value);
  var accuracy = isNumber(document.querySelector('#accuracy').value);
  plateResult = (206265 * (pixelSize / 1000) / focalLength) / 15;
  document.getElementById("plateResult").innerHTML = plateResult.toFixed(1) + "s";
  noEqplateResult = ((206265 * (pixelSize / 1000) / focalLength) / 15) / Math.cos(declination*3.14159/180);
  document.getElementById("noEqplateResult").innerHTML = noEqplateResult.toFixed(1) + "s";
  result = accuracy * (16.856 * aperture + 0.0997 * focalLength + 13.713 * pixelSize) / (focalLength * Math.cos(declination*3.14159/180));
  document.getElementById("result").innerHTML = result.toFixed(1) + "s";
  simplifiedResult = (35 * aperture + 30 * pixelSize) / focalLength;
  document.getElementById("simplifiedResult").innerHTML = simplifiedResult.toFixed(1) + "s";
  var numberRule;
  if (accuracy == 1) {
    numberRule = 200;
  }
  else if (accuracy == 2) {
    numberRule = 300;
  }
  else {
    numberRule = 500;
  }
  numberResult = numberRule / (sensorSize * focalLength)
  document.getElementById("numberResult").innerHTML = numberResult.toFixed(1) + "s";
  document.getElementById("numberRule").innerHTML = numberRule + " rule";
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