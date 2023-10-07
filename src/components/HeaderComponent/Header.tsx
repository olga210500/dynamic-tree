import React, { useState } from 'react';
import '../HeaderComponent/Header.scss'
interface HeaderProps {
    onScale: (data: number) => void;
    onCenter: () => void;
}



const Header: React.FC<HeaderProps> = ({ onScale, onCenter }) => {
    const [scale, setScale] = useState(1);

    const centerCategories = () => {
        onCenter()
    };

    const zoomIn = () => {
        const updated = scale + 0.5
        setScale(updated);
        onScale(updated);

    };

    const zoomOut = () => {
        const updated = scale >= 0.5 ? scale - 0.5 : scale
        setScale(updated);
        onScale(updated);
    };

    return (
        <header>
            <div className='wrapper'>
                <div className='left-side'> 
                <span className='services'>Services</span>
                </div>
                <div className='right-side'>
                    <ul className="navigation-menu">
                        <li><div className="view">List view</div></li>
                        <li><button className='zoom-buttons' onClick={centerCategories}>                        
                        <i className="icon-compass compass-icon"></i>
                        </button>
                        </li>
                        <li><button className='zoom-buttons' onClick={zoomIn}>+</button></li>
                        <div className="dropdown">
                            <select className='dropdown-menu' name="scale" id="">100%</select>
                        </div>
                        <li><button className='zoom-buttons' onClick={zoomOut}>-</button></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
