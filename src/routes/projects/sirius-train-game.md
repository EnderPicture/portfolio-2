---
title: Sirius Train Game
description:
  A "calming" game where you get to drive three different types of trains, the bullet train, diesel
  train, and steam train.
tags:
  - Team
  - Development
  - Game
---

<script context="module">
  import img from "$lib/images/sirius-train-game/cover.png?srcset";
  export const cover = img;

  export const load = () => ({props: {cover: cover}});
</script>

<script>
  import YoutubeEmbed from "$lib/components/YoutubeEmbed.svelte";
  import Image from "$lib/components/Image.svelte";
  import Figures from "$lib/components/Figures.svelte";

  import before1 from "$lib/images/sirius-train-game/before-1.gif?srcset";
  import before2 from "$lib/images/sirius-train-game/before-2.jpg?srcset";
  import before3 from "$lib/images/sirius-train-game/before-3.png?srcset";
  import train from "$lib/images/sirius-train-game/train.png?srcset";
  import wip from "$lib/images/sirius-train-game/wip.png?srcset";
</script>

Game play of the Sirius Train Game on its diesel train configuration.

## What is this

The Serius Train Game is a 2d side scroller built to allow players to enjoy the scenery while
controlling one of 3 types of trains. With each type of train, the player is exposed to more and
more control from the bullet train to the steam train. As the train engineer, the player needs to
control the train with elegance, smoothness, and punctuality so the passengers stay happy. Developed
for the class IAT410 Advanced game design working in a team of 4, we are tasked to create an
intriguing game within the allotted three-month semester time frame.

Created for SFU's Fall 2019 class of IAT 410 - Advanced Game Design.

## Awards

With a panel of industry judges, our game won the "Certificate of Excellence in Game Design" and
"Winning the Best Game (Champion)" award.

## Team

- Celia (Jinghan) Zhang
- Sherry (Shiyi) Wang
- Patrick Devota
- Donny Wu

## Trailer

<YoutubeEmbed code="6_vj4RII_xQ"/>

Video by Patrick Devota

## Process

The game started very differently. The team and I have ideated about a similar game to keep talking
and nobody explodes but in single-player, something about challenging multitasking skills. The
initial idea was the player being someone new to a space-age power station and them needing to deal
with a reactor core meltdown in the first-person mode. Spending almost half of our allotted time on
this idea with prototypes and player testing done, we have found that the game is hard to expand on
the idea and reach a cohesive narrative requirement.

<!-- prettier-ignore -->
<Figures
  images={[
    {
      srcset: before2,
      alt: '',
      figCaption: ''
    },
    {
      srcset: before1,
      alt: '',
      figCaption: ''
    },
    {
      srcset: before3,
      alt: '',
      figCaption: ''
    },
  ]}
/>

I always wanted to build a train game so I suggested the idea of pivoting to my team. Through a day
of brainstorming with the new idea still integrating the previous core mechanics. Instead of being
in the first-person mode, the player is in the third person view looking at a flat-shaded vector
drawing of a train. Being backlit, the art team does not need to worry about background items being
simple or brush strokes.

<!-- prettier-ignore -->
<Figures
  images={[
    {
      srcset: train,
      alt: '',
      figCaption: ''
    },
    {
      srcset: wip,
      alt: '',
      figCaption: ''
    },
  ]}
/>

## Challenges

Some challenges I faced are about game balancing, with many values working in tandem, it is very
difficult to find the optimum value for an enjoyable gaming experience. It is also difficult to
debug each value change as this is a slow game and speeding it up will not give the same feel. We
overcame this by having many people playtest this game and provide feedback with interactive
development techniques

## Conclusion

In the end, I believe the resulting product was what I could have hoped for in such a small time
frame with it winning the top prize of “Certificate of Excellence in Game Design” at the end of the
semester with a panel of industry expert judges.

## Tools used

- [Unity](https://unity.com/)
- [Adobe Illustrator](https://www.adobe.com/products/illustrator.html)
- [VS Code](https://code.visualstudio.com/)

## References

[GitHub - EnderPicture/sirius-train](https://github.com/EnderPicture/sirius-train)
