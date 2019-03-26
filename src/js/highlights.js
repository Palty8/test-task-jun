function highlightActiveColor(color) {
  const activeColor = document.querySelector('.color--active');
  if (activeColor) {
    activeColor.classList.remove('color--active');
  }
  color.classList.add('color--active');
}

function highlightActiveWidth(width) {
  const activeWidth = document.querySelector('.width--active');
  if (activeWidth) {
    activeWidth.classList.remove('width--active');
  }
  width.classList.add('width--active');
}

export { highlightActiveColor, highlightActiveWidth };
