<template>
  <div class="search">
    <input type="text" placeholder="请输入城市名字" spellcheck="false" v-model="cityName">
    <button @click="search"><img src="../assets/images/search.png"></button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data (){
    return{
      cityName:''
    }
  },
  methods:{
    search(){
      const apikey="912fb1bededfad7fa101aa888d41349d"
      //首先获取城市名拼接上id传过去拿到json
      const apiUrlGetLon=`http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&appid=${apikey}`
      axios.get(apiUrlGetLon).then(
          respons => {
            console.log('响应数据',respons.data)
            const lat =respons.data[0].lat
            const lon =respons.data[0].lon
            console.log(lon,lat)
            //拿到城市的经纬度 再传过去那天气情况
            const apiUrlGetWeather=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
            axios.get(apiUrlGetWeather).then(
                      respons => {
                        console.log('响应数据',respons.data)
                      //  拿到反馈的天气打包发给weather
                        const werther= {
                          imgPath: `https://openweathermap.org/img/wn/${respons.data.weather[0].icon}@2x.png`,
                          temp: respons.data.main.temp,
                          humidity: respons.data.wind.speed,
                          city: this.cityName,
                        }
                        console.log(werther)
                        //打包好数据之后通过全局事件总线触发事件传给weather
                        this.$bus.$emit('displayWeather',werther)

                      },
                      error => {
                        console.log('错误信息',error.message)
                      }
                  )

          },
          error => {
            console.log('错误信息',error.message)
          }
      )

    },

  },

}
</script>

<style lang="css" scoped>
/*搜索框样式*/
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search input {
  border: 0;
  outline: 0;
  background: #ebfffc;
  color: #555;
  padding: 10px 25px;
  height: 60px;
  border-radius: 30px;
  flex: 1;
  margin-right: 16px;
  font-size: 18px;
}

.search button{
  border: 0;
  outline: 0;
  background: #ebfffc;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.search button img {
  width: 16px;
}
</style>
