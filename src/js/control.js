import { ctx, canvas } from './draw';

const clearBtn = document.querySelector('.button--clear');
const downloadBtn = document.querySelector('.button--download');

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

downloadBtn.addEventListener('click', () => {
  downloadBtn.href = canvas.toDataURL('image/png');
  downloadBtn.download = 'picture.png';
});
