import {} from 'react';
import './SplashScreen.css';

const SplashScreen = ({count}) => {
  return (
    <div className="splash-screen bg-[#FF5931]">
      <div className="flex items-center gap-3 text-6xl font-DepartureMono text-black">
        <div className="rounded-full bg-black w-12 h-12"></div>
        <div className="">00:0{count}</div>
      </div>
      {/* <div className="splash-logo">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#4285f4" strokeWidth="5" strokeDasharray="180" strokeDashoffset="0">
            <animate attributeName="stroke-dashoffset" values="0;180" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <h1 className="splash-title">Loading Amazing Content</h1> */}
    </div>
  );
};


export default SplashScreen;