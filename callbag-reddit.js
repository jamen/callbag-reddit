
var { fromPromise } = require('callbag-basics')
var fetch = require('isomorphic-fetch')

exports.fromReddit = function fromReddit (r) {
  return function source (type, sink) {
    if (type !== 0) return

    sink(0, source) // ?

    // TODO: Keep reading pages at a given request per second
    fetch('https://api.reddit.com/r/' + r).then(function (response) {
      return response.json()
    }).then(response => {
      var children = response.data.children
      for (var i = 0; i < children.length; i++) {
        sink(1, children[i])
      }
    }, err => {
      sink(2, err)
    })
  }
}
