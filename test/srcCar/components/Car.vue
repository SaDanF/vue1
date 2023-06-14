<template>
  <div>
    <h3>品牌：{{brand}}</h3>
    <h3>jaige：{{cprice}}</h3>
    <h3>yanse：{{color}}</h3>
    <button @click="add">price</button>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Car',
  data(){
    return{
      cprice : this.price
    }
  },
  methods:{
    add(){
      // eslint-disable-next-line vue/no-mutating-props
      this.cprice++
    }
  },
  // data() {
  //   return {
  //     brand : '宝马',
  //     price : 12,
  //     color : '黑色'
  //   }
  // }
  //数组的形式写的
  // props:['brand','price','color']
//  添加类型限制默认值
  props:{
    brand:{
      type:String,
      //设置是否必填
      required:true
    },
    color:{
      type:String,
      //设置默认值
      default: "黑se"
    },
    price:{
      type: Number,
      required: true
    }
  },

}
</script>

<style scoped>

</style>
