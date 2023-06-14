<template>
  <div id="app">
    <h1 ref="dom">{{msg}}</h1>
<!--    ref 是标记上 到时候打印-->
    <car brand="baoma" :price=100 color="hei" ref="car1"></car>
    <car brand="baom1a" :price=1010 ></car>
    <button @click="printfCar">打印汽车信息</button>
  </div>
</template>

<script>
import  Car from './components/Car.vue'
export default {
  name: 'App',
  data(){
    return{
      msg:'car xinxi'
    }
  },
  components: {
    Car
  },
  methods:{
    printfCar(){

      //获取页面所有的元素
      console.log(this.$refs.car1)
      console.log(this.$refs.car1.color)
      //获取dom元素带标签的 不带标签加innerText
      console.log(this.$refs.dom.innerText)
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
