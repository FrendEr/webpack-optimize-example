import Header from './components/header';
import Footer from './components/footer';

if (location.hash == '#body') {
  require([], function(require) {
    let body = require('./components/body');
  });
}

if (location.hash == '#body2') {
  require([], function(require) {
    let body = require('./components/body2');
  });
}
