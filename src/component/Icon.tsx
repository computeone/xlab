
import React from 'react';

interface Props {
    src: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent) => void;
}

const Icon = (props: Props) => {

    return (
        <img src={props.src} style={props.style} onClick={props.onClick ? undefined : props.onClick} />
    );
};

export default Icon;
