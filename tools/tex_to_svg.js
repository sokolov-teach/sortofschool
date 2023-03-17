const latexToSvg = function (formula) {
  return new Promise((resolve, reject) => {
    let wrapper = MathJax.tex2svg(`${formula}`, { em: 10, ex: 5, display: true });
    let mjOut = wrapper.getElementsByTagName("svg")[0];
    resolve(mjOut.outerHTML);
  });
};



const svgToPng = async function (svg, width, height, scaleFactor = 15) {
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  const image = new Image();
  image.src = url;
  await new Promise((resolve) => (image.onload = resolve));

  const canvas = document.createElement("canvas");
  canvas.width = (width || image.width) * scaleFactor;
  canvas.height = (height || image.height) * scaleFactor;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  URL.revokeObjectURL(url);
  return canvas.toDataURL("image/png");
};

document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("convert-btn");
  const latexInput = document.getElementById("latex-input");
  const svgOutput = document.getElementById("svg-output");
  const downloadLink = document.getElementById("download-link");
  const downloadPngLink = document.getElementById("download-png-link");
  const whiteCheckbox = document.getElementById("white-checkbox");


  convertBtn.addEventListener("click", async function () {
    const formula = latexInput.value;
    if (formula) {
      try {
        const coloredFormula = whiteCheckbox.checked ? `\\color{white}{${formula}}` : formula;
        const svg = await latexToSvg(coloredFormula);

        svgOutput.innerHTML = svg;

        // Set the background color for the svg-output element
        svgOutput.style.backgroundColor = whiteCheckbox.checked ? "black" : "transparent";

        const svgData = encodeURIComponent(svg);
        downloadLink.setAttribute("href", "data:image/svg+xml," + svgData);
        downloadLink.style.display = "block";

        const pngDataUrl = await svgToPng(svg, null, null, 15);
        downloadPngLink.setAttribute("href", pngDataUrl);
        downloadPngLink.style.display = "block";
      } catch (error) {
        console.error("Failed to convert LaTeX to SVG", error);
        svgOutput.innerHTML = "<p>Error generating SVG.</p>";
        downloadLink.style.display = "none";
        downloadPngLink.style.display = "none";
      }
    } else {
      svgOutput.innerHTML = "<p>Please enter a LaTeX equation.</p>";
      downloadLink.style.display = "none";
      downloadPngLink.style.display = "none";
    }
  });



});
