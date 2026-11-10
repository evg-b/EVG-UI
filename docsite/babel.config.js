module.exports = {
  presets: [
    [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
    require.resolve('@docusaurus/core/lib/babel/preset')
  ]
}
