const withPWA = require('next-pwa')({
  dest: 'public', // Output directory for service worker
  register: true, // Automatically register the service worker
  skipWaiting: true, // Activate new service worker as soon as it's available
});

module.exports = withPWA({
  reactStrictMode: true, // Enable React's Strict Mode
});
