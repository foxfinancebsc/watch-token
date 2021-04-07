const vars = require('./.env.json');

module.exports = {
  description: 'Fox Finance FOX on BSC Widget. Add FOX to DApp browsers or MetaMask.',
  base: '/watch-token/',
  defaultNetwork: 'bsc_mainnet',
  defaultHash: '0x7b2261646472657373223a22307846416438453436313233443762346537373439363439313736394331363746463839346432414342222c226c6f676f223a2268747470733a2f2f697066732e696f2f697066732f516d52734c776b4473386656526648416e6a4a6d786952547271566d4b516d315278444e6f734e566d4752446665227d',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://foxfinancebsc.github.io/watch-token' }],
    ['meta', { property: 'og:image', content: 'https://foxfinancebsc.github.io/watch-token/assets/images/foxfinancelogo.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://foxfinancebsc.github.io/watch-token/assets/images/foxfinancelogo.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:title', content: 'Fox Finance FOX on BSC | Metamask Widget' }],
    ['script', { src: '/assets/js/web3.min.js' }],
    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1', // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
};
