import React, { useState, useRef, useEffect } from 'react';

/**
 * Polished Tooltip Component
 * Supports desktop hover, keyboard focus, and mobile tap toggle.
 * Adapts seamlessly to Light/Dark modes.
 */
export const Tooltip = ({
  content,
  children,
  position = 'top',
  delay = 100,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const tooltipRef = useRef(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const toggleTooltip = (e) => {
    // Only toggle on touch/click if it's not a button action or if user taps
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom':
        return 'top-full mt-2 left-1/2 -translate-x-1/2';
      case 'left':
        return 'right-full mr-2 top-1/2 -translate-y-1/2';
      case 'right':
        return 'left-full ml-2 top-1/2 -translate-y-1/2';
      case 'top':
      default:
        return 'bottom-full mb-2 left-1/2 -translate-x-1/2';
    }
  };

  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && content && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={`absolute z-50 pointer-events-none whitespace-nowrap px-2.5 py-1.2 rounded-lg text-xs font-medium tracking-wide shadow-lg border transition-all duration-150 transform ${getPositionClasses()}
            bg-slate-900 text-slate-100 border-slate-700/60 
            dark:bg-slate-100 dark:text-slate-900 dark:border-slate-300
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
          style={{ maxWidth: '280px', whiteSpace: 'normal', textAlign: 'center', lineHeight: '1.3' }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
