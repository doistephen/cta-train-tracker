import React, { useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import useFormatTime from 'hooks/useFormatTime';
import Section from 'components/Section/Section';
import RefreshButton from 'components/RefreshButton/RefreshButton';

const key = '4f6eb44e289844e4b846c2b312cc2c1d';
const mapId = '40570';
const stpIdNorth = '30111';
const stpIdSouth = '30112';

const urlAppend = `?key=${key}&mapid=${mapId}&max=10&outputType=JSON`;

export default function Home() {
  const [northArrivals, setNorthArrivals] = useState([]);
  const [southArrivals, setSouthArrivals] = useState([]);
  const { get } = useFetch(
    'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx',
  );
  const [isLoading, setIsLoading] = useState(false);

  const getTrainArrivals = () => {
    setIsLoading(true);
    get(urlAppend)
      .then((data) => data.ctatt.eta) // @ts-ignore
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
        console.log(northArrivals);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTrainArrivals();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start h-full px-4 antialiased text-display-primary bg-background-secondary">
      <div className="w-full max-w-sm pt-32 space-y-10">
        <header className="space-y-3">
          <h1 className="flex -ml-0.5 flex-col space-y-1 font-bold leading-none tracking-tighter text-headline">
            <span className="text-accent">CTA Blue Line</span>
            <span>California Arrivals</span>
          </h1>
          {northArrivals.length > 0 ? (
            <small className="block text-display-secondary">
              Arrival info last received at{' '}
              {useFormatTime(northArrivals[0].prdt)}
            </small>
          ) : null}
        </header>
        <div className="space-y-8">
          <Section direction="Forest Park" data={southArrivals} />
          <Section direction="O'Hare" data={northArrivals} />
        </div>
        <div className="fixed left-0 right-0 flex justify-center bottom-12">
          <RefreshButton onClick={getTrainArrivals} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
