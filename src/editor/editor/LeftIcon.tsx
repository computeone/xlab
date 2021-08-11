
import React, { useEffect, useState } from 'react';
import fx from '../../assets/fx.svg';
import { useWindowSize } from '../../component';
import styles from './index.module.scss';

interface Props {
	lineHeight: number;
	lineNumber: number;
	top: number;
}
/**
 * 编辑器header
 */

export const LeftIcon: React.FC<Props> = (props: Props) => {

	const [height, setHeight] = useState<number>(0);
	const windowSize = useWindowSize();

	useEffect(() => {
		setHeight(window.innerHeight - props.top);
	}, [windowSize]);

	const { lineHeight, lineNumber } = props;

	return (
		<div className={styles['left-icon']} >
			<div className={styles['left-icon-label']} style={{ paddingTop: Math.min(height - lineHeight, lineHeight * (lineNumber - 1)) + 'px' }}>
				<img src={fx} />
			</div>
		</div>
	);
};
