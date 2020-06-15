<script>
  import './Globalcss.svelte'

  import stringHash from '@sindresorhus/string-hash'

  import H4 from './components/h4.svelte'
  import InlineCode from './components/inline-code.svelte'
  import InputBox from './components/input-box.svelte'
  import SpinnerButton from './components/spinner-button.svelte'
  import ValueButton from './components/value-button.svelte'
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

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>

      <div class="mb-4">
        <H4>Animation Name</H4>

        <InputBox bind:value={animationName} />
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <H4>Wait Time</H4>

          <div class="flex">
            <SpinnerButton bind:value={waitTime} direction="down" />
            <InputBox bind:value={waitTime} />
            <SpinnerButton bind:value={waitTime} direction="up" />
          </div>

          <div class="text-xs font-bold text-red-300 text-center">Seconds</div>
        </div>

        <div>
          <H4>Animation Duration</H4>

          <div class="flex">
            <SpinnerButton bind:value={duration} direction="down" />
            <InputBox bind:value={duration} />
            <SpinnerButton bind:value={duration} direction="up" />
          </div>

          <div class="text-xs font-bold text-red-300 text-center">Seconds</div>
        </div>
      </div>

      <H4>Timing Function</H4>

      <div class="flex flex-wrap emulated-flex-gap-1 mb-4">
        <ValueButton bind:key={timingFunction} value="linear" />
        <ValueButton bind:key={timingFunction} value="ease" />
        <ValueButton bind:key={timingFunction} value="ease-in" />
        <ValueButton bind:key={timingFunction} value="ease-out" />
        <ValueButton bind:key={timingFunction} value="ease-in-out" />
      </div>

      <H4 class="text-center">Transform Origin</H4>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>

          <div>x</div>

          <div class="flex">
            <SpinnerButton bind:value={transformOriginX} direction="down" />
            <InputBox bind:value={transformOriginX} />
            <SpinnerButton bind:value={transformOriginX} direction="up" />
          </div>

          <div class="text-xs font-bold text-red-300 text-center">%</div>
        </div>

        <div>
          <div>y</div>

          <div class="flex">
            <SpinnerButton bind:value={transformOriginY} direction="down" />
            <InputBox bind:value={transformOriginY} />
            <SpinnerButton bind:value={transformOriginY} direction="up" />
          </div>

          <div class="text-xs font-bold text-red-300 text-center">%</div>
        </div>
      </div>

      <H4>Keyframes</H4>

      <textarea
        bind:value={keyframes}
        class="font-mono text-gray-900 text-sm w-full p-4 shadow-inner border-4
        border-gray-900 bg-gray-100"
        rows="10" />
    </div>

    <div class="relative">
      <div class="absolute right-0 pl-4 pb-4 bg-red-800">
        <div
          class="w-32 p-4 text-center bg-red-900 text-white rounded shadow-md">
          <span class="inline-block font-title text-6xl {animationName}">
            !
          </span>
        </div>
      </div>

      <H4>Calculated Keyframes</H4>

      <div
        class="font-mono bg-red-900 text-white pt-4 pb-4 pl-4 rounded
        overflow-auto text-sm md:text-xs lg:text-sm">
        <div class="font-mono text-xs text-red-400">
          /*
          <br />
          Generated by
          <br />
          waitanimate.wstone.io
          <br />
          */
        </div>
        {@html `<${'style'} class="block whitespace-pre">
.${animationName} {
  animation: ${animationName}_${animationNameHash} ${duration + waitTime}s ${timingFunction} infinite;
  transform-origin: ${transformOriginX}% ${transformOriginY}%;
}

@keyframes ${animationName}_${animationNameHash} {
${outputKeyFrames}
}  
</style>`}
      </div>

    </div>
  </div>

</main>
