module.exports = {
    apps: [
      {
        name: 'emojke-fe',
        exec_mode: 'cluster',
        instances: '1', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        env: {
          "PORT": 3008,
          "NODE_ENV": "development"
        }
      }
    ]
  }
  