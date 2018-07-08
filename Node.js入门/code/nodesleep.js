
console.log('兆鹏')

setTimeout(() => {
  console.log('在分享') 
}, 5000)

console.log('知识')

function a() {
  b()
}

function b() {
  // 读取一个文件了！
  readFileSync()
  c()
}

function c() {
  console.log('Excalibur！')
}

a()

var array = ['兆鹏', '嘉琪']

function returnNames() {
  var html = '<p>' + array.join('</p><br><p>') + '</p>'
  // 我把array置空了！
  array = []

  return html
}


