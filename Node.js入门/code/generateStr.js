let generateStr = (obj, str) => {
    for(let i in obj){
        let tempStr = ''
        for(let j = 0; j < obj[i].layer; j++){
            tempStr += '    '
        }
        if(obj[i].isFile){
            str += tempStr + '|-- ' + obj[i].name + '\n'
        }else{
            str += tempStr + '|-- ' + obj[i].name + '/\n'
        }
        
        if(obj[i].subDir){
            str += generateStr(obj[i].subDir, '')
        }
    }
    return str
}

module.exports = generateStr
