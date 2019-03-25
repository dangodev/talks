module.exports = {
  module: {
    rules: [
      {
        test: /\.woff$/i,
        use: { loader: 'url-loader', options: { mimetype: 'font/woff' } },
      },
      {
        test: /\.ico$/i,
        use: { loader: 'url-loader', options: { mimetype: 'image/x-icon' } },
      },
    ],
  },
};
