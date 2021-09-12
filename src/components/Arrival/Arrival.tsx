export default function Arrival(props) {
  const formatDate = (dateString) => {
    const options = { hour: 'numeric', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  const timeGenerated = new Date(props.data.prdt);
  const estimatedArrivalTime = new Date(props.data.arrT);

  const minutesRemaining = () => {
    const diffMs = estimatedArrivalTime - timeGenerated;
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

  return (
    <li className="flex items-center pl-3 space-x-3">
      <div className="p-0.5">
        <div className={`w-2 h-2 rounded-full ${colorChooser()}`}></div>
      </div>
      <div
        className={`flex items-center justify-between flex-1 py-4 pr-3 ${
          props.index === props.length - 1 ? '' : 'border-b border-divider'
        } `}
      >
        <h3
          className={`leading-none tracking-tight text-base ${
            props.index === 0 ? 'font-medium' : 'text-display-secondary'
          }`}
        >
          {props.data.destNm}
        </h3>
        <time
          className={`leading-none tracking-tight ${
            props.index === 0
              ? 'text-lg font-bold'
              : 'text-display-secondary font-medium text-base'
          }`}
        >
          {props.data.isApp === '1' ? 'Due' : minutesRemaining() + ' min'}
        </time>
      </div>
    </li>
  );
}
