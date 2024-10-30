<script>
  /**
   * @typedef {Object} Props
   * @property {string} [key]
   * @property {string} [value]
   */

  /** @type {Props} */
  let { key = $bindable(''), value = '' } = $props();

  function handleClick() {
    key = value
  }
</script>

<button
  type="button"
  onclick={handleClick}
  class:bg-black={key !== value}
  class:bg-yellow-400={key === value}
  class:text-white={key !== value}
  class:hover:bg-red-900={key !== value}
  class:text-black={key === value}
  class="flex-grow border-4 border-black h-12 text-xl flex items-center
  justify-center text-center font-bold px-2"
  style="line-height: 0;"
>
  {value}
</button>
