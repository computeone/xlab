import { useEffect, useState } from 'react';

interface Size {
	width: number | undefined;
	height: number | undefined;
}

/**
 * window hooks
 * @returns
 */
const useWindowSize = () => {

	const [windowSize, setWindowSize] = useState<Size>({
		width: undefined,
		height: undefined,
	});

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
};

export { useWindowSize, Size };

