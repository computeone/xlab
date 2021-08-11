import React, { useState } from 'react';
import { interpreter } from '..';
import { CustomDialog } from '../../component/Dialog';
import { StandardLibrary } from '../../core/runtime';
import { CommandType } from '../../editor/editor/Command';
import { useEditorCommandStore } from '../../editor/editor/state';
import { useVariableStore } from '../content/state';
import styles from './index.module.scss';

interface Props {
}

const Header: React.FC<Props> = (props: Props) => {

	const [clearWorkArea, setClearWorkArea] = useState(false);
	const [openContact, setOpenContact] = useState(false);
	const [openDocument, setOpenDocument] = useState(false);


	const deleteAllvariables = useVariableStore(state => state.deleteAll);
	const addCmd = useEditorCommandStore(state => state.add);

	const onClick = (index: number) => {

		switch (index) {
			case 1:
				addCmd(CommandType.CLC);
				break;
			case 2:
				setClearWorkArea(true);
				break;
			case 3:
				setOpenDocument(true);
				break;
			case 4:
				setOpenContact(true);
				break;
		}
	};

	const row = (arr: Array<any>, count: number) => {
		const items: Array<any> = [];
		const groupCount = Math.ceil(arr.length / count);
		for (let i = 0; i < groupCount; i++) {
			items.push([]);
			for (let j = 0; j < Math.min(count, arr.length - i * count); j++) {
				items[i].push(arr[i * count + j]);
			}
		}
		return items;
	}

	return (
		<header className={styles['root']}>

			<div className={styles['menu']}>
				<div
					className={styles['menu-item']} onClick={() => onClick(1)}
				>
					清除命令行
				</div>
				<div
					className={styles['menu-item']} onClick={() => onClick(2)}
				>
					清除工作区
				</div>
				<div className={styles['menu-item']} onClick={() => onClick(3)}>
					文档
				</div>
				<div className={styles['menu-item']} onClick={() => onClick(4)}>
					反馈
				</div>
			</div>
			{
				openDocument &&
				<CustomDialog
					setOpen={setOpenDocument}
					title={'请参考matlab文档!'}
					content={
						<>
							<div style={{ marginBottom: '5px' }}>
								<a href="https://ww2.mathworks.cn/help/matlab/index.html" target="_blank">
									具体语法Matlab文档中心
								</a>
							</div>
							<div>支持以下函数:</div>
							{
								row(Object.keys(StandardLibrary), 5).map((arr: Array<string>, index: number) => {
									return (
										<div style={{ display: 'flex' }} key={index}>
											{
												arr.map((item: string, i: number) => {
													return <div style={{ width: '90px' }} key={i}>{item}</div>
												})
											}
										</div>
									)
								})
							}
						</>
					}
				/>
			}
			{
				openContact &&
				<CustomDialog
					title={'通过发送邮箱或者微信联系!'}
					setOpen={setOpenContact}
					content={
						<div>邮箱:1216936151@qq.com&nbsp;&nbsp;
							微信：15802842804
						</div>
					}
				/>
			}

			{
				clearWorkArea &&
				<CustomDialog
					setOpen={setClearWorkArea}
					title={''}
					isVisibleCancle={true}
					content={
						<div>将删除工作区的所有变量.</div>
					}
					confirmCallBack={() => {
						deleteAllvariables();
						interpreter.clearAll();
					}}
				/>
			}
		</header >
	);

};

export default Header;
