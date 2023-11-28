const WebpackObfuscator = require('webpack-obfuscator');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(
      new WebpackObfuscator(
        {
          // Add your obfuscation options here
          rotateStringArray: true,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          renameGlobals: true,
        },
        // Add files you want to exclude from obfuscation
        []
      )
    );
  }
  return config;
};

