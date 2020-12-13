import React from 'react';
import { moneyFormatter, moneyToNumber } from '../utils';
import './MoneyInput.scss';

interface IProps {
    value: number;
    textChangedHandler: Function;
}

const MoneyInput = ({ value, textChangedHandler }: IProps) => {

    return (
        <div className="d-flex align-items-center">
            <input
                type="text"
                className="moneyInput form-control"
                id="money"
                min={0}
                value={moneyFormatter(value)}
                onChange={(event) => {
                    const val = event.currentTarget.value;
                    textChangedHandler(moneyToNumber(val));
                }}
            />
            <div className="moneyInput__currency font-weight-bold">&#8381;</div>
        </div>
    )
}

export default MoneyInput;
