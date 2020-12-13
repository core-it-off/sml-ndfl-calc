import React, {useState} from 'react';
import SalaryTypeChooser from './SalaryTypeChooser';
import Switcher from './Switcher';
import MoneyInput from './MoneyInput';

const NDFLCalc = (): JSX.Element => {
    const [value, setValue] = useState(0);

    return (
        <div className="container d-flex flex-column">
            <small className="text-muted">Сумма</small>
            <SalaryTypeChooser />
            <Switcher
                defaultState={true}
                offStateText="Указать с НДФЛ"
                onStateText="Без НДФЛ"
                changeHandler={(state) => void 0}
            />
            <MoneyInput
                value={value}
                textChangedHandler={setValue}
            />
        </div>
    )
}

export default NDFLCalc;
