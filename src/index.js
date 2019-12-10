const getSizes = () => {
  document.querySelector("#viewportSize").innerText = `${innerWidth}px x ${innerHeight}px`;
  document.querySelector("#screenSize").innerText = `${screen.width}px x ${screen.height}px`;
  document.querySelector("#pixelRatio").innerText = window.devicePixelRatio;
};

getSizes();
window.onresize = getSizes;
