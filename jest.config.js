module.exports = {
    preset: 'jest-expo',  setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [

      'node_modules/(?!(react-native|@react-native|@react-navigation|@expo|expo|expo-modules-core|@testing-library)/)',
    ],
  };
  