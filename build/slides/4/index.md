---
layout: layouts/main.hbs
title: "Slide 4: Making a Simple Interactive Slides Website with Eleventy"
cardTitle: "Putting it online"
tags: slides
---

Eleventy will generate a site that expects to be deployed in the root directory, but I've been careful to use exclusively relative links in the boilerplate (and image links) here. I use the copy.sh file to copy the /dist folder to another Eleventy site so I don't have to put up a new website for each set of slides.

Serve your site locally with "npm start" and build the full static site to the /dist directory with "npm run build"

I deploy my Eleventy sites on GitHub pages with this GitHub Action:

<pre><code>
name: github pages
on:
  push:
    branches:
      - master

jobs:
  build_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: '14.x'
      - run: npm install
      - name: Build
        uses: TartanLlama/actions-eleventy@v1.2
      - name: CNAME
        run: echo '🚸 YOUR WEBSITE URL INCLUDING SUBDOMAIN' | sudo tee dist/CNAME
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_dir: dist
</code></pre>

[Instructions for setting up GitHub Actions deploy keys](https://medium.com/@cmichel/how-to-deploy-a-create-react-app-with-github-actions-5e01f7a7b6b)