const fs=require('node:fs/promises')
const path=require('node:path')

const folder =process.argv[2] ?? '.'

async function ls(folder) {
    let files
try{
    files=await fs.readdir(folder)

}catch{
console.log("NO SE PUDO LEER EL DIRECTORIO")
process.exit(1)
}
const filepromise=files.map(async file=>{
    const filepath=path.join(folder,file)
    let stats

    try{
        stats = await fs.stat(filepath)
    }catch{
console.error("NO SE PUDO LEER EL ARCHIVO "`${filepath}`)
process.exit(1)
    }

    const isDirectory=stats.isDirectory()
    const filetype=isDirectory ? 'd' :'f'
    const fileSize=stats.size
    const fileModified=stats.mtime.toLocaleString()

return `${filetype} ${file} ${fileSize.toString()} ${fileModified}}`
})

const fileinfo=await Promise.all(filepromise)

fileinfo.forEach(fileinfo => {
    console.log(fileinfo)
});
}
ls(folder)