<script lang="ts">
	import { templates, setTemplate } from '$lib/templates.svelte';
	import { getIsRunning, interval, start, stop, setTick } from '$lib/interval.svelte';
	import { resetCells, next } from '$lib/cells.svelte';
	import { toggleBorder } from '$lib/border.svelte';
</script>

<nav class="fixed top-0 left-0 flex flex-col gap-4 p-4 text-white">
	<div class="flex flex-col gap-2 rounded-lg border-2 p-4">
		<h2 class="text-lg font-bold">Style</h2>
		<button class="cursor-pointer rounded-lg border px-2 py-1" onclick={toggleBorder}>
			Toggle Border
		</button>
	</div>

	<div class="flex flex-col gap-2 rounded-lg border-2 p-4">
		<h2 class="text-lg font-bold">Controls</h2>
		<div class="flex gap-2">
			<button
				class="w-full cursor-pointer rounded-lg border px-2 py-1"
				onclick={next}
				aria-label="Next"
			>
				<i class="fa-solid fa-arrow-right"></i>
			</button>
			{#if !getIsRunning()}
				<button
					class="w-full cursor-pointer rounded-lg border px-2 py-1"
					aria-label="Play"
					onclick={start}
				>
					<i class="fa-solid fa-play"></i>
				</button>
			{/if}
			{#if getIsRunning()}
				<button
					class="w-full cursor-pointer rounded-lg border px-2 py-1"
					aria-label="Pause"
					onclick={stop}
				>
					<i class="fa-solid fa-pause"></i>
				</button>
			{/if}
		</div>
		<input
			type="range"
			name="tick"
			id="tick"
			bind:value={() => interval.tick, (v) => setTick(v)}
			min="10"
			max="1000"
			step="10"
		/>
		<p>
			1 Tick / {interval.tick}ms
		</p>
	</div>

	<!-- Templates -->
	<div class="flex flex-col gap-2 rounded-lg border-2 p-4">
		<h2 class="text-lg font-bold">Templates</h2>
		{#each templates as template}
			<button
				class="cursor-pointer rounded-lg border px-2 py-1"
				onclick={() => setTemplate(template.type)}
				aria-label="X Template"
			>
				{@html template.name}
			</button>
		{/each}
	</div>
</nav>
