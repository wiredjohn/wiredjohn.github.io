---
title: "Instax Product Pages"
link_url: https://instax.co.uk/cameras/square-sq40/
img_src: 
  - instax.png
img_alt: Website product page for the Instax Square SQ40
---

The product pages on the official [Instax website](https://instax.co.uk/cameras/square-sq40/) are very cool. 

It uses a lot of paralax scrolling that plays with depth, interactive 3D models of the cameras combined with bold colours and type. I like it a lot. 

My favourite thing it does is outline solid text when an image passes through it when scrolling. This is pictured below. They've achieved this by having a solid colour text element, then product image, then an outline text element (using <code>-webkit-text-stroke-color</code>) all absolutely positioned in the same container. So the text isn't actually reacting to the image at all - the picture is just sandwiched between 2 differently styled copies of the same text. 

Clever clogs. 

They animate with [gsap](https://gsap.com/) so this is another reason for me to learn it!