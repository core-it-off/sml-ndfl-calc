import React, {useState, SyntheticEvent} from 'react';
import './Hint.scss';
import {ReactComponent as InfoIcon} from './info.svg';
import {ReactComponent as CloseIcon} from './close.svg';

interface IProps {
    popupText: JSX.Element;
}

const calcPopupVisibleClass = (visible: boolean): string => {
    return visible ? 'popupText--visible' : '';
}

const Hint = ({ popupText }: IProps): JSX.Element => {

    const [popupVisible, popupSetVisible] = useState(false);
    const [forcePopupVisible, setForcePopupVisible] = useState(false);

    const handleMouseOver = (): void => {
        popupSetVisible(true);
    }

    const handleMouseLeave = (): void => {
        popupSetVisible(false);
    }

    const handleOnClick = (event: SyntheticEvent): void => {
        event.nativeEvent.preventDefault();
        setForcePopupVisible(!forcePopupVisible);
        popupSetVisible(!popupVisible);
    }
    
    return (
        <div className="hint-icon"
            onMouseOver={handleMouseOver} 
            onMouseLeave={handleMouseLeave}
            onClick={handleOnClick}
        >
            {!forcePopupVisible
                ? <InfoIcon className="svg"/>
                : <CloseIcon className={forcePopupVisible ? 'svg--active' : ''} />
            }
            <span className={`hint-icon__popupText ${calcPopupVisibleClass(popupVisible || forcePopupVisible)}`}>
                {popupText}
            </span>
        </div>
    )
}

export default Hint; 