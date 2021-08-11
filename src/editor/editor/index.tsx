import React, { useRef, useState } from 'react';
import { DragableBorderHorizontal, Minimize, PanelHeader } from '../../component';
import { WorkArea } from '../../workArea';
import Editor from './Editor';
import styles from './index.module.scss';
import { MinimizeState, useMinimizeStore } from './state';
import { formatNumber } from './Utils';

interface Props {
}

const EditorView: React.FC<Props> = (props: Props) => {

	const [editorLeftRef, setEditorLeftRef] = useState<HTMLDivElement>();
	const editorRef = useRef<HTMLDivElement>(null);

	const minimizeStore = useMinimizeStore(state => state.mins);
	const deleteMinimize = useMinimizeStore(state => state.delete);

	return (
		<div className={styles['editor-view']}>
			<WorkArea setRef={setEditorLeftRef} />
			{
				minimizeStore.length > 0 && <Minimize titles={minimizeStore.map((item: MinimizeState) => item.id)} delete={deleteMinimize} />
			}
			<DragableBorderHorizontal
				leftRef={[editorLeftRef!]}
				rightRef={[editorRef.current!]}
				xLimitLeft={200}
				yLimitRight={300}
				customStyle={styles['border']}
			/>
			<div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '70%' }} ref={editorRef}>
				<PanelHeader title={['终端']} options={[]} />
				<Editor top={50 + 30 + 20} lineHeight={22} />
			</div>
		</div>
	);
};

export {
	EditorView,
	formatNumber
};

