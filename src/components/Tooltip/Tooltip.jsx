import { useState, useRef, useEffect } from 'react';

// styles
import './Tooltip.scss';

const Tooltip = ({ text, tooltipText, className }) => {
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
  };

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  useEffect(() => {
    if (isTooltipVisible && tooltipRef.current) {
      // Force re-calculation of tooltip position
      const tooltipWidth = tooltipRef.current.offsetWidth;
      const tooltipHeight = tooltipRef.current.offsetHeight;
      const padding = 16;
      const leftShift = 16;

      let newTop = tooltipPosition.top;
      let newLeft = tooltipPosition.left;

      if (newLeft + tooltipWidth + padding > window.innerWidth) {
        newLeft = window.innerWidth - tooltipWidth - padding + leftShift;
      }

      if (newLeft < leftShift) {
        newLeft = leftShift;
      }

      if (newTop + tooltipHeight + padding > window.innerHeight) {
        newTop = newTop - tooltipHeight - padding;
      }

      setTooltipPosition({ top: newTop, left: newLeft });
    }
  }, [isTooltipVisible]);

  return (
    <div className="tooltip-container">
      <span
        className={`text ${className ? className : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </span>
      <div
        ref={tooltipRef}
        className="tooltip"
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left,
          visibility: isTooltipVisible ? 'visible' : 'hidden',
        }}
      >
        {tooltipText}
      </div>
    </div>
  );
};

export default Tooltip;
