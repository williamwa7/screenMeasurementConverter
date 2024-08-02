function convertMeasurement() {
  var pixelValue = parseFloat(document.getElementById("pixelInput").value);
  if (isNaN(pixelValue)) {
    document.getElementById("outputResult").value = "";
    return;
  }
  var conversionSystem = document.getElementById("conversionSystem").value;
  var outputResult = document.getElementById("outputResult");

  var convertedValue;
  var conversionSystemUnit;

  switch (conversionSystem) {
    case "mm":
      convertedValue = pixelValue * 0.2645833;
      conversionSystemUnit = "mm";
      break;
    case "cm":
      convertedValue = pixelValue * 0.0264583;
      conversionSystemUnit = "cm";
      break;
    case "in":
      convertedValue = pixelValue * 0.0104167;
      conversionSystemUnit = "in";
      break;
    case "pt":
      convertedValue = pixelValue * 0.75;
      conversionSystemUnit = "pt";
      break;
    case "em":
      convertedValue = pixelValue * 0.0625;
      conversionSystemUnit = "em";
      break;
    case "rem":
      convertedValue = pixelValue * 0.0625;
      conversionSystemUnit = "rem";
      break;
    case "vw":
      convertedValue = pixelValue * 0.01;
      conversionSystemUnit = "vw";
      break;
    case "vh":
      convertedValue = pixelValue * 0.01;
      conversionSystemUnit = "vh";
      break;
    case "percentage":
      convertedValue = pixelValue * 0.01;
      conversionSystemUnit = "%";
      break;
    default:
      convertedValue = 0;
      conversionSystemUnit = "";
      break;
  }

  outputResult.value = convertedValue.toFixed(2) + " " + conversionSystemUnit;
}

function copyValue() {
  var outputResult = document.getElementById("outputResult");
  outputResult.select();
  document.execCommand("copy");
}
