
# callbag-reddit

Reddit push streams for [Callbag](https://github.com/callbag/callbag).

## Install

```sh
npm i callbag-reddit
```

## Usage

### `fromReddit(r)`

Streams the pages of a subreddit.

```js
const { pipe, map, forEach } = require('callbag-basics')
const { fromReddit } = require('callbag-reddit')

pipe(
  fromReddit('midlyinteresting'),
  map(x => x.data.url),
  forEach(console.log)
)
```
