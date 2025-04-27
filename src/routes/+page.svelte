<script lang="ts">
	import { onMount } from 'svelte';

	import Cell from '$lib/components/cell.svelte';
	import Commands from '$lib/components/commands.svelte';

	import { table, resetCells } from '$lib/cells.svelte';
	onMount(() => {
		resetCells(() => false);
	});
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<Commands />
	<div class="semiborder grid grid-cols-60">
		{#each table.cells as row, r}
			{#each row as cell, c}
				<Cell toggle={() => (table.cells[r][c] = !cell)} alive={cell} />
			{/each}
		{/each}
	</div>
</div>
