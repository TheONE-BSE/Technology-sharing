(function () {
  Proxy.prototype = Proxy.prototype|| Object.prototype
  class MyVue extends Proxy{ // Object Array ==== 没有合法的原型

    constructor(options){
      let _container = {};
      let data = options.data|| {}
      super(data,{

        get(target,key){
          if(key.startsWith('$')){
            return _container[key]
          }else{
            if(key in target){
              return target[key]
            }else{
              throw new Error(`[Vue warn]: Property or method "${key}" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.`)
            }
          }
        },
        set(target,key,val){
          target[key] = val
        },
        deleteProperty(){},
        has(){}
      });
      _container.$el = document.querySelector(options.el)
      _container.$data = data
      _container.render = render.bind(_container)

      //执行第一次渲染
      //  _container.render.call(_container);
      _container.render();
    }

  }


  function render(){
    // // \w：用于匹配字母，数字或下划线字符；
    // this.$el.innerHTML = this.$el.innerHTML.replace(/\{\{\w+\}\}/g, (str) =>{
    //   console.log(str);
    //   let s= str.substring(2,str.length-2)
    //   console.log(s);
    //   return this.$data[s]
    // })
    // 不包含右括号的



    this.$el.innerHTML = this.$el.innerHTML.replace(/\{\{[^\}]+\}\}/g, (str) =>{
      console.log(str);
      let s= str.substring(2,str.length-2)
      s = s.replace(/\w+/g,(s) =>{
        return 'this.$data.'+s
      })
      console.log(s);
      return eval(s)
    })
  }
  window.MyVue = MyVue
})()


// // 如果不用new
// class _Vue{
//
// }
// function Vue(option) {
//   let obj = new _Vue(option)
//   return new Proxy(obj,{
//
//   })
// }