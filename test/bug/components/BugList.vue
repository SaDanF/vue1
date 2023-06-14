<template>
  <div>
    <table>
      <thead>
      <tr>
        <th class="c1"> 全选<input type="checkbox"></th>
        <th>bug描述</th>
        <th class="c2"> 操作</th>
      </tr>
      </thead>
      <tbody>
<!--      父div传数据给了子 在父组建上定义一个任意的名字在子组件使用props接收-->
        <BugItem v-for="bug in bugsList" :key="bug.id" :fuchuanzi="bug"> </BugItem>
      </tbody>

    </table>
  </div>

</template>

<script>
import BugItem from "@/components/BugItem";
export default {
  name: "BugList",
  components:{
    BugItem
  },
  props:['bugsList']

}
</script>

<style scoped>
/* list */
table{
  width: 760px;
  border-collapse: collapse;
}
table caption{
  font-size: 1em;
  font-weight: bold;
  margin: 1em 0;
}
.c1,.c2{
  width: 100px;
}
th {
  border: 1px solid #999;
  text-align: center;
  padding: 5px 0;
}
table thead tr{
  background-color: #008c8c;
  color: #fff;
}

</style>
