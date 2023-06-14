<template>

  <div>
    <h1>省份</h1>
    <ul >
      <li><router-link to="/hebei" class="select">河北</router-link></li>
      <li><router-link to="/henan" class="select">河nan</router-link></li>
    </ul>
  </div>

  <router-view></router-view>

</template>
<script>
import HeiBei from "@/components/HeiBei";
import HeNan from "@/components/HeNan";
export default {
  name:'App',
  components:{HeNan,HeiBei}
}

</script>

<style>
.s1{
  margin-left: 100px;
}
.select{
  background-color: #00feba;
}
</style>
