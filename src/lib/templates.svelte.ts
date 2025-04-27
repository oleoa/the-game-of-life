import { stop } from './interval.svelte';
import { resetCells } from './cells.svelte';

const templates = [
	{
		name: 'Clear',
		type: 'clear'
	},
	{
		name: '<i class="fa-solid fa-xmark"></i>',
		type: 'x'
	},
	{
		name: 'I',
		type: 'I'
	},
	{
		name: '<i class="fa-solid fa-plus"></i>',
		type: '+'
	},
	{
		name: '<i class="fa-solid fa-random"></i>',
		type: 'random'
	},
	{
		name: 'Glider',
		type: 'glider-gun'
	}
];

function setTemplate(type: string) {
	stop();
	if (type === 'clear') resetCells(() => false);
	if (type === 'x') resetCells((row: number, col: number) => col == row || col + row == 59);
	if (type === 'I') resetCells((row: number, col: number) => col == 30);
	if (type === '+') resetCells((row: number, col: number) => col == 29 || row == 29);
	if (type === 'random') resetCells(() => Math.random() <= 0.5);
	if (type === 'glider-gun')
		resetCells((row: number, col: number) => {
			if (row == 5 && col == 1) return true;
			if (row == 5 && col == 2) return true;
			if (row == 6 && col == 1) return true;
			if (row == 6 && col == 2) return true;
			if (row == 3 && col == 13) return true;
			if (row == 3 && col == 14) return true;
			if (row == 4 && col == 12) return true;
			if (row == 4 && col == 16) return true;
			if (row == 5 && col == 11) return true;
			if (row == 5 && col == 17) return true;
			if (row == 6 && col == 11) return true;
			if (row == 6 && col == 15) return true;
			if (row == 6 && col == 17) return true;
			if (row == 6 && col == 18) return true;
			if (row == 7 && col == 11) return true;
			if (row == 7 && col == 17) return true;
			if (row == 8 && col == 12) return true;
			if (row == 8 && col == 16) return true;
			if (row == 9 && col == 13) return true;
			if (row == 9 && col == 14) return true;
			if (row == 1 && col == 25) return true;
			if (row == 2 && col == 23) return true;
			if (row == 2 && col == 25) return true;
			if (row == 3 && col == 21) return true;
			if (row == 3 && col == 22) return true;
			if (row == 4 && col == 21) return true;
			if (row == 4 && col == 22) return true;
			if (row == 5 && col == 21) return true;
			if (row == 5 && col == 22) return true;
			if (row == 6 && col == 23) return true;
			if (row == 6 && col == 25) return true;
			if (row == 7 && col == 25) return true;
			if (row == 3 && col == 35) return true;
			if (row == 3 && col == 36) return true;
			if (row == 4 && col == 35) return true;
			if (row == 4 && col == 36) return true;
			return false;
		});
}

export { setTemplate, templates };
