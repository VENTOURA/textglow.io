import { useEffect, useState } from 'react';

interface ScoreGaugeProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  label?: string;
  showNumber?: boolean;
}

export const ScoreGauge = ({ 
  value, 
  max = 100, 
  size = 'md', 
  color, 
  label,
  showNumber = true 
}: ScoreGaugeProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    // Slight delay for initial animation
    const timeout = setTimeout(() => {
      setAnimatedValue(value);
    }, 100);
    return () => clearTimeout(timeout);
  }, [value]);

  const percentage = (animatedValue / max) * 100;
  
  // Size mappings
  const dimensions = {
    sm: { size: 64, strokeWidth: 6, fontSize: 'text-xl' },
    md: { size: 120, strokeWidth: 10, fontSize: 'text-3xl' },
    lg: { size: 200, strokeWidth: 16, fontSize: 'text-6xl' }
  }[size];

  const radius = (dimensions.size - dimensions.strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine color if not provided
  let defaultColor = '#10B981'; // Green
  const normalizedValue = (value / max) * 100;
  if (!color) {
    if (normalizedValue < 40) defaultColor = '#EF4444';
    else if (normalizedValue < 60) defaultColor = '#F59E0B';
    else if (normalizedValue < 80) defaultColor = '#3B82F6';
  }

  const strokeColor = color || defaultColor;

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg 
        width={dimensions.size} 
        height={dimensions.size} 
        className="transform -rotate-90"
      >
        {/* Background track */}
        <circle
          cx={dimensions.size / 2}
          cy={dimensions.size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={dimensions.strokeWidth}
          fill="transparent"
          className="text-slate-100"
        />
        {/* Value stroke */}
        <circle
          cx={dimensions.size / 2}
          cy={dimensions.size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={dimensions.strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Center text */}
      {showNumber && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-black text-slate-900 ${dimensions.fontSize} tracking-tighter`}>
            {value}
            {max === 10 && <span className="text-sm text-slate-400 font-medium">/10</span>}
          </span>
          {label && size === 'lg' && (
             <span className="text-sm font-bold mt-1 uppercase tracking-wider" style={{ color: strokeColor }}>
               {label}
             </span>
          )}
        </div>
      )}
    </div>
  );
};
