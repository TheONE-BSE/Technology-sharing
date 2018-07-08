/*
*  Author: Kinice
*  E-mail: szp93@126.com
*/

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const baseDir = process.cwd()
const helpTips = '\n用法: node listFolder.js <paths> \n\n      <paths>是目录路径，可以写多个，用空格隔开。'
let dirArr = []
let generateStr = require('./generateStr')

let listFolder = (dir, layer) => {
    let parentObj = {}
    let count = 0

    let files = fs.readdirSync(dir)

    for(let i = 0; i < files.length; i++){
        let tempObj = {
            name: '',
            isFile: '',
            subDir: {},
            layer: layer
        }
        let stat = fs.statSync(path.join(dir,files[i]))

        if(files[i].substr(0,1)=='.') continue

        tempObj.name = files[i]

        if(stat.isDirectory()){
            tempObj.isFile = false
            tempObj.subDir = listFolder(path.join(dir,files[i]),layer+1)
            parentObj[count++] = tempObj
        }else{
            tempObj.isFile = true
            tempObj.subDir = null
            parentObj[count++] = tempObj
        }
    }
    return parentObj
}

let LISTFUNCTION = (dir,dirCount) => {
    let finalObj = {}
    let layer = 0
    let finalStr = ''
    try{
        fs.readdirSync(dir)
    }catch(e){
        return console.error(chalk.red('Error: ',dir,'不是一个有效的路径',helpTips))
    }
    console.log(`正在执行第${dirCount+1}个任务：`)
    console.log('正在生成目录树。。。')
    finalObj = listFolder(dir, layer)
    console.log('正在渲染目录列表。。。')
    finalStr = generateStr(finalObj, finalStr)
    console.log('正在写入文件：',path.basename(dir),'.txt 。。。')
    fs.writeFile(path.basename(dir)+'.txt', finalStr, (err) => {
        if(err) throw err
        console.log(chalk.green('写入'+path.basename(dir)+'.txt'+'成功'))
    })
}

if(process.argv.length == 2){
    console.log(chalk.blue('未输入路径，默认输出当前目录'))
    LISTFUNCTION(baseDir,0)
}else{
    if(process.argv[2] == '-h'){
        console.log(helpTips)
    }else{
        for(let i = 2; i < process.argv.length; i++){
            dirArr.push(process.argv[i])
        }
    }  
}

for(let i = 0; i < dirArr.length; i++){
    LISTFUNCTION(dirArr[i],i)
}
