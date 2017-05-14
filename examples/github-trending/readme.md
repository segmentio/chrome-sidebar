# Github Trending Sidebar example

Download the example [or clone the repo](https://github.com/segmentio/chrome-sidebar):

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

For production, [publish to the Chrome Web Store](https://developer.chrome.com/webstore/publish). You can keep the extension unlisted (no one can search for it) or [private](https://support.google.com/chrome/a/answer/2663860?hl=en) (people have to be added to a Google group to see it).
