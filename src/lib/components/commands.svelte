<script lang="ts">
	let { run, cells, border, template } = $props();
</script>

<nav class="fixed top-0 left-0 flex flex-col gap-4 p-4">
	<!-- TOGGLE BORDER -->
	<div class="flex flex-col gap-2 rounded-lg border-2 p-4">
		<h2 class="text-lg font-bold">Style</h2>
		<button class="cursor-pointer rounded-lg border px-2 py-1" onclick={border.toggleBorder}>
			Border
		</button>
	</div>

	<div class="flex flex-col gap-2 rounded-lg border-2 p-4">
		<h2 class="text-lg font-bold">Controls</h2>
		<div class="flex gap-2">
			<button
				class="w-full cursor-pointer rounded-lg border px-2 py-1"
				onclick={cells.next}
				aria-label="Next"
			>
				<i class="fa-solid fa-arrow-right"></i>
			</button>
			{#if !run.getIsRunning()}
				<button
					class="w-full cursor-pointer rounded-lg border px-2 py-1"
					aria-label="Play"
					onclick={run.start}
				>
					<i class="fa-solid fa-play"></i>
				</button>
			{/if}
			{#if run.getIsRunning()}
				<button
					class="w-full cursor-pointer rounded-lg border px-2 py-1"
					aria-label="Pause"
					onclick={run.stop}
				>
					<i class="fa-solid fa-pause"></i>
				</button>
			{/if}
		</div>
		<input
			type="range"
			name="tick"
			id="tick"
			bind:value={() => run.interval.tick, (v) => run.setTick(v)}
			min="10"
			max="1000"
			step="10"
		/>
		<p>
			1 Tick / {run.interval.tick}ms
		</p>
	</div>

	<!-- Templates -->
	<div class="flex flex-col gap-2 rounded-lg border-2 p-4">
		<h2 class="text-lg font-bold">Templates</h2>
		<button class="cursor-pointer rounded-lg border px-2 py-1" onclick={cells.resetCells}
			>Clear</button
		>
		<button
			class="cursor-pointer rounded-lg border px-2 py-1"
			onclick={() => template.setTemplate('x')}
			aria-label="X Template"
		>
			<i class="fa-solid fa-xmark"></i>
		</button>
		<button
			class="cursor-pointer rounded-lg border px-2 py-1"
			onclick={() => template.setTemplate('I')}
			aria-label="I Template"
		>
			I
		</button>
		<button
			class="cursor-pointer rounded-lg border px-2 py-1"
			onclick={() => template.setTemplate('+')}
			aria-label="+ Template"
		>
			<i class="fa-solid fa-plus"></i>
		</button>
		<button
			class="cursor-pointer rounded-lg border px-2 py-1"
			onclick={() => template.setTemplate('random')}
			aria-label="Random Template"
		>
			<i class="fa-solid fa-random"></i>
		</button>
	</div>
</nav>
