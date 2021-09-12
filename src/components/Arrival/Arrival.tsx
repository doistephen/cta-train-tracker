export default function Arrival(props) {
  return (
    <li className="flex items-center pl-3 space-x-3">
      <div className="p-0.5">
        <div className="w-2 h-2 rounded-full bg-on-time"></div>
      </div>
      <div
        className={`flex items-center justify-between flex-1 py-4 pr-3 ${
          props.lastChild ? '' : 'border-b border-divider'
        } `}
      >
        <h3
          className={`leading-none tracking-tight ${
            props.variant === 'upcoming'
              ? 'text-display-secondary font-normal text-sm'
              : 'text-base font-medium'
          }`}
        >
          Forest Park
        </h3>
        <time
          className={`leading-none tracking-tight ${
            props.variant === 'upcoming'
              ? 'text-display-secondary font-medium text-base'
              : 'text-lg font-bold'
          }`}
        >
          Due
        </time>
      </div>
    </li>
  );
}
