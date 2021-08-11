import React, { useEffect } from 'react';
import { Interpreter } from '../../core/interpreter/Interpreter';
import { EditorView } from '../../editor';
import styles from './index.module.scss';

interface Props {
}

export const interpreter = new Interpreter();

/**
 * 内容窗口
 */
const Content: React.FC<Props> = (props: Props) => {

	useEffect(() => {
	}, []);

	return (
		<div className={styles['root']}>
			<EditorView />
		</div>
	);
};

export default Content;
