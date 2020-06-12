<script>
  import './Globalcss.svelte'
  import InlineCode from './components/inline-code.svelte'
  import stringHash from '@sindresorhus/string-hash'

  let duration = 2
  let timingFunction = 'linear'
  let transformOriginX = 50
  let transformOriginY = 50
  let animationName = 'animationName'

  // This acts as a cache buster on chromium-based browsers, and allows changes
  // in the style block to be honoured. The hash must include all vars that can
  // change the animation style.
  $: animationNameHash = stringHash(
    duration +
      timingFunction +
      transformOriginX +
      transformOriginY +
      animationName,
  )
</script>

<main class="container py-16">
  <h1 class="font-title text-6xl text-center leading-none mb-16">
    <span class="text-yellow-400">WAIT!</span>
    <span>Animate</span>
  </h1>

  <p class="text-xl text-justify font-semibold mb-16">
    CSS doesn't provide an easy way to pause an animation before it loops around
    again. Yes, there's
    <InlineCode>animation-delay</InlineCode>
    but this simply denotes a delay at the very start of the animation, i.e on
    load.
    <span class="font-title font-normal">WAIT! Animate</span>
    provides an easy way to calculate the keyframe percentages so that you can
    insert a delay between each animation iteration using pure CSS, no
    JavaScript.
  </p>

  <h4 class="section-font">Preview</h4>

  <p>
    <span class="inline-block font-title text-6xl {animationName}">!</span>
  </p>

  <h3>Settings</h3>

  <h4>Animation Duration</h4>

  <button type="button" on:click={() => (duration -= 1)}>
    <i class="fa fa-minus" />
  </button>
  <input type="number" bind:value={duration} class="text-gray-900" />
  <button type="button" on:click={() => (duration += 1)}>
    <i class="fa fa-plus" />
  </button>

  <h4>Name</h4>

  <input type="text" bind:value={animationName} class="text-gray-900" />

  <h4>Timing Function</h4>

  <button type="button" on:click={() => (timingFunction = 'linear')}>
    linear
  </button>
  <button type="button" on:click={() => (timingFunction = 'ease')}>ease</button>
  <button type="button" on:click={() => (timingFunction = 'ease-in')}>
    ease-in
  </button>
  <button type="button" on:click={() => (timingFunction = 'ease-out')}>
    ease-out
  </button>
  <button type="button" on:click={() => (timingFunction = 'ease-in-out')}>
    ease-in-out
  </button>

  <h4>Transform Origin</h4>

  <div>x</div>

  <button on:click={() => (transformOriginX -= 1)}>
    <i class="fa fa-minus" />
  </button>
  <input type="number" bind:value={transformOriginX} class="text-gray-900" />
  <button on:click={() => (transformOriginX += 1)}>
    <i class="fa fa-plus" />
  </button>

  <div>y</div>

  <button on:click={() => (transformOriginY -= 1)}>
    <i class="fa fa-minus" />
  </button>
  <input type="number" bind:value={transformOriginY} class="text-gray-900" />
  <button on:click={() => (transformOriginY += 1)}>
    <i class="fa fa-plus" />
  </button>

  {@html `<${'style'} class="block whitespace-pre font-mono bg-gray-900 text-gray-100 p-4 rounded">.${animationName} {
  animation: ${animationName}_${animationNameHash} ${duration}s ${timingFunction} infinite;
  transform-origin: ${transformOriginX}% ${transformOriginY}%;
}

@keyframes ${animationName}_${animationNameHash} {
  0% {  transform: scale(1) }
  8.33333% {  transform:scale(.9) rotate(-8deg) }
  16.66667% {  transform:scale(.9) rotate(-8deg) }
  25% {  transform:scale(1.3) rotate(8deg) }
  33.33333% {  transform:scale(1.3) rotate(-8deg) }
  41.66667% {  transform:scale(1.3) rotate(8deg) }
  50% {  transform:scale(1.3) rotate(-8deg) }
  58.33333% {  transform:scale(1.3) rotate(8deg) }
  66.66667% {  transform:scale(1) rotate(0) }
  100% {  transform:scale(1) rotate(0) }
}  
</style>`}
</main>
