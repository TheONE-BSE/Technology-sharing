Proxy.prototype = Proxy.prototype|| Object.prototype
class MyVue extends Proxy{ // Object Array ==== 没有合法的原型

  constructor(options){
    let _this;
    let data = options.data|| {}
    // _this = this;
    super(data,{

      get(target,key){

        console.log(target.$data);
        if(key in target){
          return target[key]
        }else{
          throw new Error(`[Vue warn]: Property or method "${key}" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.`)
        }
      },
      set(target,key,val){
        if(key.startsWith('$')){
          _this[key] = val
        }else{
          target[key] = val   //外部
        }
      },
      deleteProperty(){},
      has(){}
    });
     _this = this;
     this.$el = document.querySelector(options.el)
     this.$data = data
     console.log(this);
     // 死循环，出不去了
  }
}