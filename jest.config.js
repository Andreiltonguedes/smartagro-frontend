module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
      // não ignorar esses módulos dentro de node_modules (ou seja, transformar eles)
      'node_modules/(?!(react-native|@react-native|@react-navigation|@expo|expo|expo-modules-core|@testing-library)/)',
    ],
  };
  