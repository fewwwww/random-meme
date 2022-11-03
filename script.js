// constants based on start.js's log
const imgCount = 1094;
// const gifCount = 619;
// const imgPercentage = 63;
// const gifPercentage = 37;

// get random img path
// let imgUrl;
// if (Math.floor(Math.random() * 101) <= imgPercentage) {
const imgId = Math.floor(Math.random() * imgCount);
imgUrl = `imgs/${imgId}.JPG`;
// unexpected error happens when using JPG
if (imgId === 1 || imgId === 0) {
  imgUrl = `imgs/${imgId}.jpg`;
}
// } else {
// const gifId = Math.floor(Math.random() * gifCount);
// imgUrl = `imgs/${gifId}.GIF`;
// }

// make img tag
const imgTag = document.createElement('img');
imgTag.src = imgUrl;

// append img tag to body
const bodyTag = document.getElementsByTagName('body')[0];
bodyTag.appendChild(imgTag);
