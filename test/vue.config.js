const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //是否检查语法false是不检查
  lintOnSave: false
})
