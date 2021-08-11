import { ARRAY } from "../core/runtime";
import { arrayVistor } from "../core/runtime/Util";
import Plot from "./Plot";

// 线条颜色
export enum Color {
    RED,
    GREEN,
    BLUE,
    CYAN,
    MAGENTA,
    YELLOW,
    BLACK,
    WHITE,
    NONE,
}

// 线段类型
export enum LineStyle {

}

// 线段宽度
export enum LineWidth {

}

// 标记符号
export enum Marker {

}

// 线spec
export interface LineSpec {
    color?: Color;
    lineStyle?: LineStyle;
    lineWidth?: LineWidth;
    marker?: Marker;
}

export enum ColorMap {
    parula,
    turbo,
    hsv,
    hot,
    cool,
    spring,
    summer,
    autumn,
    winter,
    gray,
    bone,
    copper,
    pink,
    jet,
    lines,
    colorcube,
    prism,
    flag,
    white
}

export interface PlotConfig {
    title: string | undefined;
    legend: string[] | undefined;
    xlabel: string | undefined;
    ylabel: string | undefined;
    zlabel: string | undefined;
    colormap?: ARRAY;
    subplot?: number[];
}

export const PlotDefaultConfig = (config: PlotConfig) => {
    return {
        animation: true,
        title: {
            text: config.title ? config.title : '',
        },
        legend: {
            data: config.legend ? config.legend : []
        },
        tooltip: {
            trigger: 'axis',
        },
        //visualMap: {
        // show: false,
        // dimension: 2,
        // min: -1,
        // max: 1,
        // inRange: {
        //     color: config.colormap ? parseColorMap(config.colormap) : []
        // }
        //},

        dataZoom: [{
            show: false,
            type: 'inside',
            filterMode: 'none',
            xAxisIndex: [0],
        }, {
            show: false,
            type: 'inside',
            filterMode: 'none',
            yAxisIndex: [0],
        }],
    }
}

export const Default2DConfig = (config: PlotConfig) => {

    if (config.subplot) {
        return parseSubPlot(config);
    }
    return {
        grid: {
            top: 40,
            left: 50,
            right: 40,
            bottom: 50
        },
        xAxis: {
            name: config.xlabel ? config.xlabel : 'X',
            minorTick: {
                show: true
            },
            minorSplitLine: {
                show: true
            },
        },
        yAxis: {
            name: config.ylabel ? config.ylabel : 'Y',
            minorTick: {
                show: true
            },
            minorSplitLine: {
                show: true
            },
        },
    }
}

export const Default3DConfig = (config: PlotConfig) => {

    return {

        visualMap: {
            show: false,
            dimension: 2,
            min: -1,
            max: 1,
            inRange: {
                color: config.colormap ?
                    parseColorMap(config.colormap) :
                    ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        xAxis3D: {
            type: 'value',
            name: config.xlabel ? config.xlabel : 'X',
        },
        yAxis3D: {
            type: 'value',
            name: config.ylabel ? config.ylabel : 'Y',
        },
        zAxis3D: {
            type: 'value',
            name: config.zlabel ? config.zlabel : 'Z',
        },
        grid3D: {
        }
    }

}

const parseColorMap = (colormap: ARRAY) => {

    const colors = []
    for (let i = 0; i < colormap.dim[0]; i++) {
        const arr = arrayVistor(colormap, [i + 1, ':']);
        colors.push(convertDataToRGB(arr.value));
    }

    return colors;
}

const convertDataToRGB = (value: any[]) => {
    if (value.length == 3) {
        return 'rgb(' + value[0] + ',' + value[1] + ',' + value[2] + ')';
    }

    return 'rgba(' + value[0] + ',' + value[1] + ',' + value[2] + ',' + value[3] + ')';

}

const parseSubPlot = (config: any) => {

    const value = config.subplot;

    const leftGap = 50;
    const topGap = 50;

    const width = 520 - (value[1] + 1) * leftGap;
    const height = 435 - (value[0] + 1) * topGap;

    const grid = [];
    const xAxis = [];
    const yAxis = [];

    for (let i = 0; i < value[0]; i++) {
        for (let j = 0; j < value[1]; j++) {
            grid.push({
                left: leftGap * (j + 1) + width * j / value[1],
                top: topGap * (i + 1) + height * i / value[0],
                width: width / value[1],
                height: height / value[0]
            });
            xAxis.push({
                name: config.xlabel ? config.xlabel : 'X',
                splitLine: { show: false },
                gridIndex: i * value[0] + j
            });
            yAxis.push({
                name: config.ylabel ? config.ylabel : 'Y',
                splitLine: { show: false },
                gridIndex: i * value[0] + j
            })
        }
    }

    return {
        grid,
        xAxis,
        yAxis
    };

}

export {
    Plot,
};

