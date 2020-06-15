const container = document.querySelector(".container");
const text = document.querySelector("h1");
const walk = 200; //  100px

function shadow(e) {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / height) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  //   text.style.textShadow = `${xWalk}px ${yWalk}px 5px rgb(153, 153, 153)`;

  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,0,255,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
      `;
}

container.addEventListener("mousemove", shadow);
