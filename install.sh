#!/bin/bash

# 检查并安装必要的依赖
check_install() {
    command -v $1 >/dev/null 2>&1 || {
        echo >&2 "$1 is required but not installed. Installing..."
        sudo apt-get update && sudo apt-get install -y $1
    }
}

check_install git
check_install nodejs
check_install npm

# 克隆仓库
git clone https://github.com/everett7623/nav.git
cd nav

# 安装依赖
npm install

# 构建项目
npm run build

# 根据部署方式执行不同的脚本
read -p "Choose deployment method (github/vercel/docker): " deploy_method

case $deploy_method in
    github)
        ./scripts/deploy-github.sh
        ;;
    vercel)
        ./scripts/deploy-vercel.sh
        ;;
    docker)
        ./scripts/deploy-docker.sh
        ;;
    *)
        echo "Invalid deployment method"
        exit 1
        ;;
esac

echo "Installation and deployment completed!"
