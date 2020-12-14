import React, { useState } from 'react';
import './Switcher.scss';

interface ISwitcherProps {
    defaultState?: boolean;
    onStateText: string;
    offStateText: string;
    changeHandler: IStateChangedHandler;
    className: string;
}

interface IStateChangedHandler {
    (state: boolean): void; 
}

const renderSwitcher = (state: boolean, stateChangedHandler: IStateChangedHandler) => (
    <div className="custom-control custom-switch">
        <input
            checked={state}
            type="checkbox"
            className="custom-control-input"
            id="input"
            onChange={(event) => stateChangedHandler(event.currentTarget.checked)}
        />
        <label className="custom-control-label" htmlFor="input" />
    </div>  
);

const Switcher = ({
    defaultState,
    onStateText,
    offStateText,
    changeHandler,
    className
}: ISwitcherProps): JSX.Element => {
    const [state, setState] = useState(!!defaultState);

    return (
        <div className={"switcher d-flex align-items-center " + className}>
            <small className={!state ? "font-weight-bold" : 'text-muted'}>
                {offStateText}
            </small>
            {renderSwitcher(
                state, 
                (value) => {
                    setState(value);
                    changeHandler(value);
                })
            }
            <small className={state ? "font-weight-bold" : 'text-muted'}>
                {onStateText}
            </small>
        </div>
    )
}

export default Switcher;
