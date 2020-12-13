export const moneyFormatter = (value: number | string): string => {
    return Number(value).toLocaleString('ru');
};

export const moneyToNumber = (value: string = '0'): number => {
    const val = value.replaceAll(/\s/g, '');
    const parsedVal = parseInt(val, 10);
    return isNaN(parsedVal) ? 0 : parsedVal;
};

export const toHandsSumm = (value: number, withNDFL: boolean): number => {
    if (!withNDFL) {
        return value;
    }
    return Math.floor(value * 0.87);
}

export const calcNDFL = (value: number): number => {
    return Math.floor(value * 0.13);
}

export const companySumm = (value: number, withNDFL: boolean): number => {
    if (withNDFL) {
        return value;
    }
    return Math.floor(value / 0.87);
}

export enum SALARY_TYPES {
    month = 'month',
    mrot = 'mrot',
    day = 'day',
    hour = 'hour'
}

export type SALARY_TYPE_KEY = keyof typeof SALARY_TYPES;

export const toPeriod = (type: SALARY_TYPE_KEY): string => {
    switch(type) {
        case SALARY_TYPES.day:
            return 'в день';
        case SALARY_TYPES.hour:
            return 'в час';
        case SALARY_TYPES.month:
        default:
            return '';
    }
}