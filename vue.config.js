module.exports = {
  // baseUrl: './',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': ['./src/theme']
      }
    }
  },
  productionSourceMap: false,
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },

  devServer: {
    proxy: {
      "/api": {
        target: "https://agency.fanaidou.com", // 生产
        ws: true, // 是否启用websockets
        changOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    },
    port: 3020,     // 端口
  }
}
