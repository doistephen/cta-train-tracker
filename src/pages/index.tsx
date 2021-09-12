import React, { useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import Section from 'components/Section/Section';
import RefreshButton from 'components/RefreshButton/RefreshButton';

const key = '4f6eb44e289844e4b846c2b312cc2c1d';
const mapId = '40570';
// const stpIdNorth = '30111';
const stpIdSouth = '30112';

const urlAppend = `?key=${key}&stpid=${stpIdSouth}&max=4&outputType=JSON`;

export default function Home() {
  const [info, setInfo] = useState();
  const { get } = useFetch(
    'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx',
  );

  useEffect(() => {
    get(urlAppend)
      .then((data) => {
        console.log(data);
        setInfo(data.ctatt.eta);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start h-full px-4 antialiased text-display-primary bg-background-secondary">
      <div className="w-full max-w-sm pt-24 space-y-10">
        <h1 className="flex flex-col space-y-1 font-bold leading-none tracking-tighter text-headline">
          <span>California Arrivals</span>
          <span className="text-accent">Chicago Blue Line</span>
        </h1>
        <div className="space-y-8">
          <Section direction="South" />
          <Section direction="North" />
        </div>
        <div className="fixed left-0 right-0 flex justify-center bottom-12">
          <RefreshButton />
        </div>
      </div>
    </div>
  );
}
