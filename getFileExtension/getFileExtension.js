function getFilesExtension(fileArr) {
    let extensionArr = [];
    for (let i = 0; i < fileArr.length; i++) {
        extensionArr[i] = fileArr[i].indexOf('.');
        extensionArr[i] = fileArr[i].slice(extensionArr[i] + 1, fileArr[i].length);
    }
    console.log(`File extensions of [${fileArr}] array is [${extensionArr}].`);
}

getFilesExtension(['index.html', 'styles.css', 'index.js', 'song.mp3', 'project.pdf']);
