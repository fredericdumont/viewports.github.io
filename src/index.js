const getSizes = () => {
  const viewportElement = document.querySelector("#viewportSize");
  viewportElement.innerText = `${window.innerWidth}px * ${window.innerHeight}px`;
};

getSizes();
window.onresize = getSizes;
