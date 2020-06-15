<script>
  export let border = 'a'
  export let value
</script>

<input
  type="text"
  bind:value
  class="flex-1 border-4 border-black h-12 text-xl leading-none text-center
  font-bold bg-white text-black min-w-0 max-w-full shadow-inner"
  class:border-l-0={border === 'y'}
  class:border-r-0={border === 'y'} />
