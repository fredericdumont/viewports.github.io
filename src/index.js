const getSizes = () => {
  document.querySelector("#viewportSize").innerText = `${innerWidth}px * ${innerHeight}px`;
  document.querySelector("#screenSize").innerText = `${screen.width}px * ${screen.height}px`;
};

getSizes();
window.onresize = getSizes;
