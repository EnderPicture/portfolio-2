---
title: 'Traveling at Home'
cover: 'favicon.png'
---

<script>
  import YoutubeEmbed from '$lib/components/YoutubeEmbed.svelte';
</script>

# About

## What is this

I am a film maker who loves the technical side of videography and production. With this chance to
showcase my technical abilities, I wish to experiment on what can be done during lock down and at
home.

A film illustrating the effects of COVID-19 lockdown's effects to travel and how one still travel at
home with.

## Viewing

<YoutubeEmbed code="eW7nDUjvhd0" />

# What I did

## Camera operator

I operated a Sony a6400 recording at 100mb/s 4k 24pfs with a custom HLG picture profile and
manual/shutter speed priority modes keeping the 180 degrees shutter and higher dynamic range.

### Dolly shots

A custom rig was created to film the dolly-in and out shots of the physical computer monitor. My
tripod is able to remove one of its legs and be combined with the center column, creating a monopod.
With the monopod, I can combine 2 broomsticks to create a triangle shape with a smooth bottom for me
to slide on the top of my chair. The end of the monopod is extended for a water bottle to hook onto
for counterbalance. The shot coming out of this rig is still not perfect so a little bit more warp
stabilizer is used to create a perfect dolly in and out.

All images on the screen are static and detailed while filming to give enough information for later
screen tracking and replacement. A random person's portrait is used for reliable continuous face
detection autofocus.

### Walking shots

To keep the walking shots smooth, the tripod is used just like a steady cam. With the hand on the
center column, moving it up and down allows me to find the center of gravity and balance the rig.
Having the legs out and flat gives it more rotational inertia to fight shake in the pan motion.
Having the camera be heavier helps with shakes as well. Although the footage coming out of the
camera still have some rotations in it, the harsh micro stakes and jitters are taken care of.

## Visual effects editor

### Screen tracking

I used Mocha AE to track the screen, transform it to corner pins and apply it to the screen capture
comps. I needed to add blur, noise, and colour grading so the screen captures look in place and
realistic.

### Google streetview footage

A JavaScript site is made using the Google Streetview API. This interfaces with an auto hotkey
script where it takes a screenshot every 3 seconds. The tilt of the camera is ways at 90 while the
pan heading is smoothed to follow the road, creating an unreal smooth feel.

### Media processing

MKV from screen recordings are converted using FFmpeg, a command line tool. Audio used in the first
bit of the film is created using this way as well. All camera footage are converted to Apple Prores
422lt using Adobe Media Encoder for better editing experience. All street view and screen recordings
are converted to Prores 422hq for better abilities to keep solid colours without compression
artifacts.

## Story board

A story board and mood board was created in Figma to guide the filming and editing of the film.

## Tools used

- [After Effects](https://www.adobe.com/products/aftereffects.html)
- [Premiere Pro](https://www.adobe.com/ca/products/premiere.html)
- [Mocha AE](https://borisfx.com/products/mocha-ae-cc-mocha-for-after-effects/)
- [Media Encoder](https://www.adobe.com/products/media-encoder.html)
- [FFMEG](https://ffmpeg.org/)
- [Auto Hotkeys](https://www.autohotkey.com/)
- [Google Earth Studio](https://www.google.com/earth/studio/)
- [JS Fiddle](https://jsfiddle.net/)
- [Figma](https://www.figma.com/)

# References
