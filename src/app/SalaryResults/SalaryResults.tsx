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

const SalaryResults = ({ value, withNDFL }: IProps): JSX.Element => {
    
    const handsCash = (value: number) => {
        const handsVal = toHandsSumm(value, withNDFL);
        return (
            <span>
                {moneyFormatter(handsVal)} &#8381; сотрудник будет получать на руки
            </span>
        );
    };
    
    const taxSumm = (value: number) => {
        const summ = companySumm(value, withNDFL);
        return (
            <span>
                {moneyFormatter(calcNDFL(summ))} &#8381; НДФЛ, 13% от оклада
            </span>
        );
    }
    
    const companyPayment = (value: number) => (
        <span>
            {moneyFormatter(companySumm(value, withNDFL))} &#8381; за сотрудника в месяц
        </span>
    )

    return (
        <div className="salaryResults d-flex flex-column">
            {handsCash(value)}
            {taxSumm(value)}
            {companyPayment(value)}
        </div>
    );
};

export default SalaryResults;
