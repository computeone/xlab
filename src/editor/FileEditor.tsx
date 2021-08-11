import MonacoEditor from '@monaco-editor/react';
import React, { useEffect, useRef } from 'react';
import { useDisableEditortore } from './editor/state';
import styles from './index.module.scss';

interface Props {
    setRef?: (ref: HTMLDivElement) => void;
    zIndex: number;
}
/**
 * 文件编辑器
 * @param props
 * @returns
 */
const FileEditor = (props: Props) => {

    const ref = useRef<HTMLDivElement>(null);
    const content = useDisableEditortore(state => state.content);
    const updateContent = useDisableEditortore(state => state.updateContent);

    useEffect(() => {
        if (props.setRef) {
            props.setRef(ref.current!);
        }
    }, []);

    const onChange = (value: string | undefined) => {
        updateContent(value ? value : '');
    }
    return (
        <div className={styles['root']} ref={ref} style={{ zIndex: props.zIndex }}>
            <MonacoEditor
                defaultLanguage="javascript"
                defaultValue={content}
                onChange={onChange}
                options={{
                    minimap: {
                        enabled: true,
                    }
                }}
            />
        </div>

    );
};

export default FileEditor;
