import React, { useEffect, useRef } from 'react';
import { Variable } from '../core/interpreter/Interpreter';
import { DATAType, Type } from '../core/runtime';
import { calcDim } from '../core/runtime/Util';
import { formatNumber } from '../editor/editor';
import { interpreter, useVariableStore } from '../view';
import styles from './index.module.scss';

interface Props {
	setRef: (ref: HTMLDivElement) => void;
}

const Value = (props: Props) => {

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		props.setRef(ref.current!);
	}, [ref]);

	const variables = useVariableStore(state => state.variables);

	const renderArray = (variable: Variable, index: number) => {
		// 多维数组或者元素数量超过十个
		if (variable.value.dim.length > 2 || calcDim(variable.value.dim) > 10) {
			return (
				<div key={index} style={{ fontStyle: 'italic' }}>
					{
						variable.value.dim.map((item: number, index: number) => {
							return (
								<span key={index}>{item + ((index !== variable.value.dim.length - 1) ? 'x' : '')}</span>
							)
						})
					}
				</div>
			)
		}
		let value = '[';
		const dim = variable.value.dim;
		variable.value.value.forEach((item: DATAType, index: number, array: any) => {
			const num = formatNumber(item, 4);
			if (dim.length === 2 && (index + 1) % dim[1] === 0) {
				value += num + ((array.length - 1) !== index ? ';' : '');
			} else {
				value += num + ((array.length - 1) !== index ? ',' : '');
			}
		})

		value += ']';
		return (
			<div
				key={index}
			>
				{value}
			</div>
		);
	}

	return (
		<div className={styles['value']} ref={ref} style={{ width: '100px' }}>
			<div className={styles['title']}>值</div>
			<div className={styles['content']}>
				{
					variables.map((variable, index) => {

						if (interpreter.getInnerConstant().findIndex((item: string) => variable.name === item) !== -1) {
							return null;
						}

						if (variable.value.type === Type.ARRAY) {
							return renderArray(variable, index);
						}
						return (
							<div
								key={index}
								className={styles['unselected']}
							>
								{variable.value.type === Type.COMPLEX ? variable.value.value[0] + '+' + variable.value.value[1] + 'i' : variable.value.value}
							</div>);
					})
				}
			</div>
		</div >
	);
};

export default Value;
