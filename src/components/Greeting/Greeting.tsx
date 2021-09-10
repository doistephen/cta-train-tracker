import { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
const key = '4f6eb44e289844e4b846c2b312cc2c1d';
const mapId = '40570';
// const stpIdNorth = '30111';
// const stpIdSouth = '30112';

const urlAppend = `?key=${key}&mapid=${mapId}&outputType=JSON`;

export const Greeting = () => {
  const { get } = useFetch(
    'http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx',
  );

  useEffect(() => {
    get(urlAppend)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="py-2 text-xl font-bold text-center text-gray-100 bg-gray-700">
      Say hi
    </div>
  );
};
