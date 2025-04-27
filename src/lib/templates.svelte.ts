import { stop } from './interval.svelte';
import { table } from './cells.svelte';
import { rows, cols } from './config';

type Template = 'x' | 'I' | '+' | 'random';

function setTemplate(type: Template) {
	stop();
	if (type === 'x') {
		const newCells: boolean[][] = [];
		for (let row = 0; row < rows; row++) {
			newCells[row] = [];
			for (let col = 0; col < cols; col++) {
				newCells[row][col] = false;
				if (col == row) newCells[row][col] = true;
				if (col + row == 59) newCells[row][col] = true;
			}
		}
		return (table.cells = newCells);
	}
	if (type === 'I') {
		const newCells: boolean[][] = [];
		for (let row = 0; row < rows; row++) {
			newCells[row] = [];
			for (let col = 0; col < cols; col++) {
				newCells[row][col] = false;
				if (col == 30) newCells[row][col] = true;
			}
		}
		return (table.cells = newCells);
	}
	if (type === '+') {
		const newCells: boolean[][] = [];
		for (let row = 0; row < rows; row++) {
			newCells[row] = [];
			for (let col = 0; col < cols; col++) {
				newCells[row][col] = false;
				if (col == 30) newCells[row][col] = true;
				if (row == 30) newCells[row][col] = true;
			}
		}
		return (table.cells = newCells);
	}
	if (type === 'random') {
		const newCells: boolean[][] = [];
		for (let row = 0; row < rows; row++) {
			newCells[row] = [];
			for (let col = 0; col < cols; col++) {
				newCells[row][col] = Math.random() <= 0.5;
			}
		}
		return (table.cells = newCells);
	}
}

export { setTemplate };
