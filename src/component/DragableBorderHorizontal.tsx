import React, { useState } from 'react';
import DragableBorder from './DragableBorder';
import { calcDragBorder } from './Utils';

interface Props {
	leftRef: HTMLDivElement[],
	rightRef: HTMLDivElement[]
	xLimitLeft: number;
	yLimitRight: number;
	customStyle?: string;
	onChange?: (left: number, right: number) => void;
}

/**
 * 可移动的边框线
 */
const DragableBorderHorizontal = (props: Props) => {

	const [cursor, setCursor] = useState('auto');

	const onHover = () => {
		setCursor('w-resize');
	};

	const onDrag = (x: number) => {

		const dx = x - props.leftRef[0].offsetWidth;
		const [newLeftWidth, newRightWidth] = calcDragBorder({
			x: props.leftRef[0].offsetWidth,
			y: props.rightRef[0].offsetWidth,
			xLimit: props.xLimitLeft,
			yLimit: props.yLimitRight,
			dd: dx
		});

		props.leftRef.forEach((ref: HTMLDivElement) => {
			ref.style.width = newLeftWidth + 'px';
		})

		props.rightRef.forEach((ref: HTMLDivElement) => {
			ref.style.width = newRightWidth + 'px';
		})

		if (props.onChange && newLeftWidth && newRightWidth) {
			props.onChange(newLeftWidth, newRightWidth);
		}
	};

	const onLeave = () => {
		setCursor('auto');
	};

	return (
		<DragableBorder
			cursor={cursor}
			customStyle={props.customStyle ? props.customStyle : ''}
			onHover={onHover}
			onDrag={onDrag}
			onLeave={onLeave}
		/>
	);

};

export default DragableBorderHorizontal;
