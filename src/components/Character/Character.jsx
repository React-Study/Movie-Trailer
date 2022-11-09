import { CharacterList } from 'components/CharacterList';
import { Layout } from 'components/common';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import './Paging.css';
import { getCharacter } from 'util/consts';

const Character = () => {
    const [characterData, setCharacterData] = useState([]);
    const [page, setPage] = useState(1);

    const handlePageChange = (page=> {
      setPage(page);
    })

    const getCharacterData = async () => {
      setCharacterData(await getCharacter('popular', {language: 'ko-KR', page: page}));
    };
  
    useEffect((page) => {
      getCharacterData(page);
    }, [page]);

    return (
        <Layout>
            {console.info(characterData)}
            {characterData !== null ? <CharacterList characterList={characterData}/> : null}
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={5000}
              pageRangeDisplayed={5}
              prevPageText={"<"}
              nextPageText={">"}
              onChange={handlePageChange}
            />
        </Layout>
    );
};

export default Character;