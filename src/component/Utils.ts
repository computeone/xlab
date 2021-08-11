interface BorderParam {
	x: number;
	y: number;
	xLimit: number;
	yLimit: number;
	dd: number;
}

export const calcDragBorder = (params: BorderParam) => {

	if (params.x) {

		const x = params.x;
		const y = params.y;

		const newX = x + params.dd;
		const newY = y - params.dd;

		if (newX >= params.xLimit && newY >= params.yLimit) {
			return [newX, newY];
		}

		if (newX < params.xLimit && newX > x) {
			return [newX, newY]
		}

		if (newY < params.yLimit && newY > y) {
			return [newX, newY]
		}

		return [x, y];
	}

	return [undefined, undefined];

};
