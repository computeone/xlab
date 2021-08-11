
import React from 'react';
import styles from './index.module.scss';
interface Props {
    titles: string[];
    delete: (id: string) => void;
}

/**
 *  最小化停靠
 * @param props
 * @returns
 */
export const Minimize = (props: Props) => {

    const onClick = (title: string) => {
        props.delete(title);
    };

    return (

        <div className={styles['minimize']}>
            {
                props.titles.map((title: string, index: number) => {
                    return (
                        <div className={styles['title']} key={index} onClick={() => onClick(title)}>
                            {title}
                        </div>
                    )
                })
            }
        </div>
    );
};
