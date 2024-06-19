// src/Tooltip.js
import { useState, useRef } from 'react';

// styles
import './Tooltip.scss';

const Tooltip = ({ text, tooltipText }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef(null);

  const handleMouseMove = (e) => {
    if (tooltipRef.current) {
      const tooltipWidth = tooltipRef.current.offsetWidth;
      const tooltipHeight = tooltipRef.current.offsetHeight;
      const padding = 16;
      const leftShift = 16;

      let newTop = e.clientY + 23; // Shift down from cursor
      let newLeft = e.clientX - leftShift;

      if (e.clientX + tooltipWidth + padding > window.innerWidth) {
        newLeft = window.innerWidth - tooltipWidth - padding + leftShift;
      }

      if (e.clientX < leftShift) {
        newLeft = e.clientX;
      }

      if (e.clientY + tooltipHeight + padding > window.innerHeight) {
        newTop = e.clientY - tooltipHeight - padding;
      }

      setTooltipPosition({ top: newTop, left: newLeft });
    }

    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="tooltip-container">
      <span
        className="text"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </span>
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className="tooltip"
          style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
