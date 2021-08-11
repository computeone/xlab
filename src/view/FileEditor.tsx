import Editor from '@monaco-editor/react';
import React, { useEffect, useRef } from 'react';

interface Props {
}
/**
 * 文件编辑器
 * @param props
 * @returns
 */
const FileEditor = (props: Props) => {

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
    }, []);


    return (
        <div style={{ width: '70%', height: '30%', display: 'flex', flexDirection: 'column', position: 'absolute', zIndex: 6 }} ref={ref}>
            <Editor
                defaultLanguage="julia"
                defaultValue="# some comment"
                options={{
                    minimap: {
                        enabled: false,
                    }
                }}
            />
        </div>

    );
};

export default FileEditor;
