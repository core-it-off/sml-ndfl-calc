import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import './Switcher.scss';

interface ISwitcherProps {
    state: boolean;
    onStateText: string;
    offStateText: string;
    className: string;
}

const renderSwitcher = ({ input }: WrappedFieldProps): JSX.Element => (
    <div className="custom-control custom-switch">
        <input
            checked={input.value}
            type="checkbox"
            className="custom-control-input"
            id="input"
            onChange={(event) => input.onChange(event.currentTarget.checked)}
        />
        <label className="custom-control-label" htmlFor="input" />
    </div>  
);

const Switcher = ({
    state,
    onStateText,
    offStateText,
    className
}: ISwitcherProps): JSX.Element => (
    <div className={"switcher d-flex align-items-center " + className}>
        <small className={state ? "font-weight-bold" : 'text-muted'}>
            {offStateText}
        </small>
        <Field name="withNDFL" component={renderSwitcher} />
        <small className={!state ? "font-weight-bold" : 'text-muted'}>
            {onStateText}
        </small>
    </div>
);

export default Switcher;
