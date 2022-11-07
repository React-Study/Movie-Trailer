import React from 'react';
// import { getCharacterList } from 'util/consts';
// import { useParams } from 'react-router-dom';
// import Layout from 'components/common/Layout/Layout';
import CharacterBox from './CharacterBox';
import styled from 'styled-components';

const CharacterList = ({characterList}) => {
  const { results } = characterList;

  return (
    <ListBody>
      <h2 className='title'>인기 인물</h2>
      <div className=''>
        <div className=''>
          <div className='list_wrap'>
            {results && results.map((data) => {
              return <CharacterBox key={data.id} characterData={data} />;
            })}
          </div>
        </div>
      </div>
    </ListBody>
  );
};

export default CharacterList;

const ListBody = styled.div`
  width: 88%;
  margin: 0 auto;
  .title {
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0;
  }
  .list_wrap {
    width: 100%;
    background: tomato;
    display: flex;
    flex-wrap: wrap;
    }
  }
`

