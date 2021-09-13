import useFormatTime from 'hooks/useFormatTime';
import { useState, useEffect } from 'react';

export default function Arrival(props) {
  const timeGenerated = new Date(props.data.prdt);
  const estimatedArrivalTime = new Date(props.data.arrT);

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const minutesRemaining = () => {
    const diffMs = estimatedArrivalTime.getTime() - time;
    const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

    return diffMins;
  };

  const colorChooser = () => {
    if (props.data.isDly === '1') {
      return 'bg-is-delayed';
    } else if (props.data.isFlt === '1') {
      return 'bg-is-fault';
    } else {
      return 'bg-on-time';
    }
  };

  const descriptionChooser = () => {
    if (props.data.isDly === '1') {
      return 'Delayed';
    } else if (props.data.isFlt === '1') {
      return 'Schedule fault';
    } else {
      return 'On time';
    }
  };

  return (
    <li
      className={`flex items-center pl-3 space-x-3 ${
        minutesRemaining() < 1 ? 'hidden' : ''
      }`}
    >
      <div className="p-0.5">
        <div className={`w-2 h-2 rounded-full ${colorChooser()}`}></div>
      </div>
      <div
        className={`flex items-center justify-between flex-1 py-4 pr-3 ${
          props.index === props.length - 1 ? '' : 'border-b border-divider'
        } `}
      >
        <h3
          className={`leading-none tracking-tight space-x-1 text-base ${
            props.index === 0 ? 'font-medium' : 'text-display-secondary'
          }`}
        >
          <span>{descriptionChooser()}</span>
          <span className="text-xs font-normal text-display-secondary">•</span>
          <span className="text-xs font-normal lowercase text-display-secondary">
            {useFormatTime(estimatedArrivalTime)}
          </span>
        </h3>
        <time
          className={`leading-none tracking-tight space-x-2 ${
            props.index === 0
              ? 'text-lg font-bold'
              : 'text-display-secondary font-medium text-base'
          }`}
        >
          <span>
            {minutesRemaining() < 2 ? 'Due' : minutesRemaining() + ' min'}
          </span>
        </time>
      </div>
    </li>
  );
}
