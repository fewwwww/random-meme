// standarize file names of jpg images
// abc.JPG => ${index_in_folder}.JPG
const imgFolder = './imgs/';
const fs = require('fs');

// check if file is with image extension
function isImgExt(file) {
  const imgTypes = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG'];
  const ext = file.split('.').pop();
  return imgTypes.includes(ext);
}

// check if file is with gif extention
function isGifExt(file) {
  const gifTypes = ['gif', 'GIF'];
  const ext = file.split('.').pop();
  return gifTypes.includes(ext);
}

fs.readdir(imgFolder, (err, files) => {
  let imgIndex = 0;
  let gifIndex = 0;
  for (let i = 0; i < files.length; i++) {
    if (isImgExt(files[i])) {
      fs.renameSync(imgFolder + files[i], imgFolder + imgIndex + '.JPG');
      imgIndex++;
    }
    if (isGifExt(files[i])) {
      fs.renameSync(imgFolder + files[i], imgFolder + gifIndex + '.GIF');
      gifIndex++;
    }
  }
  console.log('All count:', imgIndex + gifIndex);
  console.log('Image count:', imgIndex);
  console.log('Gif count:', gifIndex);
  console.log(
    'Image percentage:',
    Math.floor(imgIndex / (imgIndex + gifIndex) * 100)
  );
  console.log(
    'Gif percentage:',
    100 - Math.floor(imgIndex / (imgIndex + gifIndex) * 100)
  );
});
