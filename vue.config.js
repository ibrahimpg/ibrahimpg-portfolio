const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    // eslint-disable-next-line consistent-return
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/'],
          {
            // options
          },
        ),
      ],
    };
  },
};