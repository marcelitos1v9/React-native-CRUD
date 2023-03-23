module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin']
  };
};
// npm install react-native-reanimated
// npm install @react-native-async-storage/async-storage
// npm install --clear