---
title: "CSS Masonry Grid"
link_url: https://www.alexclayton.org/pantheon-2026
img_src: alex-clayton-masonry-gallery.png
img_alt: Gallery of work from artist Alex Clayton's Pantheon 2026
---

Creating a website masonry layout (a grid that stacks and wraps to the widths and heights of the contained elements) is a problem that I've tried to solve before. Even on this page as it currently looks, but ended up using *column-count* instead. 

[Alex Clayton's Squarespace site](https://www.alexclayton.org/) showed me a working solution. The page uses JavaScript to set the width of each image, positions them *absolutely*, then applies a *transform: translate3d* to position each image relative to all other images in the grid. This position is calculated on page load and window resize to achieve responsiveness. 

It's not a perfect solution as I suspect the Squarespace masonry JS framework depends on the elements being the same width and height to work out where to place each element, but it's pretty successful. 

Ideally we would have native support for a masonry layout but it's not so simple to solve. 

There's a good [CSS Tricks](https://css-tricks.com/css-masonry-css-grid/) post breaking down the issue and I found another JS framework called [masonry-grid.js](https://masonry-grid.js.org/articles/masonry-grid-a-14-kb-library-that-actually-works/) that looks like a great solution too.