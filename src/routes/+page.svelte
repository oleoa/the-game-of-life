<script lang="ts">
	import { onMount } from 'svelte';

	import Cell from '$lib/components/cell.svelte';
	import Commands from '$lib/components/commands.svelte';

	import { table, resetCells, next } from '$lib/cells.svelte';
	import { border, toggleBorder } from '$lib/border.svelte';
	import { getIsRunning, interval, start, stop, setTick } from '$lib/interval.svelte';
	import { setTemplate } from '$lib/templates.svelte';

	onMount(() => {
		resetCells();
	});
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<Commands
		run={{
			start,
			stop,
			setTick,
			interval,
			getIsRunning
		}}
		cells={{
			table,
			next,
			resetCells
		}}
		border={{
			border,
			toggleBorder
		}}
		template={{
			setTemplate
		}}
	/>
	<div class="semiborder grid grid-cols-60">
		{#each table.cells as row, r}
			{#each row as cell, c}
				<Cell {border} toggle={() => (table.cells[r][c] = !cell)} alive={cell} />
			{/each}
		{/each}
	</div>
</div>
