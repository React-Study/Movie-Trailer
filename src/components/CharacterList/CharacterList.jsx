import React from 'react';
import CharacterBox from './CharacterBox';
import styled from 'styled-components';

const CharacterList = ({characterList}) => {
  const { results } = characterList;

  return (
    <ListBody>
      <h2 className='title'>인기 인물</h2>
        <div className='list_wrap'>
          {results && results.map((data) => {
            return <CharacterBox key={data.id} characterData={data} />;
          })}
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
    margin: 20px 10px;
  }
  .list_wrap {
    width: 100%;
    // background: tomato;
    display: flex;
    flex-wrap: wrap;
    }
  }
  .pagination_wrap {
    background: tomato;
    width: 100%;
    height: 50px;
    .pagination {
      background: aqua;
      width: 30%;
      height: 100%;
      margin: 0 auto;
    }
  }
`

