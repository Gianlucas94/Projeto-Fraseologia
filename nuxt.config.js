const pkg = require('./package');

module.exports = {
  target: 'static',
  ssr: false,

  head: {
    title: 'Fraseologia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', href: '/img/favicon.png' }]
  },

  loading: { color: '#425bd8' },

  css: [
    '~/node_modules/uikit/dist/css/uikit.min.css',
    '~/static/css/theme.css'
  ],

  plugins: [
    '~/plugins/uikit',
    '~/plugins/vue-select',
    '~/plugins/vue-date-pick',
    '~/plugins/fraseologia.js'
  ]
};
