alert('Grab and drag square');

const square = document.querySelector('div.square');
let isGrabbed = false;
let offsetX = 0;
let offsetY = 0;

square.addEventListener('mousedown', function (e) {
  isGrabbed = true;
  this.style.backgroundColor = 'gray';

  offsetX = e.offsetX;
  offsetY = e.offsetY;
})

square.addEventListener('mouseup', function () {
  isGrabbed = false;
  this.style.backgroundColor = 'black';
})

square.addEventListener('mousemove', function (e) {
  if (isGrabbed) {
    const posX = e.pageX - offsetX;
    const posY = e.pageY - offsetY;

    this.style.left = posX + 'px';
    this.style.top = posY + 'px';
  }
})

square.addEventListener('mouseleave', function () {
  isGrabbed = false;
  this.style.backgroundColor = 'black';
})