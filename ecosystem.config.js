module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
     // 项目名称
      name      : 'loginapp',
        // 程序入口
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'WEB',
      script    : 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
        // 因为pm2要登录到服务器（server）中执行命令，所以要提供name和host
        // 这里没有提供密码，因为已经配置了ssh免密码登录
      user : 'root', // 服务器用户名
      host : '47.106.121.182',// 服务器地址
      port : 3001,   
        // 服务器（Server）需要获取GitHub上的仓库
        // 所以要配置Deploy keys
      ref  : 'origin/master',// 仓库名称，没有更改过的话默认即可
      repo : 'https://github.com/OTTooo/loginapp.git', // GitHub上的仓库地址
      path : '/var/www/production',// 应用部署到服务器的路径
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'// 在服务器上执行的脚本命令，会从GitHub上获取最新的版本后执行
    },
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
