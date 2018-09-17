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

  }
}