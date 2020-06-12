<script>
  import "./Globalcss.svelte";
  import InlineCode from "./components/inline-code.svelte";
</script>

<main class="container py-16">
  <h1 class="font-title text-6xl text-center leading-none mb-16">
    <span class="text-yellow-400">WAIT!</span>
    <span>Animate</span>
  </h1>

  <p class="text-xl text-justify font-semibold">
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
</main>
