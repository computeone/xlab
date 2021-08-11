import React, { useEffect, useRef } from 'react';
import table from '../assets/table.svg';
import Icon from '../component/Icon';
import { Variable } from '../core/interpreter/Interpreter';
import { interpreter, useVariableStore } from '../view';
import styles from './index.module.scss';

interface Props {
	setRef: (ref: HTMLDivElement) => void;
}

const Name = (props: Props) => {

	const ref = useRef<HTMLDivElement>(null);
	const variables = useVariableStore(state => state.variables);

	useEffect(() => {
		props.setRef(ref.current!);
	}, []);

	return (
		<div className={styles['name']} ref={ref}>
			<div className={styles['title']} >名称</div>
			<div className={styles['content']}>
				{
					variables.map((variable: Variable, index) => {
						if (interpreter.getInnerConstant().findIndex((item: string) => variable.name === item) !== -1) {
							return null;
						}
						return (
							<div className={styles['unselected']} key={index}>
								<Icon src={table} />
								<div style={{ paddingLeft: '3px' }}>{variable.name}</div>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};

export default Name;
