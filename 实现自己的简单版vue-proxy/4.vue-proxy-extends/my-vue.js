class MyVue extends Proxy{ // Object Array ==== 没有合法的原型

  constructor(options){
    let data = options.data|| {}
    super(data,{
      get(target,key){
        //*
        // let json={};
        // let p=new Proxy(json);
        //
        // p.a=xxx             √
        // json.a=xxx          ×
        // */
        console.log(target);
        if(key in target.$data){
          return target.$data[key]
        }else{
          throw new Error(`[Vue warn]: Property or method "${key}" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.`)
        }
      },
      set(){},
      deleteProperty(){},
      has(){}
    });
     this.$el = document.querySelector(options.el)
     this.$data = data
      console.log(this);
  }
}