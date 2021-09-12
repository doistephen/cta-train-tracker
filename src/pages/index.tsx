import React, { useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import Section from 'components/Section/Section';
import RefreshButton from 'components/RefreshButton/RefreshButton';

const key = '4f6eb44e289844e4b846c2b312cc2c1d';
const mapId = '40570';
const stpIdNorth = '30111';
const stpIdSouth = '30112';

const urlAppend = `?key=${key}&mapid=${mapId}&max=4&outputType=JSON`;

export default function Home() {
  const [arrivals, setArrivals] = useState([]);
  const [northArrivals, setNorthArrivals] = useState([]);
  const [southArrivals, setSouthArrivals] = useState([]);
  const { get } = useFetch(
    'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx',
  );
  const [isLoading, setIsLoading] = useState(false);

  const getTrainArrivals = () => {
    setIsLoading(true);
    get(urlAppend)
      .then((data) => {
        setArrivals(data.ctatt.eta);
        return data.ctatt.eta;
      })
      .then((arrivals) => {
        setNorthArrivals(
          arrivals.filter((arrival) => arrival.stpId == stpIdNorth),
        );
        setSouthArrivals(
          arrivals.filter((arrival) => arrival.stpId == stpIdSouth),
        );
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTrainArrivals();
  }, []);

  const formatDate = (dateString) => {
    const options = { hour: 'numeric', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  return (
    <div className="relative flex flex-col items-center justify-start h-full px-4 antialiased text-display-primary bg-background-secondary">
      <div className="w-full max-w-sm pt-32 space-y-10">
        <header className="space-y-2">
          <h1 className="flex -ml-0.5 flex-col space-y-1 font-bold leading-none tracking-tighter text-headline">
            <span>California Arrivals</span>
            <span className="text-accent">Chicago Blue Line</span>
          </h1>
          {northArrivals.length > 0 ? (
            <small className="block text-display-secondary">
              Last updated: {formatDate(northArrivals[0].prdt)}
            </small>
          ) : null}
        </header>
        <div className="space-y-8">
          <Section direction="South" data={southArrivals} />
          <Section direction="North" data={northArrivals} />
        </div>
        <div className="fixed left-0 right-0 flex justify-center bottom-12">
          <RefreshButton onClick={getTrainArrivals} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
