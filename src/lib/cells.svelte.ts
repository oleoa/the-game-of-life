import { rows, cols } from './config';

const table = $state<{ cells: boolean[][] }>({
	cells: []
});

function countNeighbors(row: number, col: number) {
	let alive_neighbors = 0;

	const top_left = table.cells[row - 1]?.[col - 1] ?? false;
	const top_center = table.cells[row - 1]?.[col] ?? false;
	const top_right = table.cells[row - 1]?.[col + 1] ?? false;
	const center_left = table.cells[row]?.[col - 1] ?? false;
	const center_right = table.cells[row][col + 1] ?? false;
	const bottom_left = table.cells[row + 1]?.[col - 1] ?? false;
	const bottom_center = table.cells[row + 1]?.[col] ?? false;
	const bottom_right = table.cells[row + 1]?.[col + 1] ?? false;

	if (top_left) alive_neighbors++;
	if (top_center) alive_neighbors++;
	if (top_right) alive_neighbors++;
	if (center_left) alive_neighbors++;
	if (center_right) alive_neighbors++;
	if (bottom_left) alive_neighbors++;
	if (bottom_center) alive_neighbors++;
	if (bottom_right) alive_neighbors++;

	return alive_neighbors;
}

function resetCells(template: (col: number, row: number) => boolean = () => false) {
	const newCells: boolean[][] = [];
	for (let row = 0; row < rows; row++) {
		newCells[row] = [];
		for (let col = 0; col < cols; col++) {
			newCells[row][col] = template(row, col);
		}
	}
	table.cells = newCells;
}

function next() {
	const next_cells: boolean[][] = [];
	table.cells.forEach((rows: boolean[], row: number) => {
		next_cells[row] = [];
		rows.forEach((cell: boolean, col: number) => {
			let new_cell: boolean = cell;
			const alive_neighbors = countNeighbors(row, col);
			if (new_cell && alive_neighbors < 2) new_cell = false;
			if (new_cell && (alive_neighbors == 2 || alive_neighbors == 3)) new_cell = true;
			if (new_cell && alive_neighbors > 3) new_cell = false;
			if (!new_cell && alive_neighbors == 3) new_cell = true;
			next_cells[row][col] = new_cell;
		});
	});
	table.cells = next_cells;
}

export { table, countNeighbors, resetCells, next };
