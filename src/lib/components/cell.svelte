<script lang="ts">
	import { border } from '$lib/border.svelte';
	let { alive, toggle } = $props();
</script>

<button
	onclick={toggle}
	aria-label="Toggle cell"
	class="cell {alive ? 'bg-white' : 'bg-black'} {border.enabled ? 'my-border' : ''}"
></button>
