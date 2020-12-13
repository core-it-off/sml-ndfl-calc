import React from 'react';
import Hint from './Hint';

const renderInputContainer = (
    id: number,
    content: string | JSX.Element,
    checked?: boolean
) => (
    <div className="form-check">
        <label className="form-check-label d-flex align-items-center">
            <input
                className="form-check-input"
                type="radio"
                name="salaryRadio"
                id={`radio_${id}`}
                value={`radio_${id}`}
                defaultChecked={!!checked}
            />
            {content instanceof String ? <span>{content}</span> : content}
        </label>
    </div>
);

const renderMROTLabel = (): JSX.Element => {
    return (
        <span className="d-flex align-items-center">
            МРОТ
            <Hint popupText={
                <>
                    МРОТ &mdash; это минимальный размер<br/>
                    оплаты труда. Разный для<br/>
                    разных регионов.
                </>
            } /> 
        </span>
    )
};

const SalaryTypeChooser = (): JSX.Element => {
    return (
        <div className="d-flex flex-column">
            {renderInputContainer(1, 'Оклад за месяц', true)}
            {renderInputContainer(2, renderMROTLabel())}
            {renderInputContainer(3, 'Оплата за день')}
            {renderInputContainer(4, 'Оплата за час')}
        </div>
    );
}

export default SalaryTypeChooser;