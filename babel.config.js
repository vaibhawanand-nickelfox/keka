module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          assets: "./source/assets",
          components: "./source/components",
          constants: "./source/constants",
          database: "./source/database",
          model: "./source/model",
          navigator: "./source/navigator",
          network: "./source/network",
          screens: "./source/screens",
          services: "./source/services",
          store: "./source/store",
          tabScreen: "./source/tabScreen",
          themes: "./source/themes",
          utils: "./source/utils",
        },
      },
    ],
  ],
};
