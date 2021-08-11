import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Panel } from '../component';
import { PlotData, usePlotStore } from '../editor';
import { interpreter } from '../view';
import Header from './Header';
import styles from './index.module.scss';
import PlotDraw from './PlotDraw';
interface Props {
    dragable?: boolean;
    zIndex?: number;
    plotData: PlotData;
}

const Plot = (props: Props) => {

    const deletePlot = usePlotStore(state => state.delete);

    const close = (plotData: PlotData) => {
        deletePlot(plotData.id);
        interpreter.deleteFigure(plotData.id);
    }

    if (props.plotData.data.length === 0) {
        return null;
    }

    return (
        <Panel zIndex={props.zIndex} dragable={props.dragable} customStyle={styles['root']} content={
            <>
                <div>
                    <Header />
                    <PlotDraw data={props.plotData} />
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="close"
                        style={{ position: 'absolute', right: '0', top: '0' }}
                        onClick={() => close(props.plotData)}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
            </>
        } />
    );
};

export default Plot;
