# webpack.DefinePlugin

Using DefinePlugin and setting the NODE_ENV to production will enable dead code elimination on conditionals in react core and shrink final bundle size

This also works for your own code wrapped in process.env.NODE_ENV conditionals.

Webpack must be run in production mode for this to work with `-p`

```
// plugin
new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': '"production"'
  }
})
```

```
// package.json
"scripts": {
  "clean": "rimraf ./build",
  "prebuild": "npm run clean",
  "build": "webpack -p --progress --profile"
},
```

More info here: https://github.com/petehunt/webpack-howto#6-feature-flags