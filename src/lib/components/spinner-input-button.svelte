<script>
  /**
   * @typedef {Object} Props
   * @property {string} [value]
   * @property {string} [direction]
   * @property {boolean} [isPositiveOnly]
   */

  /** @type {Props} */
  let { value = $bindable('0'), direction = 'up', isPositiveOnly = false } = $props();

  function handleClick() {
    if (direction === 'up') {
      value = String(Number(value) + 1)
      return
    }

    if (isPositiveOnly && Number(value) === 0) {
      return
    }

    value = String(Number(value) - 1)
  }
</script>

<button
  type="button"
  onclick={handleClick}
  class="flex-shrink-0 border-4 border-black w-12 h-12 text-3xl flex
  items-center justify-center font-bold bg-black text-white hover:bg-red-900"
  style="line-height: 0;"
>
  <!-- Fullwidth Hyphen-Minus -->
  {#if direction === 'down'}
    <span>&#65293;</span>
  {/if}
  <!-- Fullwidth Plus Sign -->
  {#if direction === 'up'}
    <span>&#65291;</span>
  {/if}
</button>
