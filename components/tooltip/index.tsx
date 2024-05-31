import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const handleMouseEnter = (event: React.MouseEvent) => {
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        setCoords({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const tooltipContent = (
        <div
            className={`absolute z-50 px-2 py-1 rounded text-sm whitespace-nowrap ${isVisible ? 'block' : 'hidden'}`}
            style={{
                top: `${coords.top}px`,
                left: `${coords.left}px`,
                position: 'absolute',
                zIndex: 1000,
                display: isVisible ? 'block' : 'none',
            }}
            ref={tooltipRef}
        >
            {content}
        </div>
    );

    return (
        <>
            {isVisible && ReactDOM.createPortal(tooltipContent, document.body)}
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {children}
            </span>
        </>
    );
};

export default Tooltip;