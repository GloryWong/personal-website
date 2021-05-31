module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Zhao Zhao Today";
      return args;
    });
  },

  pwa: {
    name: "Zhao Zhao Today",
    themeColor: "#B624CE",
  },
};
