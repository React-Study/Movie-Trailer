import React, { useEffect } from 'react';
import http from 'util/api/base';

const Home = () => {
  // [search] url: /search/multi

  const getDiscover = async (type, subType) => {
    // type: tv, movie
    // subtype: flatrate, theatres, rent, free
    const params = {
      language: 'ko-KR',
      watch_region: 'KR',
    };
    if (subType) {
      if (subType === 'theatres') {
        params.with_release_type = '3 | 2';
      } else {
        params.with_watch_monetization_types = subType;
      }
    }
    const response = await http.get({
      url: `/discover/${type}`,
      params: params,
    });
    return response.data;
  };

  const getTrending = async (timeWindow) => {
    // day, week
    const response = await http.get({
      url: `/trending/all/${timeWindow}`,
      params: { language: 'ko-KR' },
    });
    return response.data;
  };

  useEffect(() => {
    getDiscover('movie', 'theatres'); // popular 스트리밍
    getDiscover('movie', 'free'); // free 영화
    // 최신 예고편
    getTrending('day'); // trending 오늘
  }, []);

  return <div></div>;
};

export default Home;
