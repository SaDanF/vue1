<template>
<div class="header">
  <textarea cols="105" rows="4" v-model="desc" placeholder="输入BUG信息"></textarea>
  <br>
  <button class="small green button" @click="serveBug"> 保存 </button>
</div>
</template>
<!--动态的写一个bug保存起来 点保存按钮能保存 @click 用户输入的保存 1、获取 输入的v-model 2、创建bug对象 3、添加到list中-->
<script>
export default {
  name: "BigHeader",
  data(){
    return{
      desc:''
    }
  },
  props:['saveBugCallback'],
  methods:{
    serveBug(){
      if(!(this.desc.trim()))return
      const bugObj = {id:Date.now(),desc:this.desc,resolved:false}
      console.log(bugObj)
      this.saveBugCallback(bugObj)
      this.desc=''
    }
}
}
</script>

<style scoped>
/* header */
.header {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
