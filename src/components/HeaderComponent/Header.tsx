// Header.tsx
import React, { useState } from 'react';
interface HeaderProps {
    onScale: (data: number) => void;
    onCenter: ()=>void;
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
        <div className="header">
            <button onClick={centerCategories}>Center TodoList</button>
            <button onClick={zoomIn}>Zoom In</button>
            <button onClick={zoomOut}>Zoom Out</button>
        </div>
    );
};

export default Header;
