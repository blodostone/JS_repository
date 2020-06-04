export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const { width, height } = imgElem;
        callback(null, { width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'))
};

const imgSrc = 'htttp://server.com/image.png';

const onImageLoaded = (error, date) => {
    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = date;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`
}

addImage(imgSrc, onImageLoaded)