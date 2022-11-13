import { CharacterList } from 'components/CharacterList';
import { Layout } from 'components/common';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { getCharacter } from 'util/consts';
import styled from 'styled-components';

const Character = () => {
    const [characterData, setCharacterData] = useState([]);
    const [page, setPage] = useState(1);

    const handlePageChange = (page=> {
      setPage(page);
    })

    const getCharacterData = async () => {
      setCharacterData(await getCharacter('popular', {language: 'ko-KR', page: page}));
    };
  
    useEffect(() => {
      getCharacterData();
    }, [page]);

    return (
        <Layout>
            {characterData !== null ? <CharacterList characterList={characterData}/> : null}
            <Page>
            <Pagination
              activePage={page}
              itemsCountPerPage={1}
              totalItemsCount={500}
              pageRangeDisplayed={10}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
            />
            </Page>
        </Layout>
    );
};

export default Character;

const Page = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    // border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child{
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child{
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #2d2d2d;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    border-radius: 100%;
    background-color: #1d1d1d;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: #eee;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`