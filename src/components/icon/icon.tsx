import React from 'react';

import * as commonIcons from './svg/common/index';
import * as fastFoodIcons from './svg/fastfood/index';
import * as tablewareIcons from './svg/tableware/index';

import style from './icon.module.css';

interface Props {
    name?: string;
    size?: string;
}

interface Icons {
    [key: string]: any;
}

interface Sizes {
    [name: string]: number | string;
}

const icons: Icons = {
    ...commonIcons,
    ...fastFoodIcons,
    ...tablewareIcons,
};

const SIZE_RESPONSIVE = 'responsive';
const SIZE_SMALL = 'small';
const SIZE_MEDIUM = 'medium';
const SIZE_LARGE = 'large';

/* Sizes values */
const SIZES: Sizes = {
    [SIZE_SMALL]: 16,
    [SIZE_MEDIUM]: 22,
    [SIZE_LARGE]: 34,
    [SIZE_RESPONSIVE]: '100%'
};

export {SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, SIZE_RESPONSIVE};

export const Icon: React.FC<Props> = ({name = '', size = SIZE_RESPONSIVE}) => {
    const sizeValue = SIZES[size] || size;
    const icon = icons[name];

    if (typeof icon === 'undefined') {
        console.error('Requested icon does not exist');
        return null;
    }

    return (
        <svg width={sizeValue} height={sizeValue} viewBox={icon.viewBox} className={style.container}>
            <use xlinkHref={icon.url} href={icon.url} />
        </svg>
    );
};
