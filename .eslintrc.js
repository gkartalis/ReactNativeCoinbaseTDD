module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ["jest", "detox"],
  env: {
    jest: true,
    detox: true
  }
};
