<script>
  import InputBox from './input-box.svelte'
  import SpinnerInputButton from './spinner-input-button.svelte'

  export let value
</script>

<div class="flex">
  <SpinnerInputButton bind:value direction="down" />
  <InputBox bind:value border="y" />
  <SpinnerInputButton bind:value direction="up" />
</div>
