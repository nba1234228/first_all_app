module.exports = {
  plugins: [
      require('autoprefixer')({
          'overrideBrowserslist': [
              'defaults', 'not ie < 10', 'last 2 versions', '> 1%', 'iOS 7', 'last 3 iOS versions'
          ]
      })
   ]
};