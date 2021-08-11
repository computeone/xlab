import React from 'react';
import styles from './index.module.scss';

interface Props {
    dragable?: boolean;
    zIndex?: number;
}

const Footer:React.FC<Props> = () => {

	return (
		<div className={styles['root']}></div>
	);
};

export default Footer;
