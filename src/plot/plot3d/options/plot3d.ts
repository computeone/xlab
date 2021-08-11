import { DATAType } from "../../../core/runtime";
import { PlotData } from "../../../editor";

export const createPlot3DSeries = (data: PlotData) => {

    const dataArray = parseData(data.data);
    const series = parseConfig(dataArray!, data.config);
    return series;
}

const parseConfig = (data: any[], config: any) => {

    const series = [];

    for (let i = 0; i < data.length; i++) {
        series.push({
            type: 'line3D',
            wireframe: {
                show: true
            },
            data: data[i]
        });
    }

    return series;
}

const parseData = (data: DATAType[]) => {
    if (data.length === 3) {
        const data2d = [];
        for (let i = 0; i < data[0].value.length; i++) {
            data2d.push([data[0].value[i], data[1].value[i], data[2].value[i]]);
        }

        return [data2d];
    }
}
