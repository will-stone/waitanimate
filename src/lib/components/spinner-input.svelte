<script>
  import InputBox from './input-box.svelte'
  import SpinnerInputButton from './spinner-input-button.svelte'

  /**
   * @typedef {Object} Props
   * @property {string} [value]
   * @property {boolean} [isPositiveOnly]
   */

  /** @type {Props} */
  let { value = $bindable('0'), isPositiveOnly = false } = $props();
</script>

<div class="flex">
  <SpinnerInputButton bind:value direction="down" {isPositiveOnly} />
  <InputBox bind:value border="y" />
  <SpinnerInputButton bind:value direction="up" {isPositiveOnly} />
</div>
