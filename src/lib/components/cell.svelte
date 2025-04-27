<script lang="ts">
	let { cell, toggle } = $props();
</script>

<button
	onclick={toggle}
	aria-label="Toggle cell alive"
	class="cell text-center text-xs {cell.isAlive ? 'bg-white' : 'bg-black'}"
></button>
