const path = require('node:path')

console.log(path.sep)

const filepath = path.join('content', 'sub-folder', 'test.txt')
console.log(filepath)

const base = path.basename('home/hdsds/dsd/ds.txt')
console.log(base)

const filename = path.basename('home/hdsds/dsd/ds.txt', '.txt')
console.log(filename)

const extension = path.extname('img.jpg')
console.log(extension)
