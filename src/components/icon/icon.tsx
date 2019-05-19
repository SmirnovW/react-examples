import React from 'react';

import * as commonIcons from './svg/common/index';
import * as fastFoodIcons from './svg/fastfood/index';
import * as tablewareIcons from './svg/tableware/index';

import style from './icon.module.css';

interface Props {
    name?: string,
}

interface Icons {
    [key: string]: any,
}

const icons: Icons = {
    ...commonIcons,
    ...fastFoodIcons,
    ...tablewareIcons,
};

export const Icon: React.FC<Props> = ({name = ''}) => {
    const icon = icons[name];

    if (typeof icon === 'undefined') {
        console.error('Requested icon does not exist');
        return null;
    }

    return (
        <svg width="100%" height="100%" viewBox={icon.viewBox} className={style.container}>
            <use xlinkHref={icon.url}/>
        </svg>
    );
};
