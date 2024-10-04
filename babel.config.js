module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false
      }
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', 'js', '.ts', '.tsx', '.json'],
        alias: {
          '~assets': './src/assets/',
          '~app': './src/app/',
          '~constants': './src/constants/',
          '~hooks': './src/hooks/',
          '~providers': './src/providers/',
          '~components': './src/components/',
          '~screens': './src/screens/',
          '~types': './src/types/',
          '~services': './src/services/',
          '~root': './'
        }
      }
    ],
    ['@babel/plugin-transform-private-methods', { loose: true }]
  ]
};
