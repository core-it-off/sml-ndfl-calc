import React, { useState } from 'react';
import SalaryTypeChooser from './SalaryTypeChooser';
import Switcher from './Switcher';
import MoneyInput from './MoneyInput';
import SalaryResults from './SalaryResults';
import { SALARY_TYPES, SALARY_TYPE_KEY, toPeriod } from './utils';

import './NDFLCalc.scss';

const NDFLCalc = (): JSX.Element => {
    const [value, setValue] = useState(0);
    const [salaryType, setSalaryType] = useState<SALARY_TYPE_KEY>(SALARY_TYPES.month);
    const [withNDFL, setWithNDFL] = useState(false);

    return (
        <div className="ndfl-calc container d-flex flex-column">
            <small className="ndfl-calc__sumLabel text-muted">Сумма</small>
            <div className="ndfl-calc__middleBlock">
                <SalaryTypeChooser typeChangedHandler={setSalaryType}/>
                <Switcher
                    defaultState={!withNDFL}
                    offStateText="Указать с НДФЛ"
                    onStateText="Без НДФЛ"
                    changeHandler={setWithNDFL}
                    className="ndfl-calc__switcher"
                />
                <div className="ndfl-calc__moneyInput d-flex align-items-center">
                    {
                        salaryType !== SALARY_TYPES.mrot ?
                        <>
                            <MoneyInput
                                value={value}
                                textChangedHandler={setValue}
                            />
                            <span className="ndfl-calc__periodLabel">{toPeriod(salaryType)}</span>
                        </> : null
                    }
                </div>
            </div>
            {
                salaryType === SALARY_TYPES.month ? 
                <SalaryResults
                    value={value}
                    withNDFL={!withNDFL}
                /> : null
            }
        </div>
    )
}

export default NDFLCalc;
