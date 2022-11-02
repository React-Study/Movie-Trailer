import React, { useEffect, useState } from 'react';
import { getCharacterDetail } from 'util/consts';
import { useParams } from 'react-router-dom';
import { Layout } from 'components/common';

const CharacterDetail = () => {
  const [characterDetailData, setCharacterDetailData] = useState([]);
  const id = useParams().id;
  const getImageUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

  const getCharacterDetailData = async (id) => {
    setCharacterDetailData(await getCharacterDetail(id, 'ko-KR'));
  };

  useEffect(() => {
    getCharacterDetailData(id);
  }, [id]);

  return (
    <Layout>
      {console.info(characterDetailData)}
      {characterDetailData.name}
      <img
        src={`${getImageUrl}/${characterDetailData.profile_path}`}
        alt="personImage"
      />
    </Layout>
  );
};

export default CharacterDetail;
