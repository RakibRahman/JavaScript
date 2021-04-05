let mousePosition = null;

document.onmousemove = moveMe = ({ screenX, screenY }) => {
  mousePosition = { screenX, screenY };
};

setInterval(function () {
  console.log(
    `Getting mouse position: ${mousePosition.screenX} & ${mousePosition.screenY}`
  );
}, 3000);
