module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        contact: "@/components/contact",
        style: "@/components/style",
        assets: "@/assets",
        views: "@/views",
      },
    },
  },
};