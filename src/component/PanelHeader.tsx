
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState } from 'react';
import styles from './index.module.scss';

interface Props {
	title: string[];
	handler?: (title: string) => void;
	children?: React.ReactNode;
	options?: Option[];
}

export interface Option {
	title: string;
	handler?: () => void;
}

interface Position {
	x: number;
	y: number;
}

/**
 *  通用面板头
 * @param props
 * @returns
 */
export const PanelHeader = (props: Props) => {

	const [postion, setPostion] = useState<Position>();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setPostion({
			x: event.clientX,
			y: event.clientY + 12,
		});
	};

	const handleClose = () => {
		setPostion(undefined);
	};

	const onClick = (title: string) => {
		if (props.handler) {
			props.handler(title);
		}
	}

	const onOptionClick = (handler?: () => void) => {
		if (handler) {
			handler();
		}
		setPostion(undefined);
	}

	return (

		<div className={styles['panel-header']}>
			{
				props.title.map((title: string, index: number) => {
					return <div className={styles['panel-header-title']} key={index} onClick={() => onClick(title)}>{title}</div>
				})
			}
			{
				props.options && props.options.length > 0 &&
				<>
					<IconButton
						aria-label="more"
						aria-controls="long-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						<MoreVertIcon />
					</IconButton>
					<Menu
						id="long-menu"
						keepMounted
						open={postion !== undefined}
						onClose={handleClose}
						anchorReference={'anchorPosition'}
						anchorPosition={
							postion ? { top: postion.y, left: postion.x } : undefined
						}
					>
						{props.options && props.options.map((option) => (
							<MenuItem key={option.title} onClick={() => onOptionClick(option.handler)}>
								{option.title}
							</MenuItem>
						))}
					</Menu>
				</>
			}

		</div >
	);
};
