Proxy.prototype = Proxy.prototype|| Object.prototype
class MyVue extends Proxy{ // Object Array ==== 没有合法的原型

  constructor(options){
    // *
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
        if(key.startsWith('$')){
          _container[key] = val
        }else{
          target[key] = val
        }
      },
      deleteProperty(){},
      has(){}
    });
     this.$el = document.querySelector(options.el)
     this.$data = data
     console.log(this);

     /*
     * class Proxy{
     * constructor(){
     *    proxy.set()
     * }
     * }
     * */
  }
}