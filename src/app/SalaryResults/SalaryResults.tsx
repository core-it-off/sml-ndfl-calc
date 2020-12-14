import React from 'react';
import './SalaryResults.scss';
import {
    moneyFormatter,
    toHandsSumm,
    calcNDFL,
    companySumm
} from '../utils';

interface IProps {
    value: number;
    withNDFL: boolean;
}

const boldMoney = (moneyValue: string, description: string): JSX.Element => {
    return (
        <span>
            <b>{moneyValue} &#8381;</b> {description}
        </span>
    )
}

const SalaryResults = ({ value, withNDFL }: IProps): JSX.Element => {
    
    const handsCash = (value: number) => {
        const handsVal = toHandsSumm(value, withNDFL);
        return boldMoney(moneyFormatter(handsVal), 'сотрудник будет получать на руки');
    };
    
    const taxSumm = (value: number) => {
        const summ = companySumm(value, withNDFL);
        return boldMoney(moneyFormatter(calcNDFL(summ)), 'НДФЛ, 13% от оклада');
    }
    
    const companyPayment = (value: number) => {
        return boldMoney(moneyFormatter(companySumm(value, withNDFL)), 'за сотрудника в месяц');
    }

    return (
        <div className="salaryResults d-flex flex-column">
            {handsCash(value)}
            {taxSumm(value)}
            {companyPayment(value)}
        </div>
    );
};

export default SalaryResults;
