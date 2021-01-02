const FlipCountdown: React.FC<{
    className?: string;
    size?: 'large' | 'medium' | 'small' | 'extra-small';
    endAt: string;
    titlePosition?: 'top' | 'bottom';
    yearTitle?: string;
    monthTitle?: string;
    dayTitle?: string;
    hourTitle?: string;
    minuteTitle?: string;
    secondTitle?: string;
    hideYear?: boolean;
    hideMonth?: boolean;
    hideDay?: boolean;
    hideHour?: boolean;
    hideMinute?: boolean;
    hideSecond?: boolean;
}>;
export default FlipCountdown;
