<script>
	import InputBox from './input-box.svelte';
	import SpinnerInputButton from './spinner-input-button.svelte';

	export let value = '0';
	export let isPositiveOnly = false;
</script>

<div class="flex">
	<SpinnerInputButton bind:value direction="down" {isPositiveOnly} />
	<InputBox bind:value border="y" />
	<SpinnerInputButton bind:value direction="up" {isPositiveOnly} />
</div>
