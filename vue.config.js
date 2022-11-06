module.exports = {
  devServer: {
    proxy: 'https://sem-smart-city-portfolio.herokuapp.com/',
    headers: { "Access-Control-Allow-Origin": "*" },
    allowedHosts: "all",
  }
}