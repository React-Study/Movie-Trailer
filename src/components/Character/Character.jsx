import { CharacterList } from 'components/CharacterList';
import { Layout } from 'components/common';
import React, { useEffect, useState } from 'react';
import { getCharacter } from 'util/consts';

const Character = () => {
    const [characterData, setCharacterData] = useState([]);

    const getCharacterData = async () => {
      setCharacterData(await getCharacter('popular', 'ko-KR'));
    };
  
    useEffect(() => {
      getCharacterData();
    }, []);

    return (
        <Layout>
            {console.info(characterData)}
            {characterData !== null ? <CharacterList characterList={characterData}/> : null}
        </Layout>
    );
};

export default Character;