class MyVue{
  constructor(options){
     this.$el = document.querySelector(options.el)
     this.$data = options.data|| {}
      console.log(this);

     //proxy
     new Proxy(this,{
       get(target,key){
         //*
         // let json={};
         // let p=new Proxy(json);
         //
         // p.a=xxx             √
         // json.a=xxx          ×
         // */
         console.log(target.$data);
         if(key in target.$data){
           return target.$data[key]
         }else{
           throw new Error(`[Vue warn]: Property or method "${key}" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.`)
         }
       },
       set(){},
       deleteProperty(){},
       has(){}
     })

  }
}