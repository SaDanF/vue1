<template>
  <div class="card">
    <search></search>
    <weather></weather>
  </div>
</template>
<script>
  import Weather from "@/components/Weather";
  import Search from "@/components/Search";
  export default {
    name:'App',
    components:{
      // eslint-disable-next-line vue/no-unused-components
      Weather,Search
    }
  }

</script>
<style lang="css">
/*公共样式*/
*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

body {
  background : #222;
}

.card {
  width: 70%;
  max-width: 470px;
  background: linear-gradient(135deg, #00feba, #5b548a);
  color: #fff;
  margin: 100px auto 0;
  border-radius: 20px;
  padding: 40px 35px;
  text-align: center;
}
</style>
