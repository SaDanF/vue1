class Vue {
    //
    constructor(optins){
        Object.keys(optins.data).forEach((propertyName,index)=>{
            console.log(typeof propertyName, propertyName,index)
            let firstChar = propertyName.charAt(0)
            //在首字母是_$的时候不通过
            if(firstChar !='_'&& firstChar!='$'){
                Object.defineProperty(this,propertyName,{
                    get (){
                        return optins.data[propertyName]
                    },
                    set(val){
                        optins.data[propertyName]=val
                    }
                })
            }

        })
        //获取所有方法名
        Object.keys(optins.methods).forEach((methodsName,index)=>{
            //给当前的vue实例扩展一个方法
            this[methodsName] = optins.methods[methodsName]
        })
    }
}
