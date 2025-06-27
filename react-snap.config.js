module.exports = {
  source: 'dist',
  inlineCss: true,
  puppeteerArgs: ['--no-sandbox'],
  include: [
    '/home',
    '/about',
    '/services',
    '/services/servers',
    '/services/networks',
    '/services/support',
    '/services/security',
    '/services/digital',
    '/services/leasing',
    '/services/printer',
    '/contact'
  ],
};
