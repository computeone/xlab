import React, { useEffect } from 'react';
import { useWindowSize } from '../component/useWindowSize';
import Content from '../view/content';
import Footer from '../view/footer';
import Header from '../view/header';

export const App = () => {

	const windowSize = useWindowSize();

	const onTouchMove = (event: TouchEvent) => {
		//event.preventDefault();
	};

	useEffect(() => {
		document.body.addEventListener('touchmove', onTouchMove, { passive: false });
		return () => {
			document.body.removeEventListener('touchmove', onTouchMove);
		};
	});

	return (
		<div style={{ width: '100vw', height: windowSize.height + 'px', display: 'flex', flexDirection: 'column' }} >
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default App;
