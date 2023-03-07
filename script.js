// JavaScript code to handle the color boxes

let colorBoxes = document.querySelectorAll(".color-box");

colorBoxes.forEach(function(box) {
	box.addEventListener("click", function() {
		let color = this.style.backgroundColor;
		let hexColor = rgbToHex(color);
		navigator.clipboard.writeText(hexColor);
		alert("Color " + hexColor + " copied to clipboard!");
	});
});

// Function to convert RGB color to HEX color

function rgbToHex(rgbColor) {
  let rgb = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(num) {
    let hex = Number(num).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
