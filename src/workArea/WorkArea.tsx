import React, { useEffect, useRef, useState } from 'react';
import { DragableBorderHorizontal, PanelHeader } from '../component';
import { MinimizeState, useMinimizeStore } from '../editor';
import styles from './index.module.scss';
import Name from './Name';
import Value from './Value';

interface Props {
	setRef: (ref: HTMLDivElement) => void;
}

/**
 * 工作区
 */
const WorkArea = (props: Props) => {

	const [nameRef, setNameRef] = useState<HTMLDivElement>();
	const [valueRef, setValueRef] = useState<HTMLDivElement>();

	const ref = useRef<HTMLDivElement>(null);

	const minimizeAdd = useMinimizeStore(state => state.add);
	const minimizeStore = useMinimizeStore(state => state.mins);

	useEffect(() => {
		props.setRef(ref.current!);
	});

	const options = [
		{
			title: '停靠',
			handler: () => {
				minimizeAdd({
					"id": "工作区"
				});
			}
		}
	];

	if (minimizeStore.find((item: MinimizeState) => item.id === "工作区")) {
		return null;
	}

	return (
		<div className={styles['root']} ref={ref}>
			<PanelHeader title={['工作区']} options={options} />
			<div className={styles['workarea']}>
				<Name setRef={setNameRef} />
				<DragableBorderHorizontal
					leftRef={[nameRef!]}
					rightRef={[valueRef!]}
					xLimitLeft={50}
					yLimitRight={50}
					customStyle={styles['border']}
				/>
				<Value setRef={setValueRef} />
			</div>
		</div>
	);

};

export default WorkArea;
