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
            <small className="text-muted">Сумма</small>
            <SalaryTypeChooser typeChangedHandler={setSalaryType}/>
            <Switcher
                defaultState={!withNDFL}
                offStateText="Указать с НДФЛ"
                onStateText="Без НДФЛ"
                changeHandler={setWithNDFL}
            />
            <div className="d-flex align-items-center">
                {
                    salaryType !== SALARY_TYPES.mrot ?
                    <>
                        <MoneyInput
                            value={value}
                            textChangedHandler={setValue}
                        />
                        <span className="period">{toPeriod(salaryType)}</span>
                    </> : null
                }
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
