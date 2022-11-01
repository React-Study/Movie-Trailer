import React, { useEffect, useState } from 'react';
import { getCharacterList } from 'util/consts';
// import { useParams } from 'react-router-dom';
import Layout from 'components/common/Layout/Layout';

const CharacterList = () => {
  const [characterListData, setCharacterListData] = useState([]);

  const getCharacterListData = async () => {
    setCharacterListData(await getCharacterList('ko-KR'));
  };

  useEffect(() => {
    getCharacterListData();
  }, []);

  return <Layout>{console.info(characterListData)}</Layout>;
};

export default CharacterList;
