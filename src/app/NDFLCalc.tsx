import React from 'react';
import { useSelector } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';

import SalaryTypeChooser from './SalaryTypeChooser';
import Switcher from './Switcher';
import MoneyInput from './MoneyInput';
import SalaryResults from './SalaryResults';
import { SALARY_TYPES, SALARY_TYPE_KEY, toPeriod } from './utils';

import './NDFLCalc.scss';

interface IState {
    value: number;
    salaryType: SALARY_TYPE_KEY;
    withNDFL: boolean;
}

const NDFLCalc = (): JSX.Element => {
    
    const values = useSelector((state): IState => getFormValues('ndflCalc')(state) as IState);

    return (
        <div className="ndfl-calc container d-flex flex-column">
            <small className="ndfl-calc__sumLabel text-muted">Сумма</small>
            <div className="ndfl-calc__middleBlock">
                <SalaryTypeChooser />
                <Switcher
                    state={!values.withNDFL}
                    offStateText="Указать с НДФЛ"
                    onStateText="Без НДФЛ"
                    className="ndfl-calc__switcher"
                />
                <div className="ndfl-calc__moneyInput d-flex align-items-center">
                    {
                        values.salaryType !== SALARY_TYPES.mrot ?
                        <>
                            <MoneyInput />
                            <span className="ndfl-calc__periodLabel">{toPeriod(values.salaryType)}</span>
                        </> : null
                    }
                </div>
            </div>
            {
                values.salaryType === SALARY_TYPES.month ? 
                <SalaryResults
                    value={values.value}
                    withNDFL={!values.withNDFL}
                /> : null
            }
        </div>
    )
}

const initialValues = {
    salaryType: SALARY_TYPES.month,
    withNDFL: true,
    value: 40000
};

const NDFLCalcRedux = reduxForm<IState>({
    form: 'ndflCalc',
    initialValues
})(NDFLCalc);

export default NDFLCalcRedux;
