const imgCount = 5;
const imgId = Math.floor(Math.random() * imgCount);
const imgUrl = `imgs/${imgId}.jpg`;

const imgTag = document.createElement('img');
imgTag.src = imgUrl;

const bodyTag = document.getElementsByTagName('body')[0];
bodyTag.appendChild(imgTag);
bodyTag.style.backgroundColor = getAverageRGB(imgTag);
