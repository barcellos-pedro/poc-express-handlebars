# Introduction

> Practice based on this [blog post](https://github.com/npmaile/blog/blob/main/posts/2.%20How%20to%20get%20into%20software.md#7-write-a-website-from-scratch-and-host-it-on-a-server-somewhere) from Nate Maile

This project was made to expose me to how to set up a server and deploy a web app.

Going through this process I learned valuable concepts and ideas about the development process beyond localhost.

During the journey I learned about cloud providers, domains, server plans, git, remote access to the server (ssh), process managers, observability and environments.

# Tech
- Nodejs
- Express
- Handlebars
- SQLite

# Tools
- Digitalocean Droplet (Server)
- Nginx (Web server)
- PM2 (Process Manager)
- New Relic (Observability)

# Docs
- [DigitalOcean Droplet](https://www.digitalocean.com/products/droplets)
- [Nginx config](https://www.digitalocean.com/community/tools/nginx)
- [PM2 docs](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [New Relic docs](https://docs.newrelic.com/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview/)

# Bônus
- [Artillery (App load testing)](https://www.artillery.io/)

*Nginx config page already includes the step below*

To obtain Free SSL certificate from Let's Encrypt checkout [Certbot](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal)
