import React from 'react';
import VideoRankResults from './VideoRankResults';

export default {
  title: 'organisms/VideoRankResults',
};

const data = [
  { keyword: 'sou menino para ir', page: 2, position: 12 },
  { keyword: 'salvador martinha', page: 1, position: 10 },
  { keyword: 'fox comedy', page: 1, position: 1 },
];

export const Basic = () => (
  <VideoRankResults
    title="John John Florence VS Kelly Slater!!! Semifinal 2020 PIPE MASTERS FULL HEAT REPLAY"
    thumbnail={'https://i.ytimg.com/vi/_Lwdbce6a4E/hqdefault.jpg'}
    videoId={'_Lwdbce6a4E'}
    countries={[{ value: 'US', label: 'United States' }]}
    data={data}
  />
);

export const MultipleCountries = () => (
  <VideoRankResults
    title="John John Florence VS Kelly Slater!!! Semifinal 2020 PIPE MASTERS FULL HEAT REPLAY"
    thumbnail={'https://i.ytimg.com/vi/_Lwdbce6a4E/hqdefault.jpg'}
    videoId={'_Lwdbce6a4E'}
    countries={[
      { value: 'US', label: 'United States' },
      { value: 'PT', label: 'Portugal' },
    ]}
    data={data}
  />
);
