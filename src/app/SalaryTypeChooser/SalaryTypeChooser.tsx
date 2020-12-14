import React from 'react';
import Hint from '../Hint';
import { SALARY_TYPES, SALARY_TYPE_KEY } from '../utils';
import './SalaryTypeChooser.scss';

const renderMROTLabel = (): JSX.Element => {
    return (
        <div className="d-flex align-items-center">
            МРОТ
            <Hint popupText={
                <>
                    МРОТ &mdash; это минимальный размер<br/>
                    оплаты труда. Разный для<br/>
                    разных регионов.
                </>
            } /> 
        </div>
    )
};

interface IProps {
    typeChangedHandler: (type: SALARY_TYPE_KEY) => void;
}

const SalaryTypeChooser = ({ typeChangedHandler }: IProps): JSX.Element => {

    const renderInputContainer = (
        id: string,
        content: string | JSX.Element,
        checked?: boolean
    ) => (
        <div className="form-check custom-radio">
            <input
                className="custom-control-input"
                type="radio"
                name="salaryRadio"
                id={id}
                defaultChecked={!!checked}
                onChange={(event) => {
                    const val: SALARY_TYPE_KEY = event.currentTarget.id as SALARY_TYPE_KEY;
                    typeChangedHandler(val);
                }}
            />
            <label className="custom-control-label d-flex align-items-center" htmlFor={id} />
            {content}
        </div>
    );

    return (
        <div className="salaryTypes d-flex flex-column">
            {renderInputContainer(SALARY_TYPES.month, 'Оклад за месяц', true)}
            {renderInputContainer(SALARY_TYPES.mrot, renderMROTLabel())}
            {renderInputContainer(SALARY_TYPES.day, 'Оплата за день')}
            {renderInputContainer(SALARY_TYPES.hour, 'Оплата за час')}
        </div>
    );
}

export default SalaryTypeChooser;