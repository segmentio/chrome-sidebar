<h1 align="center">chrome-sidebar</h1>
<p align="center">
<strong>Easiest way to embed an iframe as a chrome extension</strong>
<br>
built by <a href="https://open.segment.com">Segment</a>
<br><br>
<a href="https://npmjs.com/package/chrome-iframe-sheet"><img src="https://img.shields.io/npm/v/chrome-iframe-sheet.svg" /></a>
</p>

## Demo

![Chrome sidebar demo](https://i.imgur.com/1gKJeYP.gif)

## Features

- **6kb!** minified
- Completely customizable CSS that won't conflict with page styles
- Mount any iframe or React component

## Installation

```bash
yarn add chrome-sidebar
# or
npm install --save chrome-sidebar
```

### Example

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Frame } from 'chrome-sidebar'
import { url } from './settings'

if (Frame.isReady()) {
  Frame.toggle()
} else {
  boot()
}

function boot() {
  const root = document.createElement('div')
  document.body.appendChild(root)

  const App = (
    <Frame url={url} />
  )

  ReactDOM.render(App, root)
}
```

## Getting Started

Download [an example](https://github.com/segmentio/chrome-sidebar/tree/master/examples/) or [clone the repo](https://github.com/segmentio/chrome-sidebar):

```bash
curl https://codeload.github.com/segmentio/chrome-sidebar/tar.gz/master | tar -xz --strip=2 chrome-sidebar-master/examples/github-trending
cd github-trending
```

Install it and run:

```bash
npm install
npm run dev
```

For development, you need to load it as an unpacked extension:

![How to load unpacked extension](http://i.imgur.com/CYAw5mf.gif)

Now, you should have a chrome sidebar extension on all of your pages!

## Production

In order to share your extension with others, [publish to the Chrome Web Store](https://developer.chrome.com/webstore/publish). You can keep the extension unlisted (no one can search for it) or [private](https://support.google.com/chrome/a/answer/2663860?hl=en) (people have to be added to a Google group to see it).

Learn more about [Chrome's manifest.json](https://developer.chrome.com/extensions/manifest)

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```
Copyright (c) 2017-present Segment.io, Inc. open@segment.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
