import { ARRAY, DATAType } from "../../../core/runtime";
import { calcArrayIndex } from "../../../core/runtime/Util";
import { PlotData } from "../../../editor";

export const createScatterSeries = (data: PlotData) => {

	const dataArray = parseData(data.data);
	const series = parseConfig(dataArray!, data.config);
	return series;
}

const parseConfig = (data: any[], config: any) => {

	const series = [];

	for (let i = 0; i < data.length; i++) {
		series.push({
			type: 'scatter',
			showSymbol: false,
			symbolSize: 10,
			data: data[i]
		});
	}

	return series;
}

const parseData = (data: DATAType[]) => {

	const data2dArray = [];

	if (data.length === 1) {

		// 解析向量数据
		if ((data[0] as ARRAY).dim.length === 1 || ((data[0] as ARRAY).dim.length === 2 && (data[0] as ARRAY).dim[0] === 1)) {

			const data2d = [];
			for (let i = 0; i < data[0].value.length; i++) {
				data2d.push([i + 1, data[0].value[i]]);
			}
			data2dArray.push(data2d);

			return data2dArray;
		}

		// 解析矩阵数据
		if ((data[0] as ARRAY).dim.length === 2) {
			const dim = (data[0] as ARRAY).dim;
			const data2dArray = [];
			for (let i = 0; i < dim[1]; i++) {
				const data2d = [];
				for (let j = 0; j < dim[0]; j++) {
					data2d.push([j + 1, (data[0] as ARRAY).value[calcArrayIndex(dim, [j, i])]]);
				}
				data2dArray.push(data2d);
			}

			return data2dArray;
		}
	}


	// 单条线段
	if (data.length === 2) {
		const data2d = [];
		for (let i = 0; i < data[0].value.length; i++) {
			data2d.push([data[0].value[i], data[1].value[i]]);
		}

		data2dArray.push(data2d);

		return data2dArray;
	}

	// 绘制多条线
	if (data.length % 2 === 0) {
		for (let i = 0; i < data.length - 1; i += 2) {
			const data2d = [];
			for (let j = 0; j < data[0].value.length; j++) {
				data2d.push([data[i].value[j], data[i + 1].value[j]]);
			}

			data2dArray.push(data2d);
		}

		return data2dArray;
	}

}
