<template>
  <div>
    <div>
      <h1>省份</h1>
      <ul >
        <li><router-link to="/hebei" active-class="select">河北省</router-link></li>
        <li><router-link to="/henan" active-class="select">河南省</router-link></li>
      </ul>
    </div>
    <router-view></router-view>


  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
.s1{
  margin-left: 100px;

}
.select{
  background-color: aqua;
}
</style>
