import React from 'react';
import SalaryTypeChooser from './SalaryTypeChooser';
import Switcher from './Switcher';

const NDFLCalc = (): JSX.Element => {
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
        </div>
    )
}

export default NDFLCalc;
