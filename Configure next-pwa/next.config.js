const withPWA = require('next-pwa');  

module.exports = withPWA({  
  dest: 'public', // Where service workers and other assets are generated  
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development  
});  
