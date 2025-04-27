import { next } from './cells.svelte';

const interval = $state({
	id: 0,
	tick: 100
});

function start() {
	interval.id = setInterval(next, interval.tick);
}

function stop() {
	clearInterval(interval.id);
	interval.id = 0;
}

function setTick(newTick: number) {
	stop();
	interval.tick = newTick;
}

const getIsRunning = () => interval.id != 0;

export { getIsRunning, interval, start, stop, setTick };
