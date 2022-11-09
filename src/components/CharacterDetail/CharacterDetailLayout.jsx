import React, { useEffect, useState } from 'react';
import { getCharacterCreidit, getCharacterDetail } from 'util/consts';
import { useParams } from 'react-router-dom';
import { Layout } from 'components/common';
import CharacterDetail from './CharacterDetail';

const CharacterDetailLayout = () => {
  const [characterDetailData, setCharacterDetailData] = useState([]);
  const id = useParams().id;
  // const getImageUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

  const getCharacterDetailData = async (id) => {
    setCharacterDetailData(await getCharacterDetail(id, 'ko-KR'));
  };

  const [characterCreditData, setCharacterCreditData] = useState([]);
  const getCharacterCreiditData = async (id) => {
    setCharacterCreditData(await getCharacterCreidit(id, 'ko-KR'));
  };

  useEffect(() => {
    if(id) {
      getCharacterDetailData(id);
      getCharacterCreiditData(id);
    }
  }, [id]);

  return (
    <Layout children={<CharacterDetail data={characterDetailData} data2={characterCreditData} />}/>
  );
};

export default CharacterDetailLayout;