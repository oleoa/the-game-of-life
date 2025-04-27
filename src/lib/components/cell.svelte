<script lang="ts">
	let { alive, toggle, border } = $props();
</script>

<button
	onclick={toggle}
	aria-label="Toggle cell alive"
	class="cell {alive ? 'bg-white' : 'bg-black'} {border.enabled ? 'my-border' : ''}"
></button>
