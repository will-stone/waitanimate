<script>
  export let key = ''
  export let value = ''

  function handleClick() {
    key = value
  }
</script>

<button
  type="button"
  on:click={handleClick}
  class:bg-gray-900={key !== value}
  class:bg-red-300={key === value}
  class:text-white={key !== value}
  class:text-red-900={key === value}
  class="flex-grow border-4 border-gray-900 h-12 text-xl flex items-center
  justify-center text-center font-bold px-2"
  style="line-height: 0;">
  {value}
</button>
