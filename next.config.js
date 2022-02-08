module.exports = {
  reactStrictMode: true,
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  }
}
