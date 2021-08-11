
import * as echarts from 'echarts';
import 'echarts-gl';
import React, { useEffect, useRef, useState } from 'react';
import { Default2DConfig, Default3DConfig, PlotDefaultConfig } from '.';
import { useWindowSize } from '../component';
import { PlotData } from '../editor';
import styles from './index.module.scss';
import { createAreaSeries, createBubbleChartSeries, createHistogramSeries, createPlotSeries, createScatterSeries } from './plot2d/options';
import { createMeshSeries, createPlot3DSeries, createScatter3DSeries, createSurfSeries } from './plot3d/options';

interface Props {
    customStyle?: string;
    data: PlotData;
}

/**
 * 2D绘图
 */
const PlotDraw = (props: Props) => {

    const chartRef = useRef<HTMLDivElement>(null);
    const [chart, setChart] = useState<echarts.ECharts>();
    const [series, setSeries] = useState<any[]>();

    const windowSize = useWindowSize();

    const initChart = () => {
        const instance = echarts.getInstanceByDom(chartRef.current!);
        const chartInstance = instance ? instance : echarts.init(chartRef.current!);
        setChart(chartInstance);
    };

    const renderChart = () => {

        if (chart) {
            chart.clear();
            const options = createOptions(props.data, series);
            chart.setOption(options as any);
            chart.resize();
            console.log(options);
        }
    };

    const createOptions = (data: PlotData, series: any) => {

        const options = {
            ...PlotDefaultConfig(data.config),
            ...data.config.type === '2d' ? Default2DConfig(data.config) : Default3DConfig(data.config),
            series
        };

        return options;
    }

    useEffect(() => {
        initChart();
    }, []);

    useEffect(() => {

        let newSeries = undefined;
        switch (props.data.config.name) {
            case 'plot':
                newSeries = createPlotSeries(props.data);
                break;
            case 'area':
                newSeries = createAreaSeries(props.data);
                break;
            case 'scatter':
                newSeries = createScatterSeries(props.data);
                break;
            case 'bubblechart':
                newSeries = createBubbleChartSeries(props.data);
                break;
            case 'histogram':
                newSeries = createHistogramSeries(props.data);
                break;


            case 'plot3':
                newSeries = createPlot3DSeries(props.data);
                break;
            case 'mesh':
                newSeries = createMeshSeries(props.data);
                break;
            case 'scatter3':
                newSeries = createScatter3DSeries(props.data);
                break;
            case 'surf':
                newSeries = createSurfSeries(props.data);
                break;
        }

        if (props.data.config.hold && newSeries && series) {
            newSeries.unshift(...series!);
        }

        if (props.data.config.subplot && newSeries && series) {
            newSeries.unshift(...series!);
        }

        setSeries(newSeries);

    }, [props.data.data]);

    useEffect(() => {
        initChart();
        renderChart();
    }, [windowSize, props.data, series]);

    const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
    }

    return (
        <div
            className={props.customStyle ? props.customStyle : styles['draw']}
            ref={chartRef}
            onMouseDown={(event) => onMouseDown(event)}
        />
    );
};

export default PlotDraw;
