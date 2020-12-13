import React, {useState} from 'react';
import './Hint.scss';
import {ReactComponent as InfoIcon} from './info.svg';
import {ReactComponent as CloseIcon} from './close.svg';

interface IProps {
    popupText: JSX.Element;
}

const calcPopupVisibleClass = (visible: boolean) => {
    return visible ? 'popupText--visible' : '';
}

const Hint = ({ popupText }: IProps): JSX.Element => {
    const [popupVisible, popupSetVisible] = useState(false);
    const [forcePopupVisible, setForcePopupVisible] = useState(false);
    
    return (
        <div className="hint-icon"
            onMouseOver={() => popupSetVisible(true)} 
            onMouseLeave={() => popupSetVisible(false)}
            onClick={(event) => { 
                event.preventDefault();
                setForcePopupVisible(!forcePopupVisible);
            }}
        >
            {!forcePopupVisible ? <InfoIcon className="svg"/> : <CloseIcon />}
            <span className={`hint-icon__popupText ${calcPopupVisibleClass(popupVisible || forcePopupVisible)}`}>
                {popupText}
            </span>
        </div>
    )
}

export default Hint; 