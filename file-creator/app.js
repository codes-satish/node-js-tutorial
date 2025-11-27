import readLine from 'readline'
import fs from 'fs'

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const createFile = () => {
    rl.question('Enter the file name : ', (fileName) => {
        rl.question('Enter the file content : ', (fileContent) => {
            fs.writeFileSync(`${fileName}.txt`, fileContent, (err) => {
                console.log('Error writing file : ', err)
            })
            rl.close()
        })
    })



}

createFile()