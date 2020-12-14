import React from 'react';
import { Field } from 'redux-form';

import { moneyFormatter, moneyToNumber } from '../utils';
import './MoneyInput.scss';

const MoneyInput = () => {

    return (
        <div className="d-flex align-items-center">
            <Field
                name="value"
                component="input"
                type="text"
                className="moneyInput form-control"
                id="money"
                format={moneyFormatter}
                normalize={moneyToNumber}
            />
            <div className="moneyInput__currency font-weight-bold">&#8381;</div>
        </div>
    )
}

export default MoneyInput;
