
const { pipe, map, forEach } = require('callbag-basics')
const { fromReddit } = require('../callbag-reddit.js')

pipe(
  fromReddit('mildlyinteresting'),
  map(x => `${x.data.title} (${x.data.url})`),
  forEach(console.log)
)
