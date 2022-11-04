// constants based on start.js's log
const imgCount = 1094;
// const gifCount = 619;
// const imgPercentage = 63;
// const gifPercentage = 37;
const MAX_FILE_NUMBER_LENGTH=8

function pad(num,len) {
    numstr=num.toString();
    while (numstr.length<len){
      numstr='0'+numstr;
    }
    return numstr;
  }

// get random img path
// let imgUrl;
// if (Math.floor(Math.random() * 101) <= imgPercentage) {
const imgId = pad(Math.floor(Math.random() * imgCount),MAX_FILE_NUMBER_LENGTH);
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
