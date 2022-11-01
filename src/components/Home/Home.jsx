import React, { useEffect, useState } from 'react';
import Layout from 'components/common/Layout/Layout';
import { getDiscover, getTrending } from 'util/consts';

const Home = () => {
  const [popularData, setPopularData] = useState([]);
  const [freeData, setFreeData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  // [search] url: /search/multi

  const getDiscoverData = async (type, subType) => {
    // type: tv, movie | subtype: flatrate, theatres, rent, free
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
    if (subType === 'free') {
      setFreeData(await getDiscover(type, params));
    } else {
      setPopularData(await getDiscover(type, params));
    }
  };

  const getTrendingData = async (mediaType, timeWindow, language) => {
    // mediaType: all | timeWindow: day, week
    setTrendingData(await getTrending(mediaType, timeWindow, language));
  };

  useEffect(() => {
    getDiscoverData('movie', 'theatres'); // popular 스트리밍
    getDiscoverData('movie', 'free'); // free 영화
    // 최신 예고편
    getTrendingData('all', 'day', 'ko-KR'); // trending 오늘
  }, []);

  return (
    <Layout>
      {console.info(popularData)}
      {console.info(freeData)}
      {console.info(trendingData)}
    </Layout>
  );
};

export default Home;
