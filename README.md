# react-unsplash-wrapper
A tiny React component to effortless use images from [Unsplash](https://unsplash.com/) with tons of possibilities.

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

## Why?
Because I love Unsplash pics and I wanted to use them in my React prototypes with no effort. For avatars, placeholders or Hero images.

## Installation

```
yarn add react-unsplash-wrapper
```
Or, if you use npm, `npm i --save react-unsplash-wrapper`

## Usage

You only need to import `<Unsplash />` and use it with tons of possibilities:
```jsx
import Unsplash from 'react-unsplash-wrapper'

const Avatar = () => (
  <Unsplash width="64" height="64" keywords="kitten" img />
)

const ImgPlaceholder = () => (
  <Unsplash width="800" height="200">
    Foo bar
  </Unsplash>
)
```

`<Unsplash />` gives you some convenient defaults:

- 1080 x 720 placeholder by default with a random image
- Image as CSS background
- Image covering the container
- Centered content by default (useful for Hero images)
- Minimum height of 400px
- The placeholder expands horizontally

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | node | - | Used only when `img` is false. Anything that can be rendered: numbers, strings, elements or an array |
| collectionId | number | - | Collection id to fetch images from |
| username | string | - | Username to fetch images from |
| keywords | string | - | Keywords to find an image, separated by comma |
| expand | boolean | false | To expand the image to a parent container (needs `position: relative`) |
| fixed | boolean | false | To show the daily picture from Unsplash |
| img | boolean | false | Shows an image instead of a container with CSS background |
| width | string or number | 1080 | Width of the placeholder or image |
| height | string or number | 720 | Height of the placeholder or image |
| style | object | - | Extra styles to add to the placeholder or image |

## Tons of possibilities

Simplest placeholder (shown as a random CSS background, with a size of 1080 x 720, the container expands horizontally and with a min height of 400px)
```jsx
<Unsplash />
```

Simplest image (shown a random `<img />` with a size of 1080 x 720)
```jsx
<Unsplash img />
```

Avatars (with `<img />` or as a placeholder)
```jsx
<Unsplash width="64" height="64" keywords="face" img />
```

Placeholder with image, size and random image
```jsx
<Unsplash width="800" height="200" />
```

Placeholder with custom size and keywords
```jsx
<Unsplash width="800" height="200" keywords="beach, palms, sea" />
```

Placeholder with content inside (Hero block) and custom styles
```jsx
<Unsplash height="400" style={{ lineHeight: 2 }}>
  <h1 style={{color: 'white', textShadow: '1px 1px 2px black'}}>Super awesome title</h1>
  <p style={{color: 'white', textShadow: '1px 1px 2px black'}}>With React Unsplash Wrapper is really easy to create a Hero image.</p>
</Unsplash>
```

Placeholder that expands to its parent (that needs to be relative positioned)
```jsx
<div style={{position: 'relative', width: 400, height: 400, margin: 'auto'}}>
  <Unsplash expand />
</div>
```
