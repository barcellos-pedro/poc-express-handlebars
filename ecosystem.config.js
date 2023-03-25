// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: "app1",
      script: "./dist/src/app.js",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: ["SERVER_IP_ADDRESS"],
      ref: "origin/main",
      repo: "https://github.com/barcellos-pedro/poc-express-handlebars.git",
      path: "/root/app",
      "post-deploy": "npm install && npm run build && pm2 start ecosystem.config.cjs --env production",
    },
  },
};
