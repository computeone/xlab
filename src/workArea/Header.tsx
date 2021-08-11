import React from 'react';
import styles from './index.module.scss';

const Header = () => {

	return (
		<div className={styles['header']}>
			<span className={styles['title']}>工作区</span>
		</div>
	);
};

export default Header;
