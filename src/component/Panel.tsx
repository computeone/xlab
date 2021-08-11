import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

interface Props {
	content?: React.ReactNode;
	customStyle?: string;
	dragable?: boolean | undefined;
	zIndex?: number | undefined;
}

/**
 * 可以拖动的面板
 */
export const Panel = (props: Props) => {

	const [mouseDown, setMouseDown] = useState(false);
	const [touchStart, setTouchStart] = useState(false);
	const [startX, setStartX] = useState(0);
	const [startY, setStartY] = useState(0);
	const [touchID, setTouchID] = useState(0);
	const panel = useRef<HTMLDivElement>(null);

	const onTouchStart = (event: TouchEvent) => {
		if (event && event.changedTouches[0]) {
			setStartX(event.changedTouches[0].clientX);
			setStartY(event.changedTouches[0].clientY);
			setTouchStart(true);
			setTouchID(event.changedTouches[0].identifier);
		}

	};

	const onMouseMove = (event: MouseEvent) => {
		if (mouseDown && panel.current && props.dragable !== false) {
			const left = panel.current.offsetLeft;
			const top = panel.current.offsetTop;
			panel.current.style.left = (left + event.movementX).toString() + 'px';
			panel.current.style.top = (top + event.movementY).toString() + 'px';
		}
		if (panel.current?.contains(event.target as any)) {
			event.preventDefault();
		} else {
			event.stopPropagation();
		}
	};

	const onMouseUp = () => {
		setMouseDown(false);
	};

	const onTouchMove = (event: TouchEvent) => {

		let touch = undefined;
		for (let i = 0; i < event.changedTouches.length; i++) {
			if (event.changedTouches[i].identifier === touchID) {
				touch = event.changedTouches[i];
				break;
			}
		}

		if (touch && touchStart && panel.current && props.dragable !== false) {
			const left = panel.current.offsetLeft;
			const top = panel.current.offsetTop;
			const dx = touch.clientX - startX;
			const dy = touch.clientY - startY;
			setStartX(touch.clientX);
			setStartY(touch.clientY);
			panel.current.style.left = (left + dx).toString() + 'px';
			panel.current.style.top = (top + dy).toString() + 'px';
		}
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

	const getDefaultCss = (props: Props) => {
		const css: React.CSSProperties = {
			position: 'absolute',
			zIndex: props.zIndex ? props.zIndex : 'auto'
		};
		return css;
	};

	return (
		<div
			style={getDefaultCss(props)}
			className={props.customStyle ? props.customStyle : styles['default-panel']}
			ref={panel}
			onMouseDown={() => setMouseDown(true)}
			onTouchStart={(e: any) => onTouchStart(e)}
			onTouchEnd={() => setTouchStart(false)}
		>
			{
				props.content ? props.content : ''
			}
		</div>
	);
};
