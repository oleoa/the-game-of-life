<script lang="ts">
	import { onMount } from 'svelte';
	import Cell from '$lib/components/cell.svelte';
	import CellClass from '$lib/cell.svelte';

	let cols = 100;
	let rows = 60;

	let cells = $state<CellClass[]>([]);

	onMount(() => {
		init();
	});

	function next() {
		let next_cells: CellClass[] = [];
		cells.forEach((cell: CellClass) => {
			let new_cell: CellClass = cell.copy();
			let neighbors = cell.neighbors(cells);
			let alive_neighbors = neighbors.filter((el: any) => el && el.isAlive).length;
			if (new_cell.isAlive && alive_neighbors < 2) new_cell.isAlive = false;
			if (new_cell.isAlive && (alive_neighbors == 2 || alive_neighbors == 3))
				new_cell.isAlive = true;
			if (new_cell.isAlive && alive_neighbors > 3) new_cell.isAlive = false;
			if (!new_cell.isAlive && alive_neighbors == 3) new_cell.isAlive = true;
			next_cells.push(new_cell);
		});
		cells = next_cells;
	}

	function clear() {
		init();
	}

	function init() {
		const newCells: CellClass[] = [];
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				const new_cell = new CellClass(col, row);
				newCells.push(new_cell);
			}
		}
		cells = newCells;
	}

	let interval = $state(0);
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<div class="flex gap-2 p-2">
		<button class="cursor-pointer rounded-lg border px-2 py-1" onclick={next}>Next</button>
		<button class="cursor-pointer rounded-lg border px-2 py-1" onclick={clear}>Clear</button>
		{#if !interval}
			<button
				class="cursor-pointer rounded-lg border px-2 py-1"
				onclick={() => {
					interval = setInterval(next, 100);
				}}>Play</button
			>
		{/if}
		{#if interval}
			<button
				class="cursor-pointer rounded-lg border px-2 py-1"
				onclick={() => {
					clearInterval(interval);
					interval = 0;
				}}>Stop</button
			>
		{/if}
	</div>
	<div class="semiborder grid grid-cols-100">
		{#each cells as cell, i}
			<Cell
				toggle={() => {
					cells[i].isAlive = !cells[i].isAlive;
					cells = [...cells];
				}}
				{cell}
			/>
		{/each}
	</div>
</div>
