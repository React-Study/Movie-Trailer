import React, { useEffect, useState } from 'react';
import { getCharacterDetail } from 'util/consts';
import { useParams } from 'react-router-dom';
import { Layout } from 'components/common';

const CharacterDetail = () => {
  const [characterDetailData, setCharacterDetailData] = useState([]);
  const id = useParams().id;

  const getCharacterDetailData = async (id) => {
    setCharacterDetailData(await getCharacterDetail(id, 'ko-KR'));
  };

  useEffect(() => {
    getCharacterDetailData(id);
  }, [id]);

  return <Layout>{console.info(characterDetailData)}</Layout>;
};

export default CharacterDetail;
