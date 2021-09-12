export default function RefreshButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center justify-center transition-transform transform rounded-full shadow bg-accent h-14 w-14 active:scale-90"
    >
      <svg
        className={`w-5 h-5 ${props.isLoading ? 'animate-spin' : ''}`}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33331 3.33335L3.81831 7.50002M3.81831 7.50002C4.37152 6.1318 5.36305 4.98578 6.6375 4.24157C7.91196 3.49737 9.39731 3.19703 10.8608 3.38764C12.3243 3.57824 13.6831 4.24902 14.7245 5.29483C15.7658 6.34065 16.4307 7.70241 16.615 9.16669M3.81831 7.50002H7.49998M16.6666 16.6667L16.1825 12.5M16.1825 12.5C15.6285 13.8674 14.6367 15.0126 13.3623 15.7561C12.088 16.4996 10.6031 16.7996 9.14006 16.6091C7.67703 16.4185 6.31848 15.7482 5.27709 14.7031C4.2357 13.658 3.57028 12.2971 3.38498 10.8334M16.1825 12.5H12.5"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}
