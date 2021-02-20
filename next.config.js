module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
  images: {
    domains: ["disease.sh"],
  },
};
