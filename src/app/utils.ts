export const moneyFormatter = (value: number | string): string => {
    return Number(value).toLocaleString('ru');
};

export const moneyToNumber = (value: string = '0'): number => {
    const val = value.replaceAll(/\s/g, '');
    const parsedVal = parseInt(val, 10);
    return isNaN(parsedVal) ? 0 : parsedVal;
};
