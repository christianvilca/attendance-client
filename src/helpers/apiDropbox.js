import Dropbox from 'dropbox';

const TOKEN = process.env.REACT_APP_DROPBOX_TOKEN;
const REQUEST_URL = process.env.REACT_APP_DROPBOX_URL;
const DROPBOXJS = new Dropbox.Dropbox({ accessToken: TOKEN });

/* #region  Funciones para imagenes */

function padWithZeroNumber(number, width) {
	number = number + '';
	return number.length >= width ? number : new Array(width - number.length + 1).join('0') + number;
}

function dataURItoBlob(dataURI) {
	let byteString = atob(dataURI.split(',')[1]);

	// separate out the mime component
	let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	let ab = new ArrayBuffer(byteString.length);
	let ia = new Uint8Array(ab);
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
	let blob = new Blob([ ab ], { type: mimeString });
	return blob;
}

function dataURLtoFile(dataurl, filename) {
	var arr = dataurl.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}

	return new File([ u8arr ], filename, { type: mime });
}

function getFileExtention(blobType) {
	// by default the extention is .png
	let extention = 'png'; //IMAGE_TYPES.PNG;

	if (blobType === 'image/jpeg') {
		extention = 'jpg'; //IMAGE_TYPES.JPG;
	}
	return extention;
}

function getFileName(imageNumber, blobType) {
	//const prefix = 'photo';
	//const photoNumber = padWithZeroNumber(imageNumber, 4);
	const extention = getFileExtention(blobType);

	return `${imageNumber}.${extention}`;
	//return `${prefix}-${photoNumber}.${extention}`;
}

function downloadImageFileFomBlob(blob, imageNumber) {
	window.URL = window.webkitURL || window.URL;

	let anchor = document.createElement('a');
	anchor.download = getFileName(imageNumber, blob.type);
	anchor.href = window.URL.createObjectURL(blob);

	return anchor;

	let mouseEvent = document.createEvent('MouseEvents');
	mouseEvent.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
	anchor.dispatchEvent(mouseEvent);
}

function downloadImageFile(dataUri, imageNumber) {
	let blob = dataURItoBlob(dataUri);
	return downloadImageFileFomBlob(blob, imageNumber);
}

/* #endregion */

class apiDropbox {

	static async uploadFile(canvas, codigo) {
		var dbx = DROPBOXJS;

		let file = ''
		let name = 'undefined.png'

		let anchor = downloadImageFile(canvas.src, codigo);
		file = dataURLtoFile(canvas.src, anchor.download);
		name = file.name

		let response = await dbx.filesUpload({
			path: REQUEST_URL + name,// codigo +'.png',//
			contents: file,
			mode: {
				'.tag': 'overwrite'
			}
		});
		//let data = response;
		console.log(response)
		//return data;
  }

  static async loadFile(foto) {
		var dbx = DROPBOXJS;
		let response = await dbx.filesGetTemporaryLink({
			path: REQUEST_URL + foto + '.png'
		});
		let data = response.link;
		//console.log(data)
		return data;
	}
}

export default apiDropbox;
