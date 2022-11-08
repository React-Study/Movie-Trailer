import React, { useEffect, useState } from 'react';
import Layout from 'components/common/Layout/Layout';
import { CoverList } from 'components/common/CoverList';
import { getDiscover, getTrending } from 'util/consts';

const Home = () => {
  const [tabTypes, setTabTypes] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [freeData, setFreeData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  // [search] url: /search/multi

  const getDiscoverData = async (type, subType) => {
    setTabTypes(['flatrate', 'tv', 'rent', 'theatres']);
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

  const onChangeTab = (e, category) => {
    if (category === 'popular') {
      switch (e) {
        case 'tv':
          getDiscoverData('tv');
          break;
        default:
          getDiscoverData('movie', e);
          break;
      }
    }
  };

  useEffect(() => {
    getDiscoverData('movie', 'flatrate'); // popular 스트리밍
    getDiscoverData('movie', 'free'); // free 영화
    // 최신 예고편
    getTrendingData('all', 'day', 'ko-KR'); // trending 오늘
  }, []);

  return (
    <Layout>
      {tabTypes.length > 0 && (
        <CoverList
          headerTitle="What's Popular"
          data={popularData}
          types={tabTypes}
          changeTab={onChangeTab}
          category="popular"
        ></CoverList>
      )}
      {console.info(freeData)}
      {console.info(trendingData)}
    </Layout>
  );
};

export default Home;
