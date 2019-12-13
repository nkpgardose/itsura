module.exports = {
  title: 'Itsura components',
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: {
      shouldExtractLiteralValuesFromEnum: true,
      skipPropsWithoutDoc: false
    }
  }).parse
}
