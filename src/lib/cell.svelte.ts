export default class Cell {
	public isAlive: boolean = $state(false);
	public x: number = $state(-1);
	public y: number = $state(-1);

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	neighbors(cells: Cell[]) {
		console.log('here?');
		const neighbors_cells: Cell[] = [];
		const top_left = cells.find((el: Cell) => el.y == this.y - 1 && el.x == this.x - 1);
		const top_center = cells.find((el: Cell) => el.y == this.y - 1 && el.x == this.x);
		const top_right = cells.find((el: Cell) => el.y == this.y - 1 && el.x == this.x + 1);
		const mid_left = cells.find((el: Cell) => el.y == this.y && el.x == this.x - 1);
		const mid_right = cells.find((el: Cell) => el.y == this.y && el.x == this.x + 1);
		const bottom_left = cells.find((el: Cell) => el.y == this.y + 1 && el.x == this.x - 1);
		const bottom_center = cells.find((el: Cell) => el.y == this.y + 1 && el.x == this.x);
		const bottom_right = cells.find((el: Cell) => el.y == this.y + 1 && el.x == this.x + 1);
		if (top_left) neighbors_cells.push(top_left);
		if (top_center) neighbors_cells.push(top_center);
		if (top_right) neighbors_cells.push(top_right);
		if (mid_left) neighbors_cells.push(mid_left);
		if (mid_right) neighbors_cells.push(mid_right);
		if (bottom_left) neighbors_cells.push(bottom_left);
		if (bottom_center) neighbors_cells.push(bottom_center);
		if (bottom_right) neighbors_cells.push(bottom_right);
		return neighbors_cells;
	}

	toString() {
		return `x: ${this.x}, y: ${this.y}, isAlive: ${this.isAlive}`;
	}

	copy() {
		const new_cell = new Cell(this.x, this.y);
		new_cell.isAlive = this.isAlive;
		return new_cell;
	}
}
