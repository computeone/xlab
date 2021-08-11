import React, { useEffect, useRef, useState } from 'react';

interface Props {
	onHover: () => void;
	onDrag: (dx: number, dy: number) => void;
	onLeave: () => void;
	customStyle?: string;
	cursor: string;
	setRef?: (ref: HTMLDivElement) => void;
}

/**
 * 可左右拖动的边框
 */
const DragableBorder = (props: Props) => {

	const [mouseDown, setMouseDown] = useState(false);
	const [touchStart, setTouchStart] = useState(false);
	const [startX, setStartX] = useState(0);
	const [startY, setStartY] = useState(0);
	const [touchID, setTouchID] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	const onMouseDown = () => {
		setMouseDown(true);
		props.onHover();
	};

	const onMouseUp = () => {
		setMouseDown(false);
		props.onLeave();
	};

	const onMouseOver = () => {
		props.onHover();
	};

	const onMouseLeave = () => {
		props.onLeave();
	};

	const onMouseMove = (event: any) => {
		if (mouseDown) {
			props.onDrag(event.x, event.y);
		}
		//event.preventDefault();
	};

	const onTouchStart = (event: any) => {
		if (event && event.changedTouches[0]) {
			setStartX(event.changedTouches[0].clientX);
			setStartY(event.changedTouches[0].clientY);
			setTouchStart(true);
			setTouchID(event.changedTouches[0].identifier);
			props.onHover();
		}

	};

	const onTouchMove = (event: TouchEvent) => {

		let touch = undefined;
		for (let i = 0; i < event.changedTouches.length; i++) {
			if (event.changedTouches[i].identifier === touchID) {
				touch = event.changedTouches[i];
				break;
			}
		}
		if (touch && touchStart) {
			const dx = touch.clientX - startX;
			const dy = touch.clientY - startY;
			setStartX(touch.clientX);
			setStartY(touch.clientY);
			props.onHover();
			props.onDrag(dx, dy);
		}
	};

	const onTouchEnd = () => {
		setTouchStart(false);
		props.onLeave();
	};

	useEffect(() => {
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('touchmove', onTouchMove);
		document.addEventListener('mouseup', onMouseUp);

		return () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('touchmove', onTouchMove);
			document.removeEventListener('mouseup', onMouseUp);
		};
	}, [onMouseMove, onTouchMove]);

	useEffect(() => {
		if (props.setRef) {
			props.setRef(ref.current!);
		}
	}, []);

	return (
		<div className={props.customStyle ? props.customStyle : ''} ref={ref}
			style={{ cursor: props.cursor }}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd} >
		</div >
	);

};

export default DragableBorder;
