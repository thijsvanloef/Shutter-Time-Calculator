function calculateNPF() {
    // TODO: form validation
    var sensorSize = document.querySelector('#sensorSize').value;
    var aperture = document.querySelector('#aperture').value;
    var focalLength = document.querySelector('#focalLength').value;
    var pixelSize = document.querySelector('#pixelSize').value;
    var declination = document.querySelector('#declination').value;
    var accuracy = document.querySelector('#accuracy').value;
    result = accuracy * (16.856 * aperture + 0.0997 * focalLength + 13.713 * pixelSize) / (focalLength * Math.cos(declination))
    document.getElementById("result").innerHTML = result.toFixed(1) + "s";
    simplifiedResult = (35 * aperture + 30 * pixelSize) / focalLength
    document.getElementById("simplifiedResult").innerHTML = simplifiedResult.toFixed(1) + "s";
    fivehundredResult = 500 / (sensorSize * focalLength)
    document.getElementById("fivehundredResult").innerHTML = fivehundredResult.toFixed(1) + "s";
    fourcropResult = (4 - sensorSize) * 100 / focalLength
    document.getElementById("fourcropResult").innerHTML = fourcropResult.toFixed(1) + "s";
  }