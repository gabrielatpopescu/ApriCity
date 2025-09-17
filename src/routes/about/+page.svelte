<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { onMount } from 'svelte';
  import AnimatedTooltip from '$lib/components/ui/AnimatedTooltip/AnimatedTooltip.svelte';
  import ioan from '$lib/assets/ioan.jpg';
  import gabriela from '$lib/assets/gabriela1.jpg';
  import videobg from '$lib/assets/video-bg2.mp4';

  const technologies = [
    {
      name: "Rust",
      description: "Memory-safe systems programming language",
      icon: `<svg version="1.1" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="logo" transform="translate(72, 72)">
    <path id="r" transform="translate(0.5, 0.5)" stroke="black" stroke-width="1" stroke-linejoin="round" d="
      M -9,-15 H 4 C 12,-15 12,-7 4,-7 H -9 Z
      M -40,22 H 0 V 11 H -9 V 3 H 1 C 12,3 6,22 15,22 H 40
      V 3 H 34 V 5 C 34,13 25,12 24,7 C 23,2 19,-2 18,-2 C 33,-10 24,-26 12,-26 H -35
      V -15 H -25 V 11 H -40 Z" />
    <g id="gear" mask="url(#holes)">
      <circle r="43" fill="none" stroke="black" stroke-width="9" />
      <g id="cogs">
        <polygon id="cog" stroke="black" stroke-width="3" stroke-linejoin="round" points="46,3 51,0 46,-3" />
        <use xlink:href="#cog" transform="rotate(11.25)" />
        <use xlink:href="#cog" transform="rotate(22.5)" />
        <use xlink:href="#cog" transform="rotate(33.75)" />
        <use xlink:href="#cog" transform="rotate(45)" />
        <use xlink:href="#cog" transform="rotate(56.25)" />
        <use xlink:href="#cog" transform="rotate(67.5)" />
        <use xlink:href="#cog" transform="rotate(78.75)" />
        <use xlink:href="#cog" transform="rotate(90)" />
        <use xlink:href="#cog" transform="rotate(101.25)" />
        <use xlink:href="#cog" transform="rotate(112.5)" />
        <use xlink:href="#cog" transform="rotate(123.75)" />
        <use xlink:href="#cog" transform="rotate(135)" />
        <use xlink:href="#cog" transform="rotate(146.25)" />
        <use xlink:href="#cog" transform="rotate(157.5)" />
        <use xlink:href="#cog" transform="rotate(168.75)" />
        <use xlink:href="#cog" transform="rotate(180)" />
        <use xlink:href="#cog" transform="rotate(191.25)" />
        <use xlink:href="#cog" transform="rotate(202.5)" />
        <use xlink:href="#cog" transform="rotate(213.75)" />
        <use xlink:href="#cog" transform="rotate(225)" />
        <use xlink:href="#cog" transform="rotate(236.25)" />
        <use xlink:href="#cog" transform="rotate(247.5)" />
        <use xlink:href="#cog" transform="rotate(258.75)" />
        <use xlink:href="#cog" transform="rotate(270)" />
        <use xlink:href="#cog" transform="rotate(281.25)" />
        <use xlink:href="#cog" transform="rotate(292.5)" />
        <use xlink:href="#cog" transform="rotate(303.75)" />
        <use xlink:href="#cog" transform="rotate(315)" />
        <use xlink:href="#cog" transform="rotate(326.25)" />
        <use xlink:href="#cog" transform="rotate(337.5)" />
        <use xlink:href="#cog" transform="rotate(348.75)" />
      </g>
      <g id="mounts">
        <polygon id="mount" stroke="black" stroke-width="6" stroke-linejoin="round" points="-7,-42 0,-35 7,-42" />
        <use xlink:href="#mount" transform="rotate(72)" />
        <use xlink:href="#mount" transform="rotate(144)" />
        <use xlink:href="#mount" transform="rotate(216)" />
        <use xlink:href="#mount" transform="rotate(288)" />
      </g>
    </g>
    <mask id="holes">
      <rect x="-60" y="-60" width="120" height="120" fill="white" />
      <circle r="30" fill="black" />
    </mask>
  </g>
</svg>`
    },
    {
      name: "Tokio",
      description: "Async runtime",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 110" version="1.1" class="w-10 h-10">
    <!-- Generator: Sketch 40.1 (33804) - http://www.bohemiancoding.com/sketch -->
    <title>Mark Copy</title>
    <desc>Created with Sketch.</desc>
    <defs/>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="01" transform="translate(-900.000000, -275.000000)" fill="#000000">
            <g id="Group-Copy-2" transform="translate(900.000000, 275.000000)">
                <g id="Group">
                    <g id="Mark-Copy">
                        <polygon id="Line-Copy-3" transform="translate(37.000000, 67.000000) rotate(-300.000000) translate(-37.000000, -67.000000) " points="35 74.0516078 35 76 39 76 39 74.0516078 39 59.9483922 39 58 35 58 35 59.9483922"/>
                        <polygon id="Line" transform="translate(83.000000, 67.000000) rotate(-60.000000) translate(-83.000000, -67.000000) " points="81 74.0516078 81 76 85 76 85 74.0516078 85 59.9483922 85 58 81 58 81 59.9483922"/>
                        <path d="M80,54 C80,42.954305 71.045695,34 60,34 C48.954305,34 40,42.954305 40,54 C40,65.045695 48.954305,74 60,74 C71.045695,74 80,65.045695 80,54 Z M44.2328042,54 C44.2328042,45.2920182 51.2920182,38.2328042 60,38.2328042 C68.7079818,38.2328042 75.7671958,45.2920182 75.7671958,54 C75.7671958,62.7079818 68.7079818,69.7671958 60,69.7671958 C51.2920182,69.7671958 44.2328042,62.7079818 44.2328042,54 Z" id="Oval-Copy-2"/>
                        <circle id="Oval-Copy-6" cx="24" cy="75" r="3"/>
                        <circle id="Oval-Copy-12" cx="60" cy="96" r="3"/>
                        <circle id="Oval-Copy-13" cx="60" cy="12" r="3"/>
                        <circle id="Oval-Copy-14" cx="96" cy="33" r="3"/>
                        <circle id="Oval-Copy-16" cx="24" cy="33" r="3"/>
                        <circle id="Oval-Copy-15" cx="96" cy="75" r="3"/>
                        <ellipse id="Oval-Copy-6" cx="60" cy="54" rx="3" ry="3"/>
                        <polygon id="Line" points="2 52 -4.42312853e-13 52 -4.54747351e-13 56 2 56 40 56 42 56 42 52 40 52"/>
                        <polygon id="Line" points="80 52 78 52 78 56 80 56 118 56 120 56 120 52 118 52"/>
                        <polygon id="Line-Copy-4" points="72.8299167 70.3885725 71.8231708 68.660434 68.3668937 70.6739258 69.3736396 72.4020643 88.5018116 105.236696 89.5085575 106.964834 92.9648345 104.951343 91.9580886 103.223204"/>
                        <polygon id="Line-Copy-4" points="32.5813684 2.14002423 31.5746225 0.411885722 28.1183455 2.42537751 29.1250914 4.15351602 48.2532633 36.9881477 49.2600092 38.7162862 52.7162862 36.7027944 51.7095403 34.9746559"/>
                        <polygon id="Line-Copy-7" points="90.7095403 4.15351602 91.7162862 2.42537751 88.2600092 0.411885722 87.2532633 2.14002423 68.1250914 34.9746559 67.1183455 36.7027944 70.5746225 38.7162862 71.5813684 36.9881477"/>
                        <polygon id="Line-Copy-7" points="50.8265046 72.5969413 51.8332505 70.8688028 48.3769735 68.855311 47.3702276 70.5834495 28.2420556 103.418081 27.2353097 105.14622 30.6915868 107.159712 31.6983326 105.431573"/>
                        <polygon id="Line" points="58 87.0167635 58 89 62 89 62 87.0167635 62 72.9832365 62 71 58 71 58 72.9832365"/>
                        <polygon id="Line" points="58 35.0516078 58 37 62 37 62 35.0516078 62 20.9483922 62 19 58 19 58 20.9483922"/>
                        <polygon id="Line-Copy-2" transform="translate(37.000000, 41.000000) rotate(-60.000000) translate(-37.000000, -41.000000) " points="35 48.0516078 35 50 39 50 39 48.0516078 39 33.9483922 39 32 35 32 35 33.9483922"/>
                        <polygon id="Line-Copy" transform="translate(83.000000, 41.000000) rotate(-300.000000) translate(-83.000000, -41.000000) " points="81 48.0516078 81 50 85 50 85 48.0516078 85 33.9483922 85 32 81 32 81 33.9483922"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`
    },
    {
      name: "SQLx",
      description: "Database access",
      icon: `<svg version="1.1" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="logo" transform="translate(72, 72)">
    <path id="r" transform="translate(0.5, 0.5)" stroke="black" stroke-width="1" stroke-linejoin="round" d="
      M -9,-15 H 4 C 12,-15 12,-7 4,-7 H -9 Z
      M -40,22 H 0 V 11 H -9 V 3 H 1 C 12,3 6,22 15,22 H 40
      V 3 H 34 V 5 C 34,13 25,12 24,7 C 23,2 19,-2 18,-2 C 33,-10 24,-26 12,-26 H -35
      V -15 H -25 V 11 H -40 Z" />
    <g id="gear" mask="url(#holes)">
      <circle r="43" fill="none" stroke="black" stroke-width="9" />
      <g id="cogs">
        <polygon id="cog" stroke="black" stroke-width="3" stroke-linejoin="round" points="46,3 51,0 46,-3" />
        <use xlink:href="#cog" transform="rotate(11.25)" />
        <use xlink:href="#cog" transform="rotate(22.5)" />
        <use xlink:href="#cog" transform="rotate(33.75)" />
        <use xlink:href="#cog" transform="rotate(45)" />
        <use xlink:href="#cog" transform="rotate(56.25)" />
        <use xlink:href="#cog" transform="rotate(67.5)" />
        <use xlink:href="#cog" transform="rotate(78.75)" />
        <use xlink:href="#cog" transform="rotate(90)" />
        <use xlink:href="#cog" transform="rotate(101.25)" />
        <use xlink:href="#cog" transform="rotate(112.5)" />
        <use xlink:href="#cog" transform="rotate(123.75)" />
        <use xlink:href="#cog" transform="rotate(135)" />
        <use xlink:href="#cog" transform="rotate(146.25)" />
        <use xlink:href="#cog" transform="rotate(157.5)" />
        <use xlink:href="#cog" transform="rotate(168.75)" />
        <use xlink:href="#cog" transform="rotate(180)" />
        <use xlink:href="#cog" transform="rotate(191.25)" />
        <use xlink:href="#cog" transform="rotate(202.5)" />
        <use xlink:href="#cog" transform="rotate(213.75)" />
        <use xlink:href="#cog" transform="rotate(225)" />
        <use xlink:href="#cog" transform="rotate(236.25)" />
        <use xlink:href="#cog" transform="rotate(247.5)" />
        <use xlink:href="#cog" transform="rotate(258.75)" />
        <use xlink:href="#cog" transform="rotate(270)" />
        <use xlink:href="#cog" transform="rotate(281.25)" />
        <use xlink:href="#cog" transform="rotate(292.5)" />
        <use xlink:href="#cog" transform="rotate(303.75)" />
        <use xlink:href="#cog" transform="rotate(315)" />
        <use xlink:href="#cog" transform="rotate(326.25)" />
        <use xlink:href="#cog" transform="rotate(337.5)" />
        <use xlink:href="#cog" transform="rotate(348.75)" />
      </g>
      <g id="mounts">
        <polygon id="mount" stroke="black" stroke-width="6" stroke-linejoin="round" points="-7,-42 0,-35 7,-42" />
        <use xlink:href="#mount" transform="rotate(72)" />
        <use xlink:href="#mount" transform="rotate(144)" />
        <use xlink:href="#mount" transform="rotate(216)" />
        <use xlink:href="#mount" transform="rotate(288)" />
      </g>
    </g>
    <mask id="holes">
      <rect x="-60" y="-60" width="120" height="120" fill="white" />
      <circle r="30" fill="black" />
    </mask>
  </g>
</svg>`
    },
    {
      name: "Reqwest",
      description: "HTTP client",
      icon: `<svg version="1.1" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="logo" transform="translate(72, 72)">
    <path id="r" transform="translate(0.5, 0.5)" stroke="black" stroke-width="1" stroke-linejoin="round" d="
      M -9,-15 H 4 C 12,-15 12,-7 4,-7 H -9 Z
      M -40,22 H 0 V 11 H -9 V 3 H 1 C 12,3 6,22 15,22 H 40
      V 3 H 34 V 5 C 34,13 25,12 24,7 C 23,2 19,-2 18,-2 C 33,-10 24,-26 12,-26 H -35
      V -15 H -25 V 11 H -40 Z" />
    <g id="gear" mask="url(#holes)">
      <circle r="43" fill="none" stroke="black" stroke-width="9" />
      <g id="cogs">
        <polygon id="cog" stroke="black" stroke-width="3" stroke-linejoin="round" points="46,3 51,0 46,-3" />
        <use xlink:href="#cog" transform="rotate(11.25)" />
        <use xlink:href="#cog" transform="rotate(22.5)" />
        <use xlink:href="#cog" transform="rotate(33.75)" />
        <use xlink:href="#cog" transform="rotate(45)" />
        <use xlink:href="#cog" transform="rotate(56.25)" />
        <use xlink:href="#cog" transform="rotate(67.5)" />
        <use xlink:href="#cog" transform="rotate(78.75)" />
        <use xlink:href="#cog" transform="rotate(90)" />
        <use xlink:href="#cog" transform="rotate(101.25)" />
        <use xlink:href="#cog" transform="rotate(112.5)" />
        <use xlink:href="#cog" transform="rotate(123.75)" />
        <use xlink:href="#cog" transform="rotate(135)" />
        <use xlink:href="#cog" transform="rotate(146.25)" />
        <use xlink:href="#cog" transform="rotate(157.5)" />
        <use xlink:href="#cog" transform="rotate(168.75)" />
        <use xlink:href="#cog" transform="rotate(180)" />
        <use xlink:href="#cog" transform="rotate(191.25)" />
        <use xlink:href="#cog" transform="rotate(202.5)" />
        <use xlink:href="#cog" transform="rotate(213.75)" />
        <use xlink:href="#cog" transform="rotate(225)" />
        <use xlink:href="#cog" transform="rotate(236.25)" />
        <use xlink:href="#cog" transform="rotate(247.5)" />
        <use xlink:href="#cog" transform="rotate(258.75)" />
        <use xlink:href="#cog" transform="rotate(270)" />
        <use xlink:href="#cog" transform="rotate(281.25)" />
        <use xlink:href="#cog" transform="rotate(292.5)" />
        <use xlink:href="#cog" transform="rotate(303.75)" />
        <use xlink:href="#cog" transform="rotate(315)" />
        <use xlink:href="#cog" transform="rotate(326.25)" />
        <use xlink:href="#cog" transform="rotate(337.5)" />
        <use xlink:href="#cog" transform="rotate(348.75)" />
      </g>
      <g id="mounts">
        <polygon id="mount" stroke="black" stroke-width="6" stroke-linejoin="round" points="-7,-42 0,-35 7,-42" />
        <use xlink:href="#mount" transform="rotate(72)" />
        <use xlink:href="#mount" transform="rotate(144)" />
        <use xlink:href="#mount" transform="rotate(216)" />
        <use xlink:href="#mount" transform="rotate(288)" />
      </g>
    </g>
    <mask id="holes">
      <rect x="-60" y="-60" width="120" height="120" fill="white" />
      <circle r="30" fill="black" />
    </mask>
  </g>
</svg>`
    },
    {
      name: "Chrono",
      description: "Date & time handling",
      icon: `<svg version="1.1" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="logo" transform="translate(72, 72)">
    <path id="r" transform="translate(0.5, 0.5)" stroke="black" stroke-width="1" stroke-linejoin="round" d="
      M -9,-15 H 4 C 12,-15 12,-7 4,-7 H -9 Z
      M -40,22 H 0 V 11 H -9 V 3 H 1 C 12,3 6,22 15,22 H 40
      V 3 H 34 V 5 C 34,13 25,12 24,7 C 23,2 19,-2 18,-2 C 33,-10 24,-26 12,-26 H -35
      V -15 H -25 V 11 H -40 Z" />
    <g id="gear" mask="url(#holes)">
      <circle r="43" fill="none" stroke="black" stroke-width="9" />
      <g id="cogs">
        <polygon id="cog" stroke="black" stroke-width="3" stroke-linejoin="round" points="46,3 51,0 46,-3" />
        <use xlink:href="#cog" transform="rotate(11.25)" />
        <use xlink:href="#cog" transform="rotate(22.5)" />
        <use xlink:href="#cog" transform="rotate(33.75)" />
        <use xlink:href="#cog" transform="rotate(45)" />
        <use xlink:href="#cog" transform="rotate(56.25)" />
        <use xlink:href="#cog" transform="rotate(67.5)" />
        <use xlink:href="#cog" transform="rotate(78.75)" />
        <use xlink:href="#cog" transform="rotate(90)" />
        <use xlink:href="#cog" transform="rotate(101.25)" />
        <use xlink:href="#cog" transform="rotate(112.5)" />
        <use xlink:href="#cog" transform="rotate(123.75)" />
        <use xlink:href="#cog" transform="rotate(135)" />
        <use xlink:href="#cog" transform="rotate(146.25)" />
        <use xlink:href="#cog" transform="rotate(157.5)" />
        <use xlink:href="#cog" transform="rotate(168.75)" />
        <use xlink:href="#cog" transform="rotate(180)" />
        <use xlink:href="#cog" transform="rotate(191.25)" />
        <use xlink:href="#cog" transform="rotate(202.5)" />
        <use xlink:href="#cog" transform="rotate(213.75)" />
        <use xlink:href="#cog" transform="rotate(225)" />
        <use xlink:href="#cog" transform="rotate(236.25)" />
        <use xlink:href="#cog" transform="rotate(247.5)" />
        <use xlink:href="#cog" transform="rotate(258.75)" />
        <use xlink:href="#cog" transform="rotate(270)" />
        <use xlink:href="#cog" transform="rotate(281.25)" />
        <use xlink:href="#cog" transform="rotate(292.5)" />
        <use xlink:href="#cog" transform="rotate(303.75)" />
        <use xlink:href="#cog" transform="rotate(315)" />
        <use xlink:href="#cog" transform="rotate(326.25)" />
        <use xlink:href="#cog" transform="rotate(337.5)" />
        <use xlink:href="#cog" transform="rotate(348.75)" />
      </g>
      <g id="mounts">
        <polygon id="mount" stroke="black" stroke-width="6" stroke-linejoin="round" points="-7,-42 0,-35 7,-42" />
        <use xlink:href="#mount" transform="rotate(72)" />
        <use xlink:href="#mount" transform="rotate(144)" />
        <use xlink:href="#mount" transform="rotate(216)" />
        <use xlink:href="#mount" transform="rotate(288)" />
      </g>
    </g>
    <mask id="holes">
      <rect x="-60" y="-60" width="120" height="120" fill="white" />
      <circle r="30" fill="black" />
    </mask>
  </g>
</svg>`
    },
    {
      name: "Axum, Tower, Tower-HTTP",
      description: "Web server & middleware",
      icon: `<svg version="1.1" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="logo" transform="translate(72, 72)">
    <path id="r" transform="translate(0.5, 0.5)" stroke="black" stroke-width="1" stroke-linejoin="round" d="
      M -9,-15 H 4 C 12,-15 12,-7 4,-7 H -9 Z
      M -40,22 H 0 V 11 H -9 V 3 H 1 C 12,3 6,22 15,22 H 40
      V 3 H 34 V 5 C 34,13 25,12 24,7 C 23,2 19,-2 18,-2 C 33,-10 24,-26 12,-26 H -35
      V -15 H -25 V 11 H -40 Z" />
    <g id="gear" mask="url(#holes)">
      <circle r="43" fill="none" stroke="black" stroke-width="9" />
      <g id="cogs">
        <polygon id="cog" stroke="black" stroke-width="3" stroke-linejoin="round" points="46,3 51,0 46,-3" />
        <use xlink:href="#cog" transform="rotate(11.25)" />
        <use xlink:href="#cog" transform="rotate(22.5)" />
        <use xlink:href="#cog" transform="rotate(33.75)" />
        <use xlink:href="#cog" transform="rotate(45)" />
        <use xlink:href="#cog" transform="rotate(56.25)" />
        <use xlink:href="#cog" transform="rotate(67.5)" />
        <use xlink:href="#cog" transform="rotate(78.75)" />
        <use xlink:href="#cog" transform="rotate(90)" />
        <use xlink:href="#cog" transform="rotate(101.25)" />
        <use xlink:href="#cog" transform="rotate(112.5)" />
        <use xlink:href="#cog" transform="rotate(123.75)" />
        <use xlink:href="#cog" transform="rotate(135)" />
        <use xlink:href="#cog" transform="rotate(146.25)" />
        <use xlink:href="#cog" transform="rotate(157.5)" />
        <use xlink:href="#cog" transform="rotate(168.75)" />
        <use xlink:href="#cog" transform="rotate(180)" />
        <use xlink:href="#cog" transform="rotate(191.25)" />
        <use xlink:href="#cog" transform="rotate(202.5)" />
        <use xlink:href="#cog" transform="rotate(213.75)" />
        <use xlink:href="#cog" transform="rotate(225)" />
        <use xlink:href="#cog" transform="rotate(236.25)" />
        <use xlink:href="#cog" transform="rotate(247.5)" />
        <use xlink:href="#cog" transform="rotate(258.75)" />
        <use xlink:href="#cog" transform="rotate(270)" />
        <use xlink:href="#cog" transform="rotate(281.25)" />
        <use xlink:href="#cog" transform="rotate(292.5)" />
        <use xlink:href="#cog" transform="rotate(303.75)" />
        <use xlink:href="#cog" transform="rotate(315)" />
        <use xlink:href="#cog" transform="rotate(326.25)" />
        <use xlink:href="#cog" transform="rotate(337.5)" />
        <use xlink:href="#cog" transform="rotate(348.75)" />
      </g>
      <g id="mounts">
        <polygon id="mount" stroke="black" stroke-width="6" stroke-linejoin="round" points="-7,-42 0,-35 7,-42" />
        <use xlink:href="#mount" transform="rotate(72)" />
        <use xlink:href="#mount" transform="rotate(144)" />
        <use xlink:href="#mount" transform="rotate(216)" />
        <use xlink:href="#mount" transform="rotate(288)" />
      </g>
    </g>
    <mask id="holes">
      <rect x="-60" y="-60" width="120" height="120" fill="white" />
      <circle r="30" fill="black" />
    </mask>
  </g>
</svg>`
    },
    {
      name: "GeoJSON",
      description: "Geospatial support",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" aria-hidden="true" role="img" class="iconify iconify--gis w-10 h-10" preserveAspectRatio="xMidYMid meet"><path d="M13.996 0a2.5 2.5 0 0 0-2.5 2.5V70H0v22h11.496v5.5a2.5 2.5 0 0 0 2.5 2.5h72a2.5 2.5 0 0 0 2.5-2.5V21.625c.027-1.113.004-1.777-.732-2.59L69.46.732A2.5 2.5 0 0 0 67.662 0H13.996zm2.5 5h48.902l1.252 14.568a2.5 2.5 0 0 0 2.278 2.278l14.568 1.252V95h-67v-3H80V70H16.496V5zm54.275 4.115l8.61 8.61l-7.928-.682l-.682-7.928zM10.48 73c1.37 0 2.439.379 3.207 1.137c.772.751 1.269 1.793 1.49 3.125l-2.213.543c-.156-.712-.45-1.271-.881-1.68c-.426-.415-.961-.623-1.603-.623c-.974 0-1.748.406-2.325 1.217c-.572.81-.86 2.012-.86 3.607c0 1.72.292 3.014.874 3.877c.582.857 1.346 1.285 2.289 1.285c.467 0 .932-.118 1.398-.355a4.72 4.72 0 0 0 1.213-.881v-1.838h-2.55v-2.443h4.8v5.775c-.466.593-1.143 1.118-2.03 1.572c-.884.449-1.78.672-2.688.672c-1.154 0-2.16-.316-3.018-.949c-.858-.64-1.504-1.549-1.936-2.728C5.215 83.126 5 81.835 5 80.445c0-1.51.241-2.85.723-4.023c.481-1.173 1.187-2.073 2.115-2.7c.707-.48 1.587-.722 2.64-.722zm37.33 0c1.384 0 2.425.4 3.123 1.197c.702.798 1.07 1.862 1.105 3.194l-2.226.129c-.096-.745-.302-1.281-.618-1.604c-.31-.33-.78-.494-1.408-.494c-.647 0-1.153.176-1.52.525c-.235.224-.353.523-.353.899c0 .342.11.637.33.88c.281.31.963.633 2.047.97c1.084.336 1.886.686 2.402 1.048c.522.356.928.847 1.22 1.473c.295.62.443 1.388.443 2.304c0 .831-.175 1.607-.526 2.333c-.351.725-.848 1.267-1.49 1.623c-.642.349-1.444.523-2.402.523c-1.395 0-2.466-.422-3.213-1.266c-.748-.85-1.195-2.085-1.34-3.707l2.168-.277c.13.956.392 1.657.789 2.105c.401.449.942.672 1.619.672c.717 0 1.256-.196 1.617-.591c.366-.403.551-.87.551-1.405c0-.343-.079-.634-.234-.87c-.15-.245-.416-.456-.797-.634c-.261-.118-.855-.33-1.783-.632c-1.195-.39-2.033-.867-2.514-1.434c-.678-.798-1.018-1.77-1.018-2.916a4.6 4.6 0 0 1 .475-2.066a3.361 3.361 0 0 1 1.377-1.475c.602-.336 1.328-.504 2.176-.504zm11.318 0c1.626 0 2.925.663 3.898 1.988c.979 1.325 1.47 3.168 1.47 5.528c0 2.34-.486 4.17-1.454 5.496c-.968 1.318-2.262 1.978-3.883 1.978c-1.64 0-2.946-.657-3.914-1.969c-.968-1.318-1.453-3.13-1.453-5.437c0-1.477.168-2.717.504-3.719c.25-.738.592-1.4 1.023-1.986c.437-.587.915-1.021 1.432-1.305c.687-.382 1.479-.574 2.377-.574zm-19.777.248h2.218v9.176c0 1.2-.08 2.121-.24 2.767c-.216.844-.607 1.523-1.174 2.038c-.567.507-1.314.761-2.242.761c-1.089 0-1.927-.4-2.514-1.197c-.587-.804-.883-1.98-.888-3.53l2.1-.316c.024.83.118 1.417.279 1.76c.24.52.606.781 1.097.781c.497 0 .85-.183 1.055-.552c.206-.376.309-1.151.309-2.325v-9.363zm26.898 0h2.166l4.516 9.68v-9.68H75v14.494h-2.234l-4.45-9.451v9.451h-2.068V73.248zm-7.098 2.254c-.918 0-1.658.415-2.22 1.246c-.562.824-.842 2.069-.842 3.736c0 1.642.288 2.888.865 3.739c.577.843 1.31 1.265 2.197 1.265c.888 0 1.615-.418 2.182-1.256c.572-.843.86-2.106.86-3.787c0-1.66-.28-2.9-.837-3.716c-.551-.818-1.286-1.227-2.205-1.227zm-38.752 1.502c1.19 0 2.128.518 2.815 1.553c.687 1.028 1.016 2.607.986 4.736h-5.3c.015.824.186 1.466.512 1.928c.326.455.732.683 1.219.683c.331 0 .61-.12.836-.357c.226-.237.396-.62.512-1.147l2.107.465c-.271 1.015-.7 1.79-1.287 2.324c-.582.528-1.312.791-2.19.791c-1.39 0-2.418-.595-3.086-1.789c-.526-.955-.79-2.162-.79-3.619c0-1.74.346-3.102 1.038-4.084c.693-.989 1.569-1.484 2.627-1.484zm9.159 0c1.209 0 2.202.518 2.974 1.553c.773 1.028 1.158 2.33 1.158 3.906c0 1.589-.39 2.907-1.173 3.955c-.778 1.041-1.76 1.562-2.944 1.562c-.732 0-1.432-.217-2.1-.652c-.662-.435-1.165-1.07-1.511-1.908c-.346-.844-.52-1.87-.52-3.076c0-.923.174-1.816.52-2.68c.346-.863.835-1.522 1.467-1.977a3.58 3.58 0 0 1 2.129-.683zm-9.032 2.127c-.461 0-.841.22-1.142.662c-.301.442-.45 1.04-.445 1.799H22.1c-.015-.804-.174-1.413-.475-1.828c-.301-.422-.668-.633-1.1-.633zm9.04.139c-.552 0-1.017.276-1.393.83c-.376.553-.565 1.35-.565 2.392c0 1.042.189 1.839.565 2.393c.376.553.84.832 1.392.832c.552 0 1.014-.279 1.385-.832c.377-.554.565-1.358.565-2.412c0-1.029-.188-1.82-.565-2.373c-.371-.554-.833-.83-1.385-.83z" fill="#000000"/><path d="M51.252 18v10.11h8.852a25.56 25.56 0 0 0-1.707-3.881c-1.985-3.606-4.507-5.78-7.145-6.229zm-2.504.1c-2.469.613-4.813 2.735-6.682 6.13a25.56 25.56 0 0 0-1.706 3.881h8.388zm-5.769.678a22.547 22.547 0 0 0-12.005 9.333h6.739c.594-1.851 1.318-3.562 2.16-5.089c.897-1.63 1.942-3.067 3.106-4.244zm14.729.231c1.074 1.134 2.044 2.488 2.883 4.013c.841 1.527 1.564 3.238 2.157 5.089h6.278a22.56 22.56 0 0 0-11.318-9.102zM29.595 30.615a22.435 22.435 0 0 0-2.095 8.329h8.408c.097-2.941.48-5.744 1.103-8.329zm10.004 0c-.662 2.542-1.078 5.357-1.184 8.329h10.333v-8.329zm11.653 0v8.329h10.797c-.106-2.972-.523-5.787-1.184-8.329zm12.197 0a41.505 41.505 0 0 1 1.1 8.329H72.5a22.435 22.435 0 0 0-2.095-8.329zM27.5 41.447a22.435 22.435 0 0 0 2.095 8.329h7.298c-.588-2.593-.934-5.396-.999-8.329zm10.898 0c.07 2.962.452 5.774 1.075 8.329h9.275v-8.329zm12.854 0v8.329h9.738c.624-2.555 1.005-5.367 1.075-8.329zm13.31 0c-.065 2.932-.409 5.736-.995 8.329h6.838a22.435 22.435 0 0 0 2.095-8.329zM30.973 52.28a22.565 22.565 0 0 0 11.33 9.105a20.107 20.107 0 0 1-2.432-3.514c-.917-1.666-1.697-3.546-2.319-5.591zm9.212 0c.532 1.61 1.165 3.084 1.88 4.383c1.753 3.182 3.923 5.246 6.222 5.997c.154.01.306.03.46.03V52.275zm11.066 0v10.415c.357-.02.713-.04 1.065-.08c2.247-.789 4.364-2.834 6.08-5.951c.716-1.299 1.349-2.773 1.88-4.383zm11.656 0c-.62 2.045-1.4 3.926-2.317 5.591a20.4 20.4 0 0 1-2.197 3.243a22.568 22.568 0 0 0 10.632-8.834z" fill="#000000"/></svg>`
    },
    {
      name: "Image, Imageproc, Rusttype",
      description: "Image generation (heatmap tiles)",
      icon: `<svg version="1.1" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="logo" transform="translate(72, 72)">
    <path id="r" transform="translate(0.5, 0.5)" stroke="black" stroke-width="1" stroke-linejoin="round" d="
      M -9,-15 H 4 C 12,-15 12,-7 4,-7 H -9 Z
      M -40,22 H 0 V 11 H -9 V 3 H 1 C 12,3 6,22 15,22 H 40
      V 3 H 34 V 5 C 34,13 25,12 24,7 C 23,2 19,-2 18,-2 C 33,-10 24,-26 12,-26 H -35
      V -15 H -25 V 11 H -40 Z" />
    <g id="gear" mask="url(#holes)">
      <circle r="43" fill="none" stroke="black" stroke-width="9" />
      <g id="cogs">
        <polygon id="cog" stroke="black" stroke-width="3" stroke-linejoin="round" points="46,3 51,0 46,-3" />
        <use xlink:href="#cog" transform="rotate(11.25)" />
        <use xlink:href="#cog" transform="rotate(22.5)" />
        <use xlink:href="#cog" transform="rotate(33.75)" />
        <use xlink:href="#cog" transform="rotate(45)" />
        <use xlink:href="#cog" transform="rotate(56.25)" />
        <use xlink:href="#cog" transform="rotate(67.5)" />
        <use xlink:href="#cog" transform="rotate(78.75)" />
        <use xlink:href="#cog" transform="rotate(90)" />
        <use xlink:href="#cog" transform="rotate(101.25)" />
        <use xlink:href="#cog" transform="rotate(112.5)" />
        <use xlink:href="#cog" transform="rotate(123.75)" />
        <use xlink:href="#cog" transform="rotate(135)" />
        <use xlink:href="#cog" transform="rotate(146.25)" />
        <use xlink:href="#cog" transform="rotate(157.5)" />
        <use xlink:href="#cog" transform="rotate(168.75)" />
        <use xlink:href="#cog" transform="rotate(180)" />
        <use xlink:href="#cog" transform="rotate(191.25)" />
        <use xlink:href="#cog" transform="rotate(202.5)" />
        <use xlink:href="#cog" transform="rotate(213.75)" />
        <use xlink:href="#cog" transform="rotate(225)" />
        <use xlink:href="#cog" transform="rotate(236.25)" />
        <use xlink:href="#cog" transform="rotate(247.5)" />
        <use xlink:href="#cog" transform="rotate(258.75)" />
        <use xlink:href="#cog" transform="rotate(270)" />
        <use xlink:href="#cog" transform="rotate(281.25)" />
        <use xlink:href="#cog" transform="rotate(292.5)" />
        <use xlink:href="#cog" transform="rotate(303.75)" />
        <use xlink:href="#cog" transform="rotate(315)" />
        <use xlink:href="#cog" transform="rotate(326.25)" />
        <use xlink:href="#cog" transform="rotate(337.5)" />
        <use xlink:href="#cog" transform="rotate(348.75)" />
      </g>
      <g id="mounts">
        <polygon id="mount" stroke="black" stroke-width="6" stroke-linejoin="round" points="-7,-42 0,-35 7,-42" />
        <use xlink:href="#mount" transform="rotate(72)" />
        <use xlink:href="#mount" transform="rotate(144)" />
        <use xlink:href="#mount" transform="rotate(216)" />
        <use xlink:href="#mount" transform="rotate(288)" />
      </g>
    </g>
    <mask id="holes">
      <rect x="-60" y="-60" width="120" height="120" fill="white" />
      <circle r="30" fill="black" />
    </mask>
  </g>
</svg>`
    },
    {
      name: "Python",
      description: "High-level, general-purpose programming language",
      icon: `<svg viewBox="0 0 100 100" class = "w-10 h-10" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" version="1.0" id="svg2" sodipodi:version="0.32" inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)" sodipodi:docname="python-logo-only.svg" width="83.371017pt" height="101.00108pt" inkscape:export-filename="python-logo-only.png" inkscape:export-xdpi="232.44" inkscape:export-ydpi="232.44">
  <metadata id="metadata371">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview inkscape:window-height="2080" inkscape:window-width="1976" inkscape:pageshadow="2" inkscape:pageopacity="0.0" guidetolerance="10.0" gridtolerance="10.0" objecttolerance="10.0" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base" inkscape:zoom="2.1461642" inkscape:cx="91.558698" inkscape:cy="47.9926" inkscape:window-x="1092" inkscape:window-y="72" inkscape:current-layer="svg2" width="210mm" height="40mm" units="mm" inkscape:showpageshadow="2" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="pt" showgrid="false" inkscape:window-maximized="0"/>
  <defs id="defs4">
    <linearGradient id="linearGradient2795">
      <stop style="stop-color:#b8b8b8;stop-opacity:0.49803922;" offset="0" id="stop2797"/>
      <stop style="stop-color:#7f7f7f;stop-opacity:0;" offset="1" id="stop2799"/>
    </linearGradient>
    <linearGradient id="linearGradient2787">
      <stop style="stop-color:#7f7f7f;stop-opacity:0.5;" offset="0" id="stop2789"/>
      <stop style="stop-color:#7f7f7f;stop-opacity:0;" offset="1" id="stop2791"/>
    </linearGradient>
    <linearGradient id="linearGradient3676">
      <stop style="stop-color:#b2b2b2;stop-opacity:0.5;" offset="0" id="stop3678"/>
      <stop style="stop-color:#b3b3b3;stop-opacity:0;" offset="1" id="stop3680"/>
    </linearGradient>
    <linearGradient id="linearGradient3236">
      <stop style="stop-color:#f4f4f4;stop-opacity:1" offset="0" id="stop3244"/>
      <stop style="stop-color:white;stop-opacity:1" offset="1" id="stop3240"/>
    </linearGradient>
    <linearGradient id="linearGradient4671">
      <stop style="stop-color:#ffd43b;stop-opacity:1;" offset="0" id="stop4673"/>
      <stop style="stop-color:#ffe873;stop-opacity:1" offset="1" id="stop4675"/>
    </linearGradient>
    <linearGradient id="linearGradient4689">
      <stop style="stop-color:#5a9fd4;stop-opacity:1;" offset="0" id="stop4691"/>
      <stop style="stop-color:#306998;stop-opacity:1;" offset="1" id="stop4693"/>
    </linearGradient>
    <linearGradient x1="224.23996" y1="144.75717" x2="-65.308502" y2="144.75717" id="linearGradient2987" xlink:href="#linearGradient4671" gradientUnits="userSpaceOnUse" gradientTransform="translate(100.2702,99.61116)"/>
    <linearGradient x1="172.94208" y1="77.475983" x2="26.670298" y2="76.313133" id="linearGradient2990" xlink:href="#linearGradient4689" gradientUnits="userSpaceOnUse" gradientTransform="translate(100.2702,99.61116)"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4689" id="linearGradient2587" gradientUnits="userSpaceOnUse" gradientTransform="translate(100.2702,99.61116)" x1="172.94208" y1="77.475983" x2="26.670298" y2="76.313133"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4671" id="linearGradient2589" gradientUnits="userSpaceOnUse" gradientTransform="translate(100.2702,99.61116)" x1="224.23996" y1="144.75717" x2="-65.308502" y2="144.75717"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4689" id="linearGradient2248" gradientUnits="userSpaceOnUse" gradientTransform="translate(100.2702,99.61116)" x1="172.94208" y1="77.475983" x2="26.670298" y2="76.313133"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4671" id="linearGradient2250" gradientUnits="userSpaceOnUse" gradientTransform="translate(100.2702,99.61116)" x1="224.23996" y1="144.75717" x2="-65.308502" y2="144.75717"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4671" id="linearGradient2255" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.562541,0,0,0.567972,-11.5974,-7.60954)" x1="224.23996" y1="144.75717" x2="-65.308502" y2="144.75717"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4689" id="linearGradient2258" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.562541,0,0,0.567972,-11.5974,-7.60954)" x1="172.94208" y1="76.176224" x2="26.670298" y2="76.313133"/>
    <radialGradient inkscape:collect="always" xlink:href="#linearGradient2795" id="radialGradient2801" cx="61.518883" cy="132.28575" fx="61.518883" fy="132.28575" r="29.036913" gradientTransform="matrix(1,0,0,0.177966,0,108.7434)" gradientUnits="userSpaceOnUse"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4671" id="linearGradient1475" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.562541,0,0,0.567972,-14.99112,-11.702371)" x1="150.96111" y1="192.35176" x2="112.03144" y2="137.27299"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4689" id="linearGradient1478" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.562541,0,0,0.567972,-14.99112,-11.702371)" x1="26.648937" y1="20.603781" x2="135.66525" y2="114.39767"/>
    <radialGradient inkscape:collect="always" xlink:href="#linearGradient2795" id="radialGradient1480" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.7490565e-8,-0.23994696,1.054668,3.7915457e-7,-83.7008,142.46201)" cx="61.518883" cy="132.28575" fx="61.518883" fy="132.28575" r="29.036913"/>
  </defs>
  <path style="fill:url(#linearGradient1478);fill-opacity:1" d="M 54.918785,9.1927421e-4 C 50.335132,0.02221727 45.957846,0.41313697 42.106285,1.0946693 30.760069,3.0991731 28.700036,7.2947714 28.700035,15.032169 v 10.21875 h 26.8125 v 3.40625 h -26.8125 -10.0625 c -7.792459,0 -14.6157588,4.683717 -16.7499998,13.59375 -2.46181998,10.212966 -2.57101508,16.586023 0,27.25 1.9059283,7.937852 6.4575432,13.593748 14.2499998,13.59375 h 9.21875 v -12.25 c 0,-8.849902 7.657144,-16.656248 16.75,-16.65625 h 26.78125 c 7.454951,0 13.406253,-6.138164 13.40625,-13.625 v -25.53125 c 0,-7.2663386 -6.12998,-12.7247771 -13.40625,-13.9374997 C 64.281548,0.32794397 59.502438,-0.02037903 54.918785,9.1927421e-4 Z m -14.5,8.21875012579 c 2.769547,0 5.03125,2.2986456 5.03125,5.1249996 -2e-6,2.816336 -2.261703,5.09375 -5.03125,5.09375 -2.779476,-1e-6 -5.03125,-2.277415 -5.03125,-5.09375 -10e-7,-2.826353 2.251774,-5.1249996 5.03125,-5.1249996 z" id="path1948"/>
  <path style="fill:url(#linearGradient1475);fill-opacity:1" d="m 85.637535,28.657169 v 11.90625 c 0,9.230755 -7.825895,16.999999 -16.75,17 h -26.78125 c -7.335833,0 -13.406249,6.278483 -13.40625,13.625 v 25.531247 c 0,7.266344 6.318588,11.540324 13.40625,13.625004 8.487331,2.49561 16.626237,2.94663 26.78125,0 6.750155,-1.95439 13.406253,-5.88761 13.40625,-13.625004 V 86.500919 h -26.78125 v -3.40625 h 26.78125 13.406254 c 7.792461,0 10.696251,-5.435408 13.406241,-13.59375 2.79933,-8.398886 2.68022,-16.475776 0,-27.25 -1.92578,-7.757441 -5.60387,-13.59375 -13.406241,-13.59375 z m -15.0625,64.65625 c 2.779478,3e-6 5.03125,2.277417 5.03125,5.093747 -2e-6,2.826354 -2.251775,5.125004 -5.03125,5.125004 -2.76955,0 -5.03125,-2.29865 -5.03125,-5.125004 2e-6,-2.81633 2.261697,-5.093747 5.03125,-5.093747 z" id="path1950"/>
  <ellipse style="opacity:0.44382;fill:url(#radialGradient1480);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:15.4174;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path1894" cx="55.816761" cy="127.70079" rx="35.930977" ry="6.9673119"/>
</svg>`
    },
    {
      name: "FastAPI",
      description: "Web framework for building APIs with Python",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170" class="w-10 h-10"><path d="M56.813 127.586c-1.903-.227-3.899-.52-4.434-.652a48.078 48.078 0 00-2.375-.5 36.042 36.042 0 01-2.703-.633c-4.145-1.188-4.442-1.285-7.567-2.563-2.875-1.172-8.172-3.91-9.984-5.156-.496-.344-.96-.621-1.031-.621-.07 0-1.23-.816-2.578-1.813-8.57-6.343-15.004-14.043-19.653-23.527-.8-1.629-1.453-3.074-1.453-3.21 0-.134-.144-.505-.32-.817-.363-.649-.88-2.047-1.297-3.492a20.047 20.047 0 00-.625-1.813c-.195-.46-.352-1.02-.352-1.246 0-.227-.195-.965-.433-1.645-.238-.675-.43-1.472-.43-1.77 0-.296-.187-1.32-.418-2.276C.598 73.492 0 67.379 0 63.953c0-3.422.598-9.535 1.16-11.894.23-.957.418-2 .418-2.32 0-.321.145-.95.32-1.4.18-.448.41-1.253.516-1.788.11-.535.36-1.457.563-2.055l.59-1.726c.433-1.293.835-2.387 1.027-2.813.11-.238.539-1.21.957-2.16.676-1.535 2.125-4.43 2.972-5.945.309-.555.426-.739 2.098-3.352 2.649-4.148 7.176-9.309 11.39-12.988 1.485-1.297 6.446-5.063 6.669-5.063.062 0 .53-.281 1.043-.625 1.347-.902 2.668-1.668 4.39-2.531a53.06 53.06 0 001.836-.953c.285-.164.82-.41 3.567-1.64.605-.27 1.257-.516 3.136-1.173.414-.144 1.246-.449 1.84-.672.598-.222 1.301-.406 1.563-.406.258 0 .937-.18 1.508-.402.57-.223 1.605-.477 2.304-.563.696-.082 1.621-.277 2.055-.43.43-.148 1.61-.34 2.621-.425a72.572 72.572 0 003.941-.465c2.688-.394 8.532-.394 11.192 0a75.02 75.02 0 003.781.445c.953.079 2.168.278 2.703.442.535.16 1.461.36 2.055.433.594.079 1.594.325 2.222.551.63.23 1.344.414 1.59.414s.754.137 1.125.309c.375.168 1.168.449 1.766.625.594.18 1.613.535 2.27.797.652.261 1.527.605 1.945.761.77.29 6.46 3.137 7.234 3.622 6.281 3.917 9.512 6.476 13.856 10.964 5.238 5.414 8.715 10.57 12.254 18.16.25.536.632 1.329.851 1.758.215.434.395.942.395 1.13 0 .19.18.76.402 1.269.602 1.383 1.117 2.957 1.36 4.16.12.59.343 1.32.495 1.621.153.3.332 1.063.403 1.688.07.624.277 1.648.453 2.269 1.02 3.531 1.527 13.934.91 18.535-.183 1.367-.39 3.02-.46 3.672-.118 1.117-.708 4.004-1.212 5.945l-.52 2.055c-.98 3.957-3.402 9.594-6.359 14.809-1.172 2.07-5.101 7.668-5.843 8.324-.067.058-.399.45-.735.863-.336.418-1.414 1.586-2.39 2.594-4.301 4.441-7.77 7.187-13.86 10.969-.722.449-6.847 3.441-7.992 3.906-.594.238-1.586.64-2.203.89-.613.247-1.297.454-1.512.458-.215.003-.781.195-1.258.425-.476.23-1.082.422-1.351.426-.266.004-1.043.192-1.727.418-.683.23-1.633.477-2.11.55-.476.075-1.495.278-2.269.45-.773.172-3.11.508-5.187.746a59.06 59.06 0 01-13.945-.031zm4.703-12.5c.3-.234.609-.7.691-1.027.18-.723 29.234-58.97 29.781-59.7.461-.617.504-1.605.082-1.953-.222-.187-3.004-.246-10.43-.234-5.57.012-10.253.016-10.406.012-.226-.008-.273-3.73-.25-19.672.016-10.817-.035-19.766-.113-19.89-.078-.126-.383-.227-.68-.227-.418 0-.613.18-.87.808-.485 1.168-1.825 3.82-8.348 16.485a3554.569 3554.569 0 00-4.055 7.89c-1.156 2.262-2.98 5.813-4.047 7.89a8751.248 8751.248 0 00-8.598 16.759c-4.933 9.636-5.53 10.785-5.742 11.039-.41.496-.633 1.64-.402 2.07.21.394.629.41 11.043.394 5.953-.007 10.863.024 10.914.07.137.141.086 37.31-.055 38.196-.093.582-.031.89.235 1.156.46.461.586.457 1.25-.066zm0 0" fill="#049688"/></svg>`
    },
  ];
  const technologies2 = [
    {
      name: "SvelteKit",
      description: "Reactive framework for building fast web apps",
      icon: `<svg viewBox="0 0 98.1 118" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
        <path d="m91.8 15.6c-10.9-15.7-32.6-20.3-48.2-10.4l-27.5 17.6c-7.5 4.7-12.7 12.4-14.2 21.1-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5" fill="#ff3e00"/>
        <path d="m40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7l27.4-17.5c1.4-.9 2.3-2.2 2.6-3.8s-.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-27.4 17.5c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5" fill="#fff"/>
      </svg>`
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapidly building modern websites",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33" class="w-10 h-10">
  <g clip-path="url(#prefix__clip0)">
    <path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/>
  </g>
  <defs>
    <clipPath id="prefix__clip0">
      <path fill="#fff" d="M0 0h54v32.4H0z"/>
    </clipPath>
  </defs>
</svg>`
    },
    {
      name: "Vite",
      description: "Fast frontend build tool",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 410 404" fill="none">
<path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
<path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
<stop stop-color="#41D1FF"/>
<stop offset="1" stop-color="#BD34FE"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEA83"/>
<stop offset="0.0833333" stop-color="#FFDD35"/>
<stop offset="1" stop-color="#FFA800"/>
</linearGradient>
</defs>
</svg>`
    },
    {
      name: "Shadcn-svelte",
      description: "Accessible components and design",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 256 256" class = "h-10 w-10">
  <!-- Generator: Adobe Illustrator 29.0.1, SVG Export Plug-In . SVG Version: 2.1.0 Build 192)  -->
  <defs>
    <style>
      .st0, .st1 {
        fill: none;
      }

      .st1 {
        stroke: #000;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      }
    </style>
  </defs>
  <rect class="st0" width="256" height="256"/>
  <line class="st1" x1="208" y1="128" x2="128" y2="208"/>
  <line class="st1" x1="192" y1="40" x2="40" y2="192"/>
</svg>`
    },
    {
      name: "Deck.gl",
      description: "GPU-powered framework for visual exploratory data analysis",
      icon: `<svg class="h-20 w-20" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
  <style>
    .deck { font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 700; font-size: 36px; fill: #000000; }
    .gl { font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 400; font-style: italic; font-size: 36px; fill: #007acc; }
  </style>
  <text x="10" y="35" class="deck">deck</text>
  <text x="105" y="35" class="gl">.gl</text>
</svg>`
    },
    {
      name: "Three.js",
      description: "JavaScript 3D Library",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" class="w-10 h-10" viewBox="0 0 512 512" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:10;">
    <g transform="matrix(2.25096,0,0,2.25096,256.253,256.48)">
        <g id="Three.js_Icon.svg" transform="matrix(1,0,0,1,-113.385,-113.385)">
            <g transform="matrix(1,0,0,1,8.964,4.2527)">
                <path d="M63.02,200.61L19.807,25.67L193.037,75.544L63.02,200.61Z" style="fill:none;stroke:black;stroke-width:4px;"/>
                <path d="M106.39,50.612L127.981,138.108L41.414,113.163L106.39,50.612Z" style="fill:none;stroke:black;stroke-width:4px;"/>
                <path d="M84.91,125.03L74.186,81.565L117.194,93.911L84.91,125.03Z" style="fill:none;stroke:black;stroke-width:4px;"/>
                <path d="M63.458,38.153L74.182,81.618L31.174,69.272L63.458,38.153Z" style="fill:none;stroke:black;stroke-width:4px;"/>
                <path d="M149.47,62.93L160.194,106.395L117.186,94.049L149.47,62.93Z" style="fill:none;stroke:black;stroke-width:4px;"/>
                <path d="M84.915,125.06L95.639,168.525L52.631,156.179L84.915,125.06Z" style="fill:none;stroke:black;stroke-width:4px;"/>
            </g>
        </g>
        <g id="Three.js_Icon.svg1" serif:id="Three.js_Icon.svg">
        </g>
    </g>
</svg>`
    },
  ];
  const technologies3 = [
    {
      name: "PostgreSQL",
      description: "Object-relational database system",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 25.6 25.6"><style><![CDATA[.B{stroke-linecap:round}.C{stroke-linejoin:round}.D{stroke-linejoin:miter}.E{stroke-width:.716}]]></style><g fill="none" stroke="#fff"><path d="M18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81" fill="#000" stroke="#000" stroke-linecap="butt" stroke-width="2.149" class="D"/><path d="M23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0-1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z" fill="#336791" stroke="none"/><g class="E"><g class="B"><path d="M12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017M10.356 2.2S1.072-1.596 1.504 7.033c.092 1.836 2.63 13.9 5.66 10.25C8.27 15.95 9.27 14.907 9.27 14.907m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687" class="C"/><path d="M20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99 8.196 7.99 8.196" stroke-linejoin="bevel"/></g><g class="C"><path d="M11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z"/><path d="M11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733" class="B"/></g></g><g fill="#fff" class="D"><path d="M10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z" stroke-width=".239"/><path d="M19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z" stroke-width=".119"/></g><path d="M20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68" class="B C E"/></g></svg>`
    },
    {
      name: "Docker",
      description: "Containerization for seamless deployment",
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
        <path d="M13.983 11.078h2.119a.186.186 0 00.168-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="#0db7ed"/>
      </svg>`
    },
    {
      name: "Firebase",
      description: "Securely manage client authentication",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-10 h-10">
  <path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#ffa000"/>
  <path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#f57f17"/>
  <path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#ffca28"/>
  <path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#ffa000"/>
</svg>`
    },
    {
      name: "PostGIS",
      description: "Support for storing, indexing, and querying geospatial data",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 264 264" preserveAspectRatio="xMinYMin meet"><path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"/><path d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002" fill="#336791"/><path d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225" fill="#FFF"/><path d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z" fill="#FFF"/></svg>`
    },
    {
      name: "MinIO",
      description: "High Performance Object Storage",
      icon: `<svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="2500" width="1238" viewBox="0 0 566.439 1147.992"><path d="M359 1135.442c-1.375-.74-16.788-15.67-34.25-33.18L293 1070.428V863.38c0-113.876-.289-207.336-.641-207.69-.649-.647-52.692 25.508-205.773 103.415-46.152 23.488-84.548 42.462-85.324 42.164-.906-.347-1.206-1.359-.837-2.827.315-1.257 1.018-6.483 1.562-11.614 2.754-25.985 23.256-87.028 45.006-134 59.272-128.003 155.174-234.087 277.19-306.617 19.913-11.837 36.64-20.494 38.337-19.843 1.294.497 1.48 13.97 1.48 107.1 0 76.287.31 106.531 1.091 106.531.6 0 5.174-2.109 10.165-4.686 35.003-18.079 60.409-51.848 68.9-91.58 2.871-13.436 3.13-37.923.537-50.916-4.763-23.874-15.756-46.334-31.252-63.852-7.652-8.65-33.057-35.365-77.946-81.966-67.875-70.462-80.303-83.931-88.255-95.65-5.834-8.6-10.87-19.113-13.922-29.062-2.447-7.979-2.7-10.307-2.754-25.288-.065-18.287.974-23.978 6.985-38.248 11.6-27.537 41.822-53.223 66.951-56.903 17.627-2.58 39.898-2.083 54.386 1.217 11.81 2.69 30.942 14.225 44.057 26.562 15.396 14.484 23.147 26.045 81.04 120.872 68.315 111.898 76.461 125.692 77.628 131.443 1.155 5.692.319 8.097-2.79 8.027-2.589-.058-1.805.745-124.8-127.97-10.774-11.275-29.537-31.075-41.694-44-31.729-33.731-44.894-46.44-50.863-49.098-7.641-3.404-18.242-3.248-25.625.378-14.476 7.109-21.328 23.505-15.867 37.97 2.708 7.171-1.064 3.061 87.873 95.75 39.844 41.525 75.834 79.55 79.979 84.5 66.885 79.884 61.447 198.583-12.46 271.993-16.97 16.855-33.934 28.403-65.364 44.493-10.725 5.49-20.962 10.883-22.75 11.984l-3.25 2v257.934c0 141.863-.273 258.644-.607 259.514-.703 1.833-1.03 1.835-4.393.024zM181.37 635.057c87.548-44.936 105.617-54.442 108.183-56.912 1.61-1.548 2.312-3.78 2.792-8.857.969-10.263.782-118.091-.206-118.702-2.176-1.345-38.95 31.338-63.639 56.56-42.682 43.6-78.365 92.834-107.7 148.595-3.836 7.292-6.656 13.259-6.267 13.259s30.467-15.274 66.838-33.943z" fill="#f8e6ea"/><path d="M326.794 1103.247L293 1069.493V653.835l-61.75 31.216c-33.962 17.17-99.189 50.281-144.947 73.583C40.545 781.935 2.36 801 1.445 801c-1.303 0-1.517-.579-.989-2.68.37-1.475 1.064-6.088 1.543-10.25 2.044-17.787 16.212-64.457 30.15-99.315 60.285-150.768 168.623-273.685 310.8-352.622 9.047-5.023 17.211-9.133 18.143-9.133.932 0 1.967.712 2.301 1.582.334.87.607 49.05.607 107.067v105.486l2.25-.696c3.251-1.005 8.982-3.99 16.594-8.645 30.749-18.803 51.879-47.78 60.904-83.52 2.506-9.928 2.721-12.345 2.736-30.774.017-21.356-.819-27.208-6.214-43.5-3.454-10.434-12.292-27.181-19.234-36.452-8.043-10.74-25.046-28.799-112.54-119.527-27.995-29.03-50.647-53.495-55.989-60.469-24.215-31.615-28.859-67.857-12.988-101.36 5.684-12 11.29-19.777 21.124-29.305 13.369-12.953 30.91-22.657 45.24-25.028 11.674-1.93 30.737-2.165 41.782-.512 26.459 3.96 51.083 20.487 71.976 48.31 10.828 14.418 42.225 65.01 118.224 190.496 23.02 38.01 26.632 45.493 23.482 48.643-2.746 2.746 1.94 7.407-105.398-104.843-22.854-23.9-51.706-54.253-64.116-67.453-33.903-36.062-44.11-45.712-51.126-48.337-16.12-6.03-32.301.405-40.36 16.053-3.808 7.393-3.856 16.908-.126 24.996 3.153 6.84-1.582 1.721 88.156 95.288 39.562 41.25 74.83 78.375 78.375 82.5 24.432 28.436 40.814 66.001 45.79 105 2.069 16.214 1.565 43.117-1.085 58-7.484 42.029-26.615 79.088-55.992 108.465-18.265 18.266-33.294 28.417-69.965 47.258l-21 10.79-.505 259.993c-.277 142.997-.615 260.106-.75 260.244-1.21 1.234-6.985-4.073-36.45-33.503zM184.75 633.93c93.416-47.882 102.347-52.622 105.501-56.01l2.75-2.952v-62.984c0-34.641-.298-62.984-.663-62.984-.364 0-4.077 2.79-8.25 6.2-50.345 41.139-92.928 87.738-127.773 139.824-19.638 29.356-45.804 76.123-41.742 74.607 1.06-.396 32.64-16.461 70.177-35.7z" fill="#f5dbe0"/><path d="M343.764 1120.25c-9.338-9.213-24.58-24.707-33.87-34.433L293 1068.134V861.067C293 747.18 292.831 654 292.625 654c-.509 0-122.164 61.623-214.456 108.631C36.737 783.734 2.151 801 1.311 801c-1.137 0-1.365-.65-.89-2.544.352-1.4 1.05-5.789 1.553-9.754.503-3.965 2.7-14.183 4.884-22.706 11.226-43.825 26.245-83.415 49.126-129.496 14.488-29.177 26.946-50.942 43.503-76C154.034 477.942 228.025 406.465 314 353.275 332.07 342.095 359.314 327 361.42 327c1.43 0 1.58 10.11 1.58 106.531 0 90.157.214 106.614 1.394 107.067.766.294 4.506-1.033 8.31-2.95 31.2-15.711 55.689-43.402 67.175-75.96 5.354-15.177 7.39-27.284 7.433-44.188.069-27.684-7.106-51.819-22.147-74.5-7.924-11.95-16.394-21.143-86.619-94.02-74.473-77.287-83.268-86.882-92.217-100.612-10.866-16.669-15.624-32.513-15.578-51.868.017-7.098.67-14.906 1.597-19.115C239.14 46.56 259.374 21.475 288.308 8 301.058 2.064 311.394 0 328.376 0c24.13 0 41.09 5.323 60.409 18.959 22.314 15.75 30.57 27.083 86.718 119.045 64.439 105.541 84.8 139.73 86.022 144.44.721 2.78 1.235 5.069 1.143 5.088-.092.019-.935.62-1.871 1.335-1.481 1.13-2.38.67-6.892-3.533-7.137-6.65-127.615-132.457-165.094-172.399-33.654-35.863-38.714-40.628-47.348-44.58-15.282-6.997-33.497-.167-41.157 15.43-2.327 4.74-2.802 6.994-2.785 13.215.018 6.282.5 8.451 2.966 13.358 2.986 5.942 4.062 7.087 132.824 141.345 16.395 17.096 32.823 34.844 36.504 39.44 48.423 60.453 57.787 142.92 24.152 212.711-10.815 22.441-23.468 39.73-42.256 57.742-17.912 17.172-30.529 25.545-66.211 43.943-11.55 5.955-21.33 11.307-21.735 11.894-.404.587-.741 117.73-.75 260.317-.011 192.013-.308 259.25-1.145 259.25-.621 0-8.77-7.537-18.106-16.75zM128.207 663.112c7.311-3.789 40.293-20.736 73.293-37.66 78.452-40.235 87.67-45.14 89.728-47.756 1.595-2.027 1.73-7.052 1.75-65.446.012-35.174-.364-63.25-.847-63.25-.478 0-7.79 5.803-16.25 12.894-54.993 46.103-100.245 98.977-136.6 159.606C130.755 635.719 113 668.07 113 669.386c0 1.347 2.448.337 15.207-6.274z" fill="#f3d5da"/><path d="M327.705 1103.771c-18.038-18.299-33.225-34.313-33.75-35.586-.596-1.445-.955-79.755-.955-208.25C293 746.67 292.71 654 292.358 654c-.735 0-58.565 29.257-194.952 98.63C45.104 779.235 1.743 801 1.048 801c-.83 0-1.061-.812-.673-2.359.326-1.297 1.064-5.684 1.64-9.75 3.734-26.34 22.01-82.29 40.468-123.891C97.243 541.585 182.948 440.119 295.5 365.455c27.812-18.45 64.355-39.28 66.54-37.93.604.373.96 40.089.96 107.034 0 96.372.15 106.441 1.581 106.441 2.447 0 15.009-6.574 24.419-12.779 10.321-6.805 27.59-23.864 34.687-34.264 10.508-15.4 18.31-34.114 21.968-52.687 2.347-11.922 2.356-36.577.016-48.452-3.445-17.49-10.247-34.236-19.926-49.058-8.443-12.93-12.793-17.665-91.186-99.26-73.9-76.918-75.216-78.329-83.487-89.484-21.941-29.592-26.33-63.118-12.576-96.07 12.049-28.866 40.724-52.138 70.8-57.458 10.412-1.842 27.712-1.862 38.794-.045 15.939 2.614 31.828 10.283 47.52 22.935 18.996 15.317 26.112 25.64 90.386 131.122 67.058 110.052 74.839 123.215 75.52 127.757.734 4.895-.194 6.297-3.475 5.256-1.068-.339-16.945-16.23-35.283-35.315-65.288-67.944-103.645-108.167-131.339-137.726C347.756 68.867 343.766 65.677 329 65.56c-6.246-.05-8.443.403-13.142 2.71-6.27 3.08-12.522 9.278-16.02 15.88-1.844 3.482-2.307 5.946-2.32 12.35-.026 11.572 2.591 16.317 17.785 32.254 6.684 7.01 42.288 44.175 79.12 82.59 36.83 38.413 69.842 73.288 73.36 77.5 33.308 39.886 50.287 94.853 45.191 146.3-5.69 57.444-34.133 108.197-79.593 142.023-12.31 9.16-20.64 14.052-48.12 28.264L363.5 616.685l-.252 260.158c-.2 207.1-.506 260.161-1.5 260.178-.686.012-16.006-14.95-34.043-33.25zM183 635.247c91.557-46.97 105.362-54.258 107.75-56.884l2.25-2.475v-63.444c0-40.888-.35-63.444-.983-63.444-1.42 0-24.956 19.838-41.83 35.258-42.086 38.458-83.947 90.712-114.494 142.92C125.71 644.24 113 668.139 113 669.848c0 1.384-3.982 3.352 70-34.601z" fill="#f0cdd3"/><path d="M327.575 1103.383l-33.492-33.883-.042-207.191c-.028-139.833-.373-207.396-1.062-207.822-1.04-.643-61.599 29.727-208.669 104.645C39.106 782.16 1.613 801 .993 801c-.62 0-.882-.787-.583-1.75.3-.963 1.003-5.005 1.562-8.982C5.303 766.557 20.177 718.36 35.539 681.5 66.753 606.601 108.36 540.212 160.57 482c14.318-15.964 48.54-49.624 63.43-62.388 27.505-23.58 56.97-45.308 86-63.419 20.006-12.481 48.248-28.363 50.786-28.56 1.606-.125 1.746 6.621 2.214 106.867.497 106.304.513 106.998 2.5 106.673 2.723-.446 15.29-7.25 23.917-12.95 9.657-6.38 28.988-25.848 35.47-35.723 9.908-15.093 17.022-32.366 20.798-50.5 2.471-11.864 2.459-38.238-.023-50-4.629-21.936-15.253-44.618-28.106-60-6.183-7.4-28.242-30.713-78.538-83-77.14-80.194-82.56-86.09-91.597-99.61-6.43-9.622-10.579-18.459-13.664-29.101-1.953-6.74-2.249-10.01-2.195-24.289.056-14.977.31-17.311 2.756-25.288 9.247-30.153 29.613-52.425 59.1-64.632C302.727 2.227 315.624.036 329 .035c28.69-.001 51.55 9.78 74.178 31.737 16.636 16.142 23.899 27.168 96.08 145.859 60.505 99.49 61.547 101.257 62.272 105.547.859 5.081-.486 6.719-3.981 4.848-2.876-1.54-101.803-104.362-162.65-169.054-48.333-51.387-50.942-53.488-66.399-53.452-9.976.023-15.814 2.76-23.258 10.905-6.447 7.055-8.675 13.298-8.015 22.459.675 9.353 4.077 15.353 15.555 27.426 5.328 5.605 41.354 43.219 80.058 83.587 38.703 40.369 73.097 76.819 76.43 81 9.534 11.959 17.423 24.516 24.253 38.603 41.791 86.197 16.65 190.055-59.83 247.156-12.883 9.62-19.441 13.502-47.07 27.867L363.5 616.547 363 876.19c-.275 142.804-.822 259.966-1.216 260.36-.394.394-15.788-14.531-34.209-33.167zM187.5 633.005c95.736-49.078 101.532-52.168 103.951-55.407 2.006-2.686 2.055-4.046 2.348-65.32.176-36.676-.077-62.956-.61-63.489-1.878-1.878-34.514 26.388-60.207 52.146-37.298 37.392-67.08 75.653-95.03 122.09-13.31 22.111-26.83 48.52-24.37 47.604 1.055-.393 34.318-17.324 73.918-37.624z" fill="#eec3cb"/><path d="M355.743 1131.808c-3.012-2.92-18.136-18.178-33.61-33.91l-28.133-28.6v-207.65C294 677.193 293.831 654 292.491 654 291.08 654 207.984 695.853 89 756.493 19.364 791.983.899 801.24.555 800.84c-.677-.79 1.983-14.583 6.14-31.84 16.268-67.54 51.435-145.745 94.658-210.5 55.262-82.793 130.119-154.36 216.785-207.257C335.15 340.86 358.923 328 361.108 328c1.844 0 1.892 2.679 1.892 106.441 0 70.977.338 106.65 1.016 107.069.558.345 5.338-1.648 10.622-4.43 45.452-23.928 73.327-69.436 73.356-119.758.018-31.225-10.14-59.904-29.995-84.683-6.962-8.689-15.084-17.313-76.413-81.139-78.384-81.576-80.323-83.646-88.76-94.728-7.909-10.39-15-23.958-18.434-35.272-2.45-8.073-2.738-10.596-2.8-24.5-.084-18.657 1.76-26.989 9.408-42.5a98.228 98.228 0 0 1 42.722-43.69C298.73 2.99 311.32-.003 329.192.003c35.679.012 66.18 17.464 91.754 52.497 10.681 14.632 50.63 79.305 126.34 204.528 13.99 23.14 16.968 30.17 13.369 31.551-2.95 1.132 3.432 7.543-96.212-96.647-28.63-29.938-61.765-64.782-73.632-77.432C348.048 68.915 343.82 65.566 329 65.524c-10.052-.028-15.364 2.093-22.422 8.952-6.083 5.912-8.775 11.596-9.361 19.761-.569 7.921.86 13.837 4.767 19.739 1.535 2.319 25.68 28.096 53.654 57.282 27.974 29.186 63.412 66.155 78.751 82.153 15.34 16 30.55 32.343 33.8 36.321 20.368 24.923 34.469 54.678 41.357 87.268 2.191 10.368 2.732 16.038 3.172 33.245.34 13.303.1 24.244-.668 30.5-5.485 44.667-25.384 85.575-57.045 117.273-18.218 18.24-32.253 27.6-74.005 49.361l-17.5 9.121-.5 259.667c-.275 142.816-.789 259.955-1.141 260.308-.353.352-3.105-1.748-6.117-4.667zM175.767 639.326C267.569 592.224 286.143 582.45 290 579.212l3.5-2.938.272-63.315c.153-35.624-.113-63.7-.61-64.196-1.017-1.018-10.852 6.594-28.5 22.058-50.196 43.983-92.561 94.786-126.904 152.179C130.125 635.755 112 669.042 112 670.303c0 .383.458.697 1.017.697s28.797-14.253 62.75-31.674z" fill="#ecbbc4"/><path d="M327.654 1102.92L294 1068.72V861.528c0-113.957-.3-207.493-.665-207.859-.688-.687-62.413 30.314-208.167 104.55C38.786 781.84.678 801.01.483 800.816c-.714-.713 5.552-29.746 9.563-44.316 24.828-90.167 73.447-182.424 134.91-256 41.699-49.915 94.518-97.291 148.544-133.237 27.866-18.54 65.272-39.948 67.984-38.908 1.342.515 1.516 12.839 1.516 107.114 0 85.403.252 106.531 1.269 106.531 2.044 0 15.658-7.133 23.239-12.176 31.467-20.932 52.386-53.016 58.92-90.369 2.026-11.586 2.03-33.27.008-44.955-2.122-12.266-7.502-27.966-13.539-39.509-10.215-19.534-14.458-24.296-107.346-120.491-66.114-68.467-76.684-80.625-85.015-97.787-6.78-13.97-8.988-24.213-8.883-41.213.103-16.71 1.994-25.089 8.903-39.444 5.907-12.273 11.377-19.822 21.073-29.082C280.254 9.186 303.143.012 328.919.004c27.259-.01 51.787 10.423 73.91 31.439 14.701 13.964 25.565 30.442 91.683 139.057 68.044 111.78 69.235 113.865 67.028 117.435-1.112 1.799-2.407 1.228-7.223-3.185-6.325-5.796-128.751-133.62-166.188-173.514-32.29-34.41-39.553-41.118-47.917-44.254-16.24-6.089-33.451 1.42-41.025 17.898-5.3 11.534-2.744 23.778 7.345 35.173 2.652 2.996 38.895 40.997 80.539 84.447s77.958 81.7 80.698 85c18.501 22.285 33.364 52.496 40.274 81.864 9.164 38.943 5.706 82.895-9.475 120.441-10.544 26.077-23.176 44.957-43.995 65.756-20.138 20.119-31.854 28.091-70.326 47.853L363 616.328l-.015 259.086c-.008 142.497-.39 259.675-.846 260.395-.592.934-10.474-8.49-34.485-32.89zM226 613.76c59.775-30.79 64.292-33.293 66.334-36.75 1.507-2.55 1.666-8.83 1.666-65.915 0-50.122-.26-63.096-1.262-63.096-.694 0-8.456 6.022-17.25 13.382-56.138 46.99-102 100.937-139.393 163.968-9.25 15.593-24.095 43.665-24.095 45.564 0 1.236 24.193-10.893 114-57.153z" fill="#e7a8b4"/><path d="M327.75 1102.719l-33.75-34.55V860.584C294 720.568 293.669 653 292.983 653c-1.03 0-86.04 42.946-217.457 109.855-39.586 20.155-72.616 36.803-73.4 36.997-1.893.468-1.17-4.722 3.403-24.408C19.54 715.118 48.354 646.005 84.514 585.98c60.389-100.24 146.515-184.314 249.34-243.398C346.489 335.324 360.36 328 361.476 328c.289 0 .525 47.438.525 105.418 0 57.98.273 106.13.607 107 .889 2.317 2.636 1.985 10.668-2.027 37.53-18.744 63.943-53.437 72.862-95.703 3.026-14.337 3.026-37.039 0-51.376-3.879-18.381-9.76-32.729-19.599-47.812-8.571-13.14-11.725-16.575-89.537-97.5-86.574-90.037-87.36-90.934-96.49-110.209-6.44-13.593-8.812-24.382-8.75-39.791.102-25.788 9.633-48.529 28.043-66.915C278.264 10.65 299.39 1.322 325 .302c25.642-1.022 48.21 7.016 70.778 25.21 18.223 14.691 25.318 25.053 91.4 133.488 58.055 95.262 73.201 120.658 74.122 124.286 2.927 11.526-1.735 7.252-70.927-65.032C405.556 129.648 410.784 135.137 386.31 109c-29.712-31.73-35.711-37.356-43.942-41.215-13.39-6.278-26.583-3.676-36.812 7.26-6.731 7.196-9.014 12.76-9.01 21.955.005 10.941 2.944 16.327 16.832 30.855 6.122 6.405 41.73 43.557 79.127 82.56 37.398 39.003 70.852 74.328 74.343 78.5 31.023 37.076 47.716 86.1 45.825 134.585-2.094 53.694-23.857 102.177-62.021 138.165-16.715 15.761-31.872 25.645-67.151 43.786-10.45 5.373-19.45 10.193-20 10.71-.66.619-1.17 89.577-1.5 261.024l-.5 260.084zM176.782 639.314c97.896-50.22 110.467-56.844 113.968-60.053l3.25-2.978V512.14c0-55.443-.197-64.141-1.454-64.141-1.988 0-23.698 18.096-42.91 35.767-52.772 48.54-101.467 113.396-134.744 179.46-4.264 8.468-4.364 8.773-2.86 8.773.567 0 29.705-14.709 64.75-32.686z" fill="#e297a4"/><path d="M328.25 1102.985L295 1069.191V861.564c0-181.877-.183-207.697-1.472-208.192-1.486-.57-54.004 25.728-208.37 104.336C39.319 781.05 1.57 799.904 1.27 799.605c-1.307-1.307 7.447-38.274 14.233-60.105 27.45-88.305 75.203-174.944 135.038-245 15.999-18.731 56.4-59.19 74.958-75.065 27.799-23.78 56.058-44.564 85.5-62.887 20.619-12.832 49.008-28.66 50.145-27.959.47.291.855 48.176.855 106.411 0 71.19.336 106.09 1.024 106.515 1.888 1.166 6.683-.586 15.613-5.704 35.44-20.313 59.035-52.42 67.472-91.811 1.817-8.482 2.249-13.67 2.249-27 0-24.684-3.774-40.278-15.025-62.078-9.872-19.129-11.304-20.758-91.317-103.922-81.186-84.383-87.064-90.834-96.12-105.491-10.427-16.878-14.445-32.5-13.612-52.928.624-15.318 2.338-22.677 8.2-35.204 8.315-17.77 19.452-30.817 34.9-40.887 40.652-26.498 89.547-20.615 126.753 15.251 10.156 9.79 19.568 21.9 30.866 39.712C456.236 108.082 557.285 274.24 560.135 280.5c4.43 9.73.468 10.06-9.046.75-5.94-5.812-49.196-50.924-120.578-125.75-10.494-11-28.577-30.125-40.184-42.5-42.045-44.825-46.54-48.376-61.327-48.458-9.068-.05-16.538 2.995-22.864 9.322-12.418 12.418-13.291 30.063-2.172 43.888 2.1 2.611 22.178 23.873 44.617 47.248 22.44 23.375 57.218 59.6 77.286 80.5s39.182 41.375 42.476 45.5c22.455 28.121 36.848 60.87 42.344 96.346 2.603 16.802 2.32 45.234-.62 62.154-10.04 57.801-42.8 106.425-92.416 137.172-5.033 3.12-18.376 10.392-29.651 16.163-11.275 5.77-21.737 11.348-23.248 12.395l-2.748 1.903-.252 259.824-.252 259.822zM184.368 635.657c89.415-45.847 103.617-53.338 106.576-56.214 1.772-1.723 2.641-3.964 3.165-8.16.875-7.004 1.113-118.851.26-122.033-.33-1.238-.982-2.25-1.447-2.25-.464 0-6.15 4.343-12.633 9.651C220.538 505.57 169.98 565.29 131.59 632.3 122.65 647.909 111 670.142 111 671.6c0 1.5 7.7-2.271 73.368-35.943z" fill="#e08e9d"/><path d="M328.5 1103.22l-33-33.282-.5-208.205c-.45-187.265-.656-208.236-2.055-208.505-1.508-.29-61.494 29.84-214.445 107.715-40.7 20.722-74.787 37.973-75.75 38.335-2.26.851-2.236-.098.29-11.539C22.195 700.975 62.887 611.945 118.328 535.5c45.49-62.722 107.732-122.39 173.72-166.53 24.277-16.24 64.94-39.97 68.49-39.97 1.274 0 1.462 13.697 1.462 106.393 0 90.745.208 106.473 1.413 106.935 1.805.693 13.6-4.949 22.893-10.949 40.748-26.31 64.543-72.056 62.354-119.879-1.239-27.056-9.488-51.087-24.947-72.676-7.266-10.145-17.713-21.504-64.63-70.27-19.02-19.769-41.108-42.734-49.083-51.033-49.744-51.764-61.127-65.039-68.194-79.521-7.835-16.059-10.345-28.35-9.494-46.5 1.11-23.68 9.763-43.493 26.579-60.857 9.527-9.837 17.316-15.451 29.257-21.087C303.305 2.402 311.81.564 329.5.62c13.328.042 16.003.348 24 2.747 18.49 5.549 33.988 14.541 48.13 27.927 14.997 14.197 23.001 26.03 73.87 109.206 42.477 69.453 83.792 137.954 85.118 141.128 3.074 7.358.28 8.522-6.286 2.62-4.962-4.462-112.2-116.47-153.817-160.66-53.374-56.676-56.348-59.114-72.015-59.057-9.665.035-15.615 2.525-22.543 9.437-7.113 7.097-9.462 12.83-9.433 23.032.02 7.332.407 9.234 2.815 13.845 3.462 6.63.28 3.206 87.514 94.155 39.829 41.525 75.459 79.1 79.177 83.5 32.666 38.652 50.133 92.559 46.044 142.104-4.95 59.993-32.433 110.327-79.68 145.935-10.457 7.882-22.303 14.844-46.554 27.36-11.912 6.148-22.15 11.768-22.748 12.49-.777.936-1.16 75.535-1.34 260.711l-.252 259.4zM170.68 642.836c99.368-50.956 115.676-59.548 119.82-63.124l4-3.452.306-62.338c.169-34.286.048-63.37-.269-64.63-.316-1.261-1.06-2.293-1.653-2.293-1.443 0-19.35 14.755-35.384 29.158-56.004 50.305-101.01 108.237-137.896 177.498C112.061 667.82 109.872 673 111.43 673c.237 0 26.9-13.573 59.25-30.163z" fill="#dd8595"/><path d="M328.25 1102.718l-33.25-34.09V860.874c0-138.18-.337-207.963-1.005-208.376-.907-.56-84.986 41.709-237.495 119.396-30.25 15.41-55.145 27.603-55.322 27.097-.513-1.469 6.48-31.04 11.455-48.435C37.769 662.666 85.958 572.215 145.589 501c50.066-59.793 110.847-111.626 177.911-151.721C340.441 339.15 359.139 329 360.855 329c.853 0 1.145 27.19 1.145 106.531 0 91.54.202 106.61 1.432 107.081.788.303 5.061-1.28 9.496-3.515 38.466-19.396 64.33-52.83 73.567-95.097 2.465-11.279 3.048-35.373 1.139-47.012-4.19-25.541-14.94-48.987-31.174-67.988-6.52-7.631-30.298-32.698-74.467-78.5-86.883-90.097-92.05-95.966-101.024-114.74-5.264-11.011-8.012-22.027-8.671-34.76-.666-12.866.712-22.375 5.11-35.262 4.654-13.634 11.34-24.322 22.092-35.317 13.233-13.53 26.217-21.306 45.216-27.079C312.433.997 315.26.665 328 .609c12.722-.056 15.665.26 24 2.574 18.452 5.124 35.03 14.496 49.437 27.951C415.546 44.311 424.984 58.282 474.98 140c35.268 57.646 84.493 139.28 85.804 142.297 2.907 6.687.275 7.553-5.94 1.953-5.603-5.048-126.874-131.692-164.54-171.83-33.2-35.379-39.277-41.192-47.131-45.088-11.796-5.85-26.014-3.776-36.067 5.263-13.877 12.476-14.96 31.824-2.591 46.314 2.481 2.907 38.888 41.13 80.902 84.938 42.015 43.81 78.982 82.803 82.148 86.653 22.513 27.369 37.939 62.936 42.985 99.106 2.02 14.476 1.544 48.204-.86 60.894-9.463 49.978-33.517 90.66-71.83 121.486-12.776 10.28-23.737 16.95-51.36 31.254-12.65 6.55-23.336 12.235-23.746 12.631-.41.397-.752 117.813-.758 260.925-.006 143.112-.12 260.16-.253 260.108-.134-.053-15.205-15.437-33.493-34.186zM178.906 638.85c71.23-36.528 104.55-53.835 109.959-57.114 6.26-3.795 6.135-2.348 6.135-71.234 0-54.931-.185-62.635-1.513-63.144-2.731-1.048-35.293 26.733-59.18 50.49-46.91 46.658-85.148 98.787-116.435 158.736-6.898 13.218-8.077 16.417-6.05 16.417.27 0 30.457-15.368 67.084-34.15z" fill="#d97587"/><path d="M327.16 1101.103L295 1068.147V860.073C295 683.996 294.788 652 293.622 652c-1.315 0-58.635 28.855-194.122 97.72-34.1 17.332-70.276 35.795-80.392 41.029-16.654 8.616-18.344 9.29-17.885 7.133C17.968 719.165 47.642 646.268 91.67 575.69c50.319-80.663 120.337-152.583 201.501-206.976 24.938-16.713 65.921-40.394 67.846-39.204.634.391.983 38.246.983 106.58 0 98.187.123 106.019 1.675 106.614 2.04.783 14.653-5.537 25.791-12.923 10.279-6.816 24.958-20.87 33.138-31.725 11.764-15.613 21.373-38.096 24.78-57.983 2.105-12.28 2.105-33.867 0-46.148-3.447-20.121-12.35-40.743-24.676-57.163-8.154-10.863-17.697-21.089-84.702-90.763-58.451-60.779-67.03-69.824-76.644-80.817-14.504-16.58-22.77-31.534-27.055-48.946-2.527-10.267-2.277-30.305.52-41.614 6.837-27.642 25.603-50.83 51.673-63.847 6.33-3.16 9.797-4.42 24.5-8.904 2.914-.888 9.258-1.352 18-1.316 16.454.069 26.526 2.602 43.5 10.941 18.595 9.135 32.773 21.513 46.99 41.022C430.063 67.025 453.562 104.93 525.807 224 554.698 271.62 562 284.313 562 286.916c0 2.843-5.027-.722-14.524-10.299-16.874-17.017-121.445-126.419-153.078-160.15-33.61-35.84-43.477-45.43-50.561-49.141-4.745-2.486-6.39-2.798-14.837-2.811-11.53-.018-16.395 2.038-24.099 10.183-6.812 7.203-9.28 12.982-9.311 21.802-.038 10.741 3.662 17.694 16.605 31.203 5.689 5.938 40.76 42.522 77.935 81.297s70.242 73.569 73.481 77.32c23.507 27.219 39.321 60.448 45.535 95.68 2.608 14.786 3.498 40.13 1.935 55.102-4.984 47.747-27.514 93.192-61.932 124.923-17.229 15.883-28.92 23.49-64.508 41.975L362.5 615.5l-.5 258.917c-.358 185.438-.81 259.02-1.59 259.28-.598.2-15.56-14.468-33.25-32.594zM127.256 665.611c7.835-4.064 41.245-21.236 74.245-38.16 77.212-39.598 87.475-45.044 90.5-48.03l2.5-2.466v-64.714c0-59.478-.134-64.74-1.659-65.033-.962-.185-7.889 4.88-16.5 12.066-56.396 47.063-101.47 99.65-139.07 162.25-9.957 16.58-27.271 48.53-27.271 50.327 0 2.218 3.134 1.085 17.255-6.24z" fill="#d5667a"/><path d="M327.75 1101.235L295 1068.43V860.215C295 667.803 294.875 652 293.358 652c-.903 0-24.865 11.762-53.25 26.137C144.001 726.81 7.518 796.225 4.126 798.157L.752 800.08l.543-2.29c.298-1.259 1.901-8.142 3.562-15.296C25.594 693.17 67.827 603.746 125.44 527.17c58.414-77.641 139.758-147.339 224.81-192.623l10.75-5.724V434.33c0 58.028.273 106.218.607 107.088.969 2.524 4.331 1.867 12.826-2.507 38.606-19.879 64.975-55.185 73.125-97.911 2.63-13.787 2.443-36.197-.413-49.688-4.269-20.157-12.777-39.485-24.039-54.604-7.25-9.734-18.523-21.83-77.545-83.208-81.359-84.605-87.75-91.517-96.375-104.233-25.64-37.798-21.321-85.87 10.656-118.607C272.428 17.774 289.484 7.686 305 3.949c3.025-.729 6.032-1.72 6.682-2.203C313.516.384 333.856-.305 340 .787c23.245 4.133 44.424 14.935 61.584 31.41 16.972 16.292 23.318 26.092 119.576 184.623 20.812 34.276 37.84 62.558 37.84 62.849s.734 2.075 1.63 3.966c4.183 8.813-3.137 3.391-21.84-16.18-8.96-9.374-40.388-42.224-69.84-73-29.454-30.775-63.722-66.755-76.152-79.955-26.609-28.258-41.921-43.39-46.88-46.331-5.439-3.225-15.396-5.47-20.805-4.69-11.248 1.623-21.977 9.718-26.936 20.325-3.73 7.978-3.764 18.346-.083 26.21 3.182 6.802 2.333 5.882 84.885 91.986 77.4 80.73 81.12 84.68 87.237 92.636 28.46 37.015 43.36 83.533 41.436 129.364-2.802 66.699-35.419 123.734-91.652 160.268-4.675 3.037-19.07 10.997-31.988 17.688-12.919 6.69-24.28 12.882-25.248 13.758-1.67 1.511-1.773 14.805-2.012 259.96l-.252 258.367zM179 639.31c100.466-51.503 109.16-56.12 112.757-59.886l3.258-3.41-.258-64.673c-.188-47.325-.563-64.775-1.397-65.053-.627-.21-6.688 4.165-13.468 9.72-67.106 54.986-121.539 122.037-162.018 199.576-8.062 15.443-9.337 19.186-6.124 17.968.963-.365 31.225-15.774 67.25-34.242z" fill="#d25b70"/><path d="M328.25 1101.735L296 1069.43v-207.28c0-144.403-.322-207.883-1.062-209.266-.998-1.864-5.059.034-66.75 31.202-36.129 18.252-101.338 51.35-144.91 73.55C39.704 779.837 3.63 798 3.11 798s-1.17.563-1.448 1.25c-.299.742-.536.533-.583-.514-.043-.97.346-2.545.866-3.5.52-.955 2.145-7.361 3.612-14.236 8.921-41.82 27.363-93.17 50.28-140 63.062-128.872 161.243-232.003 288.302-302.839 8.051-4.488 15.139-8.161 15.75-8.161.808 0 1.111 28.917 1.111 105.965 0 122.445-1.264 110.345 10.917 104.508 39.28-18.825 66.962-55.043 75.74-99.099 2.63-13.195 2.39-37.577-.501-51.108-4.936-23.094-16.02-45.416-31.168-62.766-6.882-7.882-29.895-32.087-76.534-80.5-82.54-85.678-89.136-93.15-97.437-110.388-5.882-12.215-8.107-21.218-8.74-35.373-.834-18.667 1.89-31.712 9.968-47.74 6.376-12.648 19.1-27.137 31.063-35.367 7.09-4.878 21.771-11.674 29.328-13.575 3.775-.95 7.595-2.108 8.49-2.573C314.88.551 332.166-.194 338.5.847c23.647 3.887 45.132 14.496 62.562 30.893 15.33 14.422 25.998 30.627 96.937 147.26C557.51 276.841 562 284.43 562 287.156c0 1.149-3.132-.192-6.018-2.576-3.82-3.155-117.57-121.818-160.643-167.58-46.501-49.404-51.558-53.48-66.36-53.493-6.49-.006-8.437.444-14.197 3.28-7.387 3.636-13.302 9.575-16.985 17.05-1.855 3.766-2.294 6.298-2.283 13.163.012 7.343.393 9.223 2.797 13.81 3.553 6.779 1.882 4.974 81.665 88.19 82.47 86.018 84.388 88.062 91.415 97.399 55.323 73.507 53.499 175.341-4.41 246.101-7.075 8.646-21.32 22.685-29.981 29.549-13.18 10.445-29.27 19.986-59.5 35.283-7.15 3.618-13.675 7.032-14.5 7.587-1.325.89-1.558 31.28-2 260.065l-.5 259.057zM178.058 639.938c95.683-49.053 110.963-57.112 113.96-60.11 3.782-3.782 3.967-7.187 3.975-73.387.006-46.062-.25-57.411-1.33-58.887-.736-1.006-1.836-1.655-2.445-1.442-3.488 1.222-36.65 30.329-54.557 47.888-29.687 29.11-50.436 53.247-73.067 85-18.205 25.542-36.173 55.164-48.971 80.733-5.388 10.764-6.57 14.267-4.815 14.267.444 0 30.706-15.328 67.25-34.062z" fill="#d0556b"/><path d="M327.586 1100.804L296 1068.608V861.386c0-113.972-.273-207.934-.607-208.804-.334-.87-1.025-1.582-1.535-1.582-.894 0-67.557 33.673-219.358 110.804-39.6 20.12-72.33 37.058-72.735 37.64-.44.633-.74.38-.75-.635-.008-.93.383-1.937.87-2.238.486-.3 1.202-2.69 1.59-5.309C6.147 773.24 20.821 724.29 32.483 694.5 67.59 604.824 119.366 525.056 186 457.987c42.53-42.806 88.461-78.72 139-108.683C338.878 341.076 359.152 330 360.334 330c.366 0 .666 47.645.666 105.878 0 94.212.17 106.018 1.543 107.158 2.258 1.874 19.833-7.124 32.386-16.58 61.94-46.66 73.247-134.136 25.108-194.258-6.766-8.45-23.659-26.376-76.047-80.698-86.024-89.2-92.468-96.457-101.218-114-6.878-13.792-9.78-26.11-9.759-41.434.049-35.49 20.772-68.348 53.487-84.812C292.862 8.053 307.84 3 310.968 3c1.026 0 2.044-.537 2.263-1.194.533-1.598 27.482-1.763 30.867-.188 1.32.614 5.987 2.108 10.37 3.32 24.509 6.775 46.81 23.356 64.754 48.143 8.722 12.048 31.642 48.756 76.438 122.419 58.43 96.083 63.688 104.871 64.13 107.184.244 1.274.84 2.316 1.327 2.316.485 0 .847.788.804 1.75-.048 1.056-.28 1.252-.585.494-.279-.691-.952-.982-1.495-.645s-2.142-.45-3.55-1.744c-4.834-4.445-133.887-139.356-163.924-171.365-34.462-36.726-40.99-42.981-49.047-47-5.016-2.501-6.994-2.908-14.32-2.946-7.31-.038-9.287.343-14.125 2.718-6.351 3.12-13.588 10.313-16.948 16.846-1.551 3.017-2.394 6.74-2.69 11.892-.527 9.135 1.765 16.13 7.592 23.175 2.126 2.57 38.315 40.596 80.42 84.5 42.103 43.904 79.382 83.2 82.84 87.325 31.985 38.152 48.936 91.349 44.93 141-3.996 49.52-24.54 94.009-58.676 127.063-18.255 17.677-29.872 25.551-63.343 42.936-12.925 6.713-24.513 12.845-25.75 13.626l-2.25 1.421v258.477c0 155.373-.364 258.477-.914 258.477-.502 0-15.127-14.488-32.5-32.196zm-150.782-459.99c88.023-45.152 111.172-57.277 114.556-60.002 2.15-1.73 3.09-3.592 3.702-7.316.94-5.735 1.25-123.52.331-125.914-1.035-2.697-3.413-1.79-10.782 4.116C218.314 504.82 162.855 571.496 121.745 647.5c-12.735 23.546-13.92 26.5-10.632 26.5.548 0 30.109-14.934 65.691-33.186z" fill="#ce4b62"/><path d="M327.75 1100.557L296 1068.204V860.07c0-182.235-.183-208.204-1.47-208.698-1.466-.562-58.544 28.01-209.53 104.886-43.175 21.982-79.352 40.418-80.394 40.967-1.774.935-1.852.684-1.232-3.99.364-2.743 2.246-11.456 4.183-19.362C33.185 669.25 88.65 565.17 162.567 483c13.052-14.508 43.472-44.676 57.933-57.45 22.863-20.199 52.818-42.986 79-60.097C318.2 353.23 358.071 330 360.347 330c.354 0 .758 48.031.898 106.736.292 122.05-.945 109.652 10.405 104.34 26.462-12.383 53.634-39.656 65.522-65.766 9.386-20.615 12.303-34.442 12.303-58.31 0-25.853-3.409-40.255-14.79-62.486-9.712-18.97-12.905-22.605-92.663-105.514-54.287-56.432-69.664-72.587-78.525-82.5-14.495-16.216-23.26-31.269-27.66-47.5-3.189-11.766-3.191-33.593-.005-45.5 2.96-11.058 11.053-26.995 18.255-35.948 13.295-16.528 34.218-29.645 53.704-33.67 3.352-.692 5.904-1.566 5.67-1.943-.232-.376 3.21-1.001 7.65-1.388 9.024-.788 23.158.204 22.317 1.565-.3.486.582.884 1.961.884 3.985 0 18.418 4.845 26.745 8.979 17.148 8.511 32.673 22.09 46.332 40.521 8.797 11.871 31.371 48.02 83.057 133C551.678 267.963 560 282.073 560 284.645c0 4.476 6.208 10.695-98.411-98.588-20.301-21.207-49.375-51.832-64.61-68.057-49.123-52.318-51.874-54.508-68.479-54.49-7.812.007-9.672.362-14.086 2.683-6.37 3.35-13.68 10.686-16.645 16.703-1.88 3.816-2.266 6.23-2.254 14.104.013 8.426.328 10.098 2.785 14.786 3.181 6.07-.292 2.344 89.202 95.714 37.429 39.05 70.085 73.25 72.57 76 26.679 29.523 43.368 65.314 49.427 106 1.97 13.23 1.939 40.293-.063 54.648-7.709 55.268-38.303 104.75-83.936 135.757-11.08 7.53-25.12 15.429-45.5 25.601-7.425 3.706-14.737 7.614-16.25 8.684l-2.75 1.946v258.432c0 142.138-.337 258.412-.75 258.387-.412-.025-15.037-14.604-32.5-32.398zM161.5 648.915c61.67-31.553 116.508-59.915 124.116-64.192 3.217-1.809 6.87-4.803 8.116-6.654l2.268-3.365v-62.77c0-34.524-.273-63.482-.607-64.352-1.24-3.23-4.701-1.284-19.195 10.786-59.347 49.424-107.998 107.202-145.622 172.94C120.724 648.525 109 671.17 109 672.986c0 .558.788 1.012 1.75 1.007.963-.004 23.8-11.289 50.75-25.077zM1.079 798.417c.048-1.165.285-1.402.604-.604.289.721.253 1.584-.079 1.916-.332.332-.568-.258-.525-1.312zm560-512c.048-1.165.285-1.402.604-.604.289.721.253 1.584-.079 1.916-.332.332-.568-.258-.525-1.312z" fill="#cb425b"/><path d="M327.73 1100.214L296 1068.428V651h-2.035c-1.923 0-56.482 27.428-219.261 110.23-38.938 19.806-71.04 35.768-71.337 35.47-1.52-1.52 9.152-43.123 17.623-68.7 23.785-71.808 59.687-140.184 105.537-201 49.378-65.496 114.119-124.602 184.973-168.877C329.428 346.92 357.718 331 359.697 331c1.049 0 1.342 20.126 1.548 106.25l.255 106.25 2.158.307c1.187.17 5.912-1.575 10.5-3.877 38.938-19.534 67.143-57.46 74.26-99.856 2.028-12.085 2.052-34.088.05-45.693-4.108-23.8-14.978-47.207-30.343-65.34-6.59-7.778-32.566-35.198-78.165-82.513-84.916-88.111-88.312-91.975-97.574-111.028-6.803-13.994-8.666-22.379-8.666-39 0-15.652 1.62-23.666 7.564-37.413 11.305-26.15 36.416-47.329 64.548-54.44 5.04-1.274 8.925-2.556 8.632-2.85s2.653-.846 6.546-1.23c8.325-.82 23.832.284 21.828 1.554-.945.6-.623.853 1.098.864 4.246.026 17.273 4.074 25.647 7.97 18.037 8.388 33.823 21.762 47.803 40.494 10.75 14.404 43.312 67.044 130.866 211.551 13.182 21.756 15.102 27.576 6.516 19.75-1.962-1.787-24.854-25.525-50.872-52.75s-56.343-58.95-67.388-70.5-30.036-31.575-42.203-44.5c-45.037-47.847-49.104-51.15-63.805-51.812-10.82-.488-17.585 2.03-25.058 9.325-9.576 9.35-13.177 20.97-9.955 32.13 3.2 11.09-3.766 3.238 85.494 96.357 37.168 38.775 71.184 74.351 75.592 79.058 27.976 29.873 44.618 63.305 51.991 104.442 2.165 12.077 2.972 39.39 1.549 52.404-6.68 61.083-38.546 112.843-90.113 146.368-4.675 3.039-19.75 11.386-33.5 18.549l-25 13.023-.252 258.578c-.138 142.218-.598 258.578-1.02 258.578s-15.048-14.304-32.499-31.786zM173.832 642.869c80.917-41.488 111.912-57.595 115.822-60.186 6.661-4.416 6.345-.855 6.345-71.387 0-63.505-.133-66.296-3.161-66.296-.419 0-6.066 4.348-12.55 9.661-50.501 41.388-95.09 90.731-129.53 143.339-19.047 29.097-42.722 72.049-41.486 75.269.365.952.94 1.731 1.279 1.731s28.815-14.459 63.281-32.131zM1.08 798.417c.048-1.165.285-1.402.604-.604.289.721.253 1.584-.079 1.916-.332.332-.568-.258-.525-1.312z" fill="#c93953"/><path d="M328.25 1100.224L297 1068.218V861.674c0-135.382-.345-207.45-1-209.176-.774-2.034-1.46-2.487-3.022-1.991-2.238.71-100.47 50.382-214.87 108.65C37.19 779.997 3.58 796.914 3.415 796.75c-.164-.164.752-5.256 2.035-11.316 16.327-77.086 55.85-165.347 106.586-238.022C166.5 469.399 240.567 400.685 324 350.764 336.193 343.47 358.613 331 359.537 331c.255 0 .463 47.213.463 104.918 0 57.705.273 105.63.607 106.5 2.52 6.565 30.402-9.406 49.532-28.37 49.813-49.385 54.305-127.742 10.457-182.425-6.866-8.563-22.286-24.92-82.603-87.623-61.223-63.645-69.778-72.703-78.449-83.061-18.205-21.748-25.523-40.122-25.537-64.124-.01-17.252 3.075-29.725 11.062-44.715 8.938-16.774 23.304-30.513 41.431-39.622 10.152-5.102 23.157-9.337 29.41-9.578l2.59-.1-2.5-.727C311.921.884 327.625-.26 336.121.606c5.5.56 6.743.935 4.879 1.473-2.396.692-2.372.726.562.821 5.692.186 18.888 4.212 28.172 8.597 18.458 8.717 33.443 21.395 47.493 40.18 8.555 11.437 35.234 54.152 85.459 136.823 57.13 94.037 59.135 97.5 56.466 97.5-.541 0-30.817-31.162-67.28-69.25-87.145-91.027-80.526-84.078-104.542-109.75-28.06-29.996-36.048-37.507-43.666-41.062-14.815-6.912-29.076-3.92-40.503 8.496-5.602 6.087-8.35 12.426-8.91 20.55-.505 7.318 1.714 14.724 6.534 21.812 1.493 2.196 37.408 40.153 79.81 84.349 42.403 44.195 79.66 83.28 82.793 86.855 12.61 14.386 25.967 36.549 33.507 55.6 29.655 74.922 10.459 161.952-47.782 216.628-16.817 15.787-31.084 25.088-66.355 43.253-11.407 5.875-21.082 11.208-21.5 11.85S360.275 732.54 360 874.366l-.5 257.865zm-161.562-453.33c78.502-40.254 118.26-60.875 122.537-63.554 7.716-4.833 7.237-.462 7.592-69.395.175-33.905-.078-63.175-.563-65.044-.505-1.951-1.614-3.54-2.603-3.73-3.507-.675-36.64 27.777-62.66 53.811-47.335 47.357-87.336 102.84-118.464 164.312-4.59 9.062-5.048 11.706-2.03 11.706.758 0 26.044-12.648 56.19-28.106zM1.078 798.417c.049-1.165.286-1.402.605-.604.289.721.253 1.584-.079 1.916-.332.332-.568-.258-.525-1.312z" fill="#c7324d"/><path d="M328.252 1099.5l-31.247-31.822-.253-208.589L296.5 650.5l-2.04-.292c-1.971-.282-58.227 27.914-216.361 108.444C37.729 779.21 4.466 795.8 4.183 795.517c-.283-.283.497-5.128 1.734-10.766 21.26-96.963 75.455-204.843 142.873-284.398 57.034-67.301 124.983-122.468 203.46-165.186l7.75-4.219v213.014l2.504.628c6.466 1.623 32.916-14.924 48.031-30.049 15.899-15.908 26.29-32.795 33.488-54.42 13.143-39.492 7.254-84.164-15.66-118.776-8.067-12.187-17.296-22.226-85.81-93.345-74.81-77.652-82.796-86.298-91.63-99.195-6.776-9.89-11.099-18.949-14.224-29.805-3.178-11.039-3.118-34.126.117-45.5 6.299-22.146 21.005-42.559 39.512-54.842 11.954-7.935 31.62-15.402 41.61-15.8l3.562-.142-4-.66C310.545.908 329.424-.306 337 .802c5.7.834 6.007.981 2.5 1.197-3.645.223-3.467.321 2 1.101 28.193 4.024 55.738 22.151 76.444 50.307 9.458 12.862 93.209 148.737 135.38 219.637 6.423 10.8 7.239 13.8 2.553 9.393-5.93-5.577-133.602-139.034-164.053-171.486C356.868 73.697 352.921 69.958 344 65.644c-5.827-2.819-7.432-3.142-15.5-3.124-11.184.025-16.444 2.287-24.65 10.6-7.698 7.802-10.202 14.409-9.618 25.38.475 8.914 2.922 14.904 9.115 22.317 1.927 2.307 34.257 36.254 71.844 75.439 37.587 39.184 73.03 76.194 78.76 82.244 27.592 29.125 44.684 61.242 52.67 98.967 3.49 16.488 4.454 49.262 1.958 66.533-5.152 35.641-20.228 70.155-42.59 97.5-8.565 10.475-26.334 27.133-37.023 34.71-12.714 9.011-18.287 12.242-45.35 26.29l-23.116 12-.5 258.412-.5 258.411zm-160.32-452.727c67.812-34.767 112.984-58.127 119.71-61.907 9.544-5.363 8.819.337 9.145-71.866.158-34.925.037-64.513-.269-65.75-.989-4-4.972-2.82-13.347 3.96-70.88 57.372-124.32 122.996-168.513 206.935-7.753 14.724-8.554 18.909-3.3 17.241 1.103-.35 26.56-13.226 56.573-28.613zM1.078 798.417c.048-1.165.285-1.402.604-.604.289.721.253 1.584-.079 1.916-.332.332-.568-.258-.525-1.312z" fill="#c62b47"/></svg>`
    },
    {
      name: "Memcached",
      description: "Memory caching system",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 70 70"><defs><linearGradient id="A" x1="255.894" x2="255.894" y1="59.789" gradientUnits="userSpaceOnUse" y2="-452"><stop stop-color="#574c4a" offset="0%"/><stop stop-color="#80716d" offset="100%"/></linearGradient><linearGradient id="B" x1="380.442" x2="191.971" y1="-51.758" y2="-382.305" gradientUnits="userSpaceOnUse"><stop stop-color="#268d83" offset="0%"/><stop stop-color="#2ea19e" offset="100%"/></linearGradient><radialGradient id="C" cx="62.417" cy="142.923" r="9.213" fx="62.417" fy="142.923" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.02,0,0,2.02,92.53,-356.82)"><stop stop-color="#db7c7c" offset="0%"/><stop stop-color="#c83737" offset="100%"/></radialGradient><radialGradient id="D" cx="96.726" cy="142.923" r="9.213" fx="96.726" fy="142.923" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.02,0,0,2.02,92.53,-356.82)"><stop stop-color="#db7c7c" offset="0%"/><stop stop-color="#c83737" offset="100%"/></radialGradient></defs><g transform="matrix(.125052 0 0 .125052 .000001 56.523492)"><path d="M0-106.196v-179.82C0-431.255 20.725-452 165.814-452h180.164c145.084 0 165.8 20.745 165.8 165.983v179.82c0 145.238-20.725 165.983-165.812 165.983H165.812C20.73 59.787 0 39.042 0-106.196z" fill="url(#A)"/><path d="M110.488-355.497C85.34-196.062 98.497-46.8 98.497-46.8h78.63c-7.48-39.802-34.32-221.642-11.993-222.24 11.966 1.9 66.64 154.267 66.64 154.267s12.04-1.5 24.155-1.5 24.16 1.5 24.16 1.5 54.68-152.37 66.64-154.267c22.34.598-4.505 182.438-11.98 222.24h78.633s13.162-149.272-12-308.706h-72.8c-13.857.162-66.58 92.63-72.64 92.63s-58.784-92.457-72.64-92.62z" fill="url(#B)"/><path d="M240.422-65.4c0 10.278-8.333 18.6-18.612 18.6s-18.6-8.333-18.6-18.6 8.333-18.612 18.6-18.612 18.612 8.332 18.612 18.612z" fill="url(#C)"/><path d="M308.66-65.4c0 10.278-8.332 18.6-18.6 18.6s-18.6-8.333-18.6-18.6 8.322-18.612 18.604-18.612 18.604 8.332 18.604 18.612z" fill="url(#D)"/><path d="M397.664-350.226c11.348 76.812 14 150.532 13.802 205.444-.214 56.168-3.432 92.66-3.432 92.66h-66.2l-7.113 5.33h78.64s13.16-149.27-11.992-308.705zm-208.373-1.94c20.66 22.98 56.4 83.966 61.3 83.966-13.1-16.75-45.27-70.192-61.3-83.965zm-29.48 77.802c-22.33.6 4.514 182.44 11.996 222.242H103.16l-4.66 5.33h78.634c-7.444-39.598-34.05-219.824-12.33-222.24-2.02-3.04-3.77-5.137-4.996-5.332zm181.6 0c-11.964 1.9-66.64 154.27-66.64 154.27s-12.04-1.5-24.154-1.5c-7.17 0-13.34.442-17.514.83l-1.3 6s12.04-1.498 24.154-1.498 24.158 1.5 24.158 1.5 54.26-151.372 66.476-154.27c-1.315-3.334-2.94-5.272-5.164-5.332z" opacity=".1"/><path d="M110.5-355.497C85.334-196.063 98.495-46.8 98.495-46.8l4.63-5.205c-2.37-35.218-8.7-162.572 12.696-298.17h72.8c1.54.017 3.6 1.28 6 3.33-4.767-5.302-8.73-8.63-11.33-8.662zm218.077 0c-13.857.164-66.58 92.628-72.637 92.628 2.47 3.16 4.477 5.34 5.33 5.34 6.06 0 58.78-92.464 72.638-92.63h64.248l3.224-5.33zm-158.435 91.795c17.685 26.56 61.642 148.94 61.642 148.94l1.286-5.97c-10.853-29.757-52.205-141.32-62.595-142.97-.113.003-.222-.012-.333 0zm181.925 0c11.862 30.254-10.592 181.1-17.326 216.9l7.14-5.567c9.108-53.42 31.03-210.78 10.195-211.34z" opacity=".3" fill="#fff"/></g></svg>`
    },
  ];

  const sources = [
    {
      title: "Air Quality Data",
      value: "Calitateaer.ro",
      description: "Air Quality Data from Romanian Government"
    },
    {
      title: "Data from ESA",
      value: "Copernicus Sentinel 5",
      description: "Increased atmospheric data coverage"
    },
    {
      title: "Data from ESA",
      value: "Copernicus",
      description: "Increased atmospheric data coverage"
    },
    {
      title: "Earth science data & analysis",
      value: "Google Earth Engine",
      description: "Increased atmospheric data coverage"
    },
  ];

  const people = [
    {
      id: 1,
      name: 'Ioan Croitor',
      faculty: 'FILS',
      image: ioan
    },
    {
      id: 2,
      name: 'Gabriela-Teodora Popescu',
      faculty: 'ACS',
      image: gabriela
    }
  ];

  let mounted = false;
  let scrollY = 0;
  let videoTime = 0;
  let videoDuration = 0;
  let gradientOpacity = 0; // New variable to control gradient opacity

  onMount(() => {
    mounted = true;
  });

  $: {
    if (videoDuration > 0) {
      const totalScrollableHeight = document.body.scrollHeight + 2000 - window.innerHeight;
      videoTime = (scrollY / totalScrollableHeight) * videoDuration;
    }

    // New reactive statement: calculate opacity based on scroll position
    const maxScroll = 100000; // Adjust this value to control how fast the gradient darkens
    gradientOpacity = Math.min(1, scrollY / maxScroll);
  }

  const videoUrl = videobg;
  import { CardHoverEffect } from '$lib/components/ui/CardHoverEffect/index';

	const projects = [
		{
			title: 'Primary Customers',
			description: 'Bucharest City Hall (Primăria Municipiului București) and Sector City Halls for strategic urban planning, environmental policies and local-level monitoring of noise, air, heat, and flooding risk.',
			link: 'https://pmb.ro'
		},
		{
			title: 'Target Market',
			description:
				'Ministry of Environment, Waters and Forests, National Water Administration, National Meteorological Administration.',
			link: 'https://mmediu.ro/en/'
		},
		{
			title: 'Future expansion',
			description:
				'NGOs and civic organizations interested in environmental issues, Other large Romanian cities (Cluj, Timișoara, Iași)',
			link: 'https://e-circular.org/wp-content/uploads/2020/Lista%20ONG-uri%20de%20mediu.pdf'
		},
		{
			title: 'Monetization Model',
			description:
				"B2G Licensing (business-to-government): annual subscriptions for platform access.",
			link: 'https://digital-strategy.ec.europa.eu/ro/faqs/business-government-data-sharing-questions-and-answers'
		},
		{
			title: 'Competitive Advantages',
			description:
				'Unique multi-factor integration (noise + air + heat + flooding), Customized for Bucharest context, Scalable model for national replication.',
			link: '/about'
		},
		{
			title: 'Market Trends and Context',
			description:
				'Public administrations are increasingly adopting digital tools for policy-making, driven by citizen pressure and EU mandates.',
			link: '/home'
		}
	];
</script>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }

  .delay-1 { animation-delay: 0.2s; }
  .delay-2 { animation-delay: 0.4s; }
  .delay-3 { animation-delay: 0.6s; }

  .minimal-card {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Video background styles */
  .video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -10;
  }

  .video-background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Gradient overlay styles */
  .gradient-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -5;
    transition: opacity 0.5s ease-out; /* Optional: adds a smooth transition */
  }
</style>

<svelte:window bind:scrollY />

<div class="video-background">
  <video bind:currentTime={videoTime} bind:duration={videoDuration} muted playsinline preload="metadata">
    <source src={videoUrl} type="video/mp4">
  </video>
</div>

<div class="gradient-overlay" style="background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%); opacity: {gradientOpacity};"></div>

<div class="relative z-10 min-h-[500vh]">
  <div class="fixed top-6 left-6 z-50">
    <a href="/home" class="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 text-gray-700 hover:text-orange-400 hover:bg-white/40 transition-all duration-300 group">
      <span class="text-lg group-hover:scale-110 transition-transform duration-300">←</span>
      <span class="font-medium text-sm">Home</span>
    </a>
  </div>

  <section class="relative px-6 py-20">
    <div class="max-w-6xl mx-auto text-center">
      <div class="{mounted ? 'fade-in' : 'opacity-0'}">
        <h1 class="inline-block text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white leading-[1.5] mb-6">
          About ApriCity
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-8 rounded-full"></div>
        <p class="text-xl md:text-xl text-white max-w-3xl mx-auto leading-">
          Our project leverages advanced satellite imagery and urban sensing technologies to deliver a comprehensive view of city environments. By integrating flooding risk models, heat island detection, noise distribution metrics, and real-time air quality monitoring, the platform transforms complex geospatial data into actionable intelligence. Municipal leaders, infrastructure operators, and enterprise stakeholders can use these insights to anticipate risks, optimize resource allocation, and design evidence-based strategies that enhance resilience, sustainability, and citizen well-being.
        </p>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-4xl mx-auto">
      <div class="minimal-card rounded-2xl p-8 md:p-12 {mounted ? 'slide-up delay-1' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-red-400 mb-6">
          Our Mission
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to empower cities with data-driven intelligence that improves quality of life for all residents. We are committed to building resilient, efficient, and citizen-centered cities that adapt to today’s challenges and prepare for tomorrow’s opportunities.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed">
          By combining satellite imagery, IoT sensing, and advanced analytics, we deliver actionable insights that help urban leaders anticipate risks, optimize infrastructure, and drive sustainable growth.
        </p>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <div class="{mounted ? 'slide-up delay-2' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Backend Technologies
        </h2>
        <p class="text-white text-center mb-12 text-lg">
          Powered by modern, reliable tech stack
        </p>

        <Carousel.Root class="w-full">
          <Carousel.Content class="flex gap-6">
            {#each technologies as tech}
              <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-4">
                  <Card.Root class="minimal-card rounded-xl border-0 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-white/40">
                    <Card.Content class="p-6 text-center">
                      <div class="mb-4 group-hover:scale-110 transition-transform duration-300 grid place-items-center h-12">
                        {@html tech.icon}
                      </div>

                      <h3 class="text-xl font-bold text-gray-900 mb-3">
                        {tech.name}
                      </h3>
                      <p class="text-gray-600 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Item>
            {/each}
          </Carousel.Content>

          <div class="flex justify-center gap-3 mt-8">
            <Carousel.Previous class="w-12 h-12 rounded-full bg-white/40 shadow-md border border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-200 transition-all duration-300 flex items-center justify-center text-xl">
              ←
            </Carousel.Previous>
            <Carousel.Next class="w-12 h-12 rounded-full bg-white/40 shadow-md border border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-200 transition-all duration-300 flex items-center justify-center text-xl">
              →
            </Carousel.Next>
          </div>
        </Carousel.Root>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <div class="{mounted ? 'slide-up delay-2' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Frontend Technologies
        </h2>
        <p class="text-white text-center mb-12 text-lg">
          Design meets Functionality
        </p>

        <Carousel.Root class="w-full">
          <Carousel.Content class="flex gap-6">
            {#each technologies2 as tech2}
              <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-4">
                  <Card.Root class="minimal-card rounded-xl border-0 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-white/40">
                    <Card.Content class="p-6 text-center">
                      <div class="mb-4 group-hover:scale-110 transition-transform duration-300 grid place-items-center h-12">
                        {@html tech2.icon}
                      </div>

                      <h3 class="text-xl font-bold text-gray-900 mb-3">
                        {tech2.name}
                      </h3>
                      <p class="text-gray-600 text-sm leading-relaxed">
                        {tech2.description}
                      </p>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Item>
            {/each}
          </Carousel.Content>

          <div class="flex justify-center gap-3 mt-8">
            <Carousel.Previous class="w-12 h-12 rounded-full bg-white/40 shadow-md border border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-200 transition-all duration-300 flex items-center justify-center text-xl">
              ←
            </Carousel.Previous>
            <Carousel.Next class="w-12 h-12 rounded-full bg-white/40 shadow-md border border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-200 transition-all duration-300 flex items-center justify-center text-xl">
              →
            </Carousel.Next>
          </div>
        </Carousel.Root>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <div class="{mounted ? 'slide-up delay-2' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Database and Infrastructure
        </h2>
        <p class="text-white text-center mb-12 text-lg">
          Solid Data. Strong Infrastructure.
        </p>

        <Carousel.Root class="w-full">
          <Carousel.Content class="flex gap-6">
            {#each technologies3 as tech3}
              <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-4">
                  <Card.Root class="minimal-card rounded-xl border-0 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-white/40">
                    <Card.Content class="p-6 text-center">
                      <div class="mb-4 group-hover:scale-110 transition-transform duration-300 grid place-items-center h-12">
                        {@html tech3.icon}
                      </div>

                      <h3 class="text-xl font-bold text-gray-900 mb-3">
                        {tech3.name}
                      </h3>
                      <p class="text-gray-600 text-sm leading-relaxed">
                        {tech3.description}
                      </p>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Item>
            {/each}
          </Carousel.Content>

          <div class="flex justify-center gap-3 mt-8">
            <Carousel.Previous class="w-12 h-12 rounded-full bg-white/40 shadow-md border border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-200 transition-all duration-300 flex items-center justify-center text-xl">
              ←
            </Carousel.Previous>
            <Carousel.Next class="w-12 h-12 rounded-full bg-white/40 shadow-md border border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-200 transition-all duration-300 flex items-center justify-center text-xl">
              →
            </Carousel.Next>
          </div>
        </Carousel.Root>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <div class="{mounted ? 'slide-up delay-3' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Data Collected From:
        </h2>
        <p class="text-white text-center mb-12 text-lg">
          The sources that power our insights
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each sources as source}
            <div class="minimal-card rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 group">
              <div class="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-red-400 to-red-400 bg-clip-text text-transparent whitespace-normal break-words">
                {source.value}
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {source.title}
              </h3>
              <p class="text-sm text-gray-600">
                {source.description}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <div class="{mounted ? 'slide-up delay-3' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Meet the Team
        </h2>
        <div class="flex justify-center w-full mt-30">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <div class="minimal-card rounded-2xl p-8 md:p-12">
        <h2 class="text-3xl md:text-4xl font-bold text-red-400 mb-6">
          Ready to Transform Your City?
        </h2>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          Visualize the impact of data-driven decisions with ApriCity.
        </p>
        <a href="/login">
          <button class="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold rounded-full hover:from-orange-500 hover:to-red-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </a>
      </div>
    </div>
  </section>

  <section class="px-6 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <div class="minimal-card/40 rounded-2xl p-8 md:p-12">
        <h2 class="text-3xl md:text-4xl font-bold text-red-400 mb-6">
          Our Business Plan
        </h2>
        <p class="text-lg text-white mb-8 leading-relaxed">
          ApriCity is designed to be a sustainable and scalable solution for urban intelligence. Our business model focuses on subscription-based access for municipal governments, infrastructure operators, and enterprises. By offering tiered pricing based on data volume and feature access, we ensure affordability for cities of all sizes. Additionally, we plan to explore partnerships with environmental agencies and smart city initiatives to expand our reach and impact.
        </p>
        
      </div>
    </div>
  </section>
  <div class="mx-auto max-w-5xl px-8">
	<CardHoverEffect items={projects} />
</div>
</div>