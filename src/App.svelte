<script>
  import './Globalcss.svelte'

  import stringHash from '@sindresorhus/string-hash'

  import InlineCode from './components/inline-code.svelte'
  import { addWaitToKeyframes } from './utils/add-wait-to-keyframes'

  let waitTime = 1
  let animationName = 'animationName'
  let duration = 2
  let timingFunction = 'linear'
  let transformOriginX = 50
  let transformOriginY = 50
  let keyframes =
    '0% { transform: scale(1); }\n12.5% { transform:scale(.9) rotate(-8deg); }\n25% { transform:scale(.9) rotate(-8deg); }\n37.5% { transform:scale(1.3) rotate(8deg); }\n50% { transform:scale(1.3) rotate(-8deg); }\n62.5% { transform:scale(1.3) rotate(8deg); }\n75% { transform:scale(1.3) rotate(-8deg); }\n87.5% { transform:scale(1.3) rotate(8deg); }\n100% { transform:scale(1) rotate(0); }'

  $: outputKeyFrames = addWaitToKeyframes(keyframes, duration, waitTime)

  // This acts as a cache buster on chromium-based browsers, and allows changes
  // in the style block to be honoured. The hash must include all vars that can
  // change the animation style.
  $: animationNameHash = stringHash(
    waitTime +
      animationName +
      duration +
      timingFunction +
      transformOriginX +
      transformOriginY +
      keyframes,
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

  <h4>Wait Time</h4>

  <button type="button" on:click={() => (waitTime = waitTime - 1)}>
    <i class="fa fa-minus" />
  </button>
  <input type="number" bind:value={waitTime} class="text-gray-900" />
  <button type="button" on:click={() => (waitTime = waitTime + 1)}>
    <i class="fa fa-plus" />
  </button>

  <h4>Name</h4>

  <input type="text" bind:value={animationName} class="text-gray-900" />

  <h4>Animation Duration</h4>

  <button type="button" on:click={() => (duration = duration - 1)}>
    <i class="fa fa-minus" />
  </button>
  <input type="number" bind:value={duration} class="text-gray-900" />
  <button type="button" on:click={() => (duration = duration + 1)}>
    <i class="fa fa-plus" />
  </button>

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

  <button on:click={() => (transformOriginX = transformOriginX - 1)}>
    <i class="fa fa-minus" />
  </button>
  <input type="number" bind:value={transformOriginX} class="text-gray-900" />
  <button on:click={() => (transformOriginX = transformOriginX + 1)}>
    <i class="fa fa-plus" />
  </button>

  <div>y</div>

  <button on:click={() => (transformOriginY = transformOriginY - 1)}>
    <i class="fa fa-minus" />
  </button>
  <input type="number" bind:value={transformOriginY} class="text-gray-900" />
  <button on:click={() => (transformOriginY = transformOriginY + 1)}>
    <i class="fa fa-plus" />
  </button>

  <h4>Keyframes</h4>

  <textarea
    bind:value={keyframes}
    class="font-mono text-gray-900 text-sm w-full p-4 shadow-inner border-4
    border-gray-900"
    rows="10" />

  {@html `<${'style'} class="block whitespace-pre font-mono bg-gray-900 text-gray-100 p-4 rounded">.${animationName} {
  animation: ${animationName}_${animationNameHash} ${duration + waitTime}s ${timingFunction} infinite;
  transform-origin: ${transformOriginX}% ${transformOriginY}%;
}

@keyframes ${animationName}_${animationNameHash} {
${outputKeyFrames}
}  
</style>`}
</main>
