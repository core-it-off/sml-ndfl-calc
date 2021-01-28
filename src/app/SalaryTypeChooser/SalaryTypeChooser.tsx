import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form'

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

const SalaryTypeChooser = (): JSX.Element => {

    const renderInputContainer = (
        props: WrappedFieldProps,
        id: string,
        content: string | JSX.Element
    ): JSX.Element => (
        <div className="form-check custom-radio">
            <input
                checked={props.input.value === id}
                className="custom-control-input"
                type="radio"
                value={id}
                id={id}
                onChange={(event) => {
                    const val: SALARY_TYPE_KEY = event.currentTarget.id as SALARY_TYPE_KEY;
                    props.input.onChange(val);
                }}
            />
            <label className="custom-control-label d-flex align-items-center" htmlFor={id} />
            {content}
        </div>
    );

    return (
        <div className="salaryTypes d-flex flex-column">
            <Field name="salaryType" component={
                (props: WrappedFieldProps) => renderInputContainer(props, SALARY_TYPES.month, 'Оклад за месяц')
            } />
            <Field name="salaryType" component={
                (props: WrappedFieldProps) => renderInputContainer(props, SALARY_TYPES.mrot, renderMROTLabel())
            } />
            <Field name="salaryType" component={
                (props: WrappedFieldProps) => renderInputContainer(props, SALARY_TYPES.day, 'Оплата за день')
            } />
            <Field name="salaryType" component={
                (props: WrappedFieldProps) => renderInputContainer(props, SALARY_TYPES.hour, 'Оплата за час')
            } />
        </div>
    );
}

export default SalaryTypeChooser;