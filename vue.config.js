module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/TestVueRepo" : "/",
  outputDir: "docs",

  transpileDependencies: ["vuetify"],
};
