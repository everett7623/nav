#!/bin/bash

# 构建
npm run build

# 推送到 gh-pages 分支
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:username/repo.git master:gh-pages

cd -
