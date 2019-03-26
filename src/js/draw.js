import { highlightActiveColor, highlightActiveWidth } from './highlights';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.color');
const widthValues = document.querySelectorAll('.width-value');

const coords = {
  x: 0,
  y: 0,
};

const DefaultProps = {
  COLOR: 'red',
  WIDTH: 5,
};

let backColor;
let isDraw = false;
let isPalleteActive = false;

function getBackColor(item) {
  const style = getComputedStyle(item);
  backColor = style.getPropertyValue('background-color');
  return backColor;
}

function startDrawing(e, color = DefaultProps.COLOR, width = DefaultProps.WIDTH) {
  coords.x = e.clientX - canvas.offsetLeft;
  coords.y = e.clientY - canvas.offsetTop;
  isDraw = true;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.moveTo(coords.x, coords.y);
}

if (!isPalleteActive) {
  canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startDrawing(e);
  });
}

Array.prototype.forEach.call(colors, (item) => {
  item.addEventListener('click', () => {
    isPalleteActive = true;
    getBackColor(item);
    highlightActiveColor(item);

    canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();
      const lineWidth = document.querySelector('.width--active').textContent;
      startDrawing(e, backColor, lineWidth);
    });
  });
});

Array.prototype.forEach.call(widthValues, (width) => {
  width.addEventListener('click', () => {
    highlightActiveWidth(width);

    canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();
      const activeColor = document.querySelector('.color--active');
      getBackColor(activeColor);
      startDrawing(e, backColor, width.textContent);
    });
  });
});

canvas.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (isDraw) {
    coords.x = e.clientX - canvas.offsetLeft;
    coords.y = e.clientY - canvas.offsetTop;
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', () => {
  isDraw = false;
});

export { ctx, canvas };
