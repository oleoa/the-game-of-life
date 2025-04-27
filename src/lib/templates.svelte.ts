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
	if (type === 'glider-gun') {
		const newCells: boolean[][] = [];
		for (let row = 0; row < rows; row++) {
			newCells[row] = [];
			for (let col = 0; col < cols; col++) {
				newCells[row][col] = false;

				if (row == 5 && col == 1) newCells[row][col] = true;
				if (row == 5 && col == 2) newCells[row][col] = true;
				if (row == 6 && col == 1) newCells[row][col] = true;
				if (row == 6 && col == 2) newCells[row][col] = true;

				if (row == 3 && col == 13) newCells[row][col] = true;
				if (row == 3 && col == 14) newCells[row][col] = true;
				if (row == 4 && col == 12) newCells[row][col] = true;
				if (row == 4 && col == 16) newCells[row][col] = true;
				if (row == 5 && col == 11) newCells[row][col] = true;
				if (row == 5 && col == 17) newCells[row][col] = true;
				if (row == 6 && col == 11) newCells[row][col] = true;
				if (row == 6 && col == 15) newCells[row][col] = true;
				if (row == 6 && col == 17) newCells[row][col] = true;
				if (row == 6 && col == 18) newCells[row][col] = true;
				if (row == 7 && col == 11) newCells[row][col] = true;
				if (row == 7 && col == 17) newCells[row][col] = true;
				if (row == 8 && col == 12) newCells[row][col] = true;
				if (row == 8 && col == 16) newCells[row][col] = true;
				if (row == 9 && col == 13) newCells[row][col] = true;
				if (row == 9 && col == 14) newCells[row][col] = true;

				if (row == 1 && col == 25) newCells[row][col] = true;
				if (row == 2 && col == 23) newCells[row][col] = true;
				if (row == 2 && col == 25) newCells[row][col] = true;
				if (row == 3 && col == 21) newCells[row][col] = true;
				if (row == 3 && col == 22) newCells[row][col] = true;
				if (row == 4 && col == 21) newCells[row][col] = true;
				if (row == 4 && col == 22) newCells[row][col] = true;
				if (row == 5 && col == 21) newCells[row][col] = true;
				if (row == 5 && col == 22) newCells[row][col] = true;
				if (row == 6 && col == 23) newCells[row][col] = true;
				if (row == 6 && col == 25) newCells[row][col] = true;
				if (row == 7 && col == 25) newCells[row][col] = true;

				if (row == 3 && col == 35) newCells[row][col] = true;
				if (row == 3 && col == 36) newCells[row][col] = true;
				if (row == 4 && col == 35) newCells[row][col] = true;
				if (row == 4 && col == 36) newCells[row][col] = true;
			}
		}
		return (table.cells = newCells);
	}
}

export { setTemplate };
