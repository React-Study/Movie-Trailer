import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BASE_IMAGE_URL,
  w220h330,
  typeText,
  getUpcomingVideo,
  YOUTUBE_URL,
} from 'util/consts';
import VideoModal from '../VideoModal/VideoModal';

const CoverList = ({ headerTitle, data, types, changeTab, category }) => {
  const [active, setActive] = useState(types[0]);
  const [videoUrl, setVideoUrl] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickDetail = (id) => {
    // 상세 페이지 이동
  };

  const getUpcomingVideoData = async (id) => {
    const videoData = await getUpcomingVideo(id);
    const videoKey =
      videoData.results.length > 0 ? videoData.results[0].key : '';
    setVideoUrl({
      id: videoData.id,
      url: `${YOUTUBE_URL}${videoKey}?autoplay=1`,
    });
    setModalOpen(true);
  };

  return (
    <CoverListWrap>
      <TitleWrap>
        <span>{headerTitle}</span>
        <TabList>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => {
                setActive(type);
                changeTab(type, category);
              }}
            >
              {typeText(type)}
            </Tab>
          ))}
        </TabList>
      </TitleWrap>
      <ItemList>
        {data.results &&
          data.results.map((e) => (
            <Item key={e.id}>
              <img
                src={`${BASE_IMAGE_URL}${w220h330}${e.poster_path}`}
                alt={e.title}
                onClick={() =>
                  category === 'upcoming'
                    ? getUpcomingVideoData(e.id)
                    : handleClickDetail(e.id)
                }
              />
              {modalOpen && videoUrl.id === e.id && (
                <VideoWrap>
                  <VideoModal
                    id={e.id}
                    url={videoUrl.url}
                    setModalOpen={setModalOpen}
                  ></VideoModal>
                </VideoWrap>
              )}
              <p>
                {e.title ? e.title : e.name} <span>⭐️ {e.vote_average}</span>
              </p>
              <span>{e.release_date ? e.release_date : e.first_air_date}</span>
            </Item>
          ))}
      </ItemList>
    </CoverListWrap>
  );
};

export default CoverList;

const CoverListWrap = styled.section`
  width: 90%;
  padding: 20px 40px 20px 40px;
`;

const TitleWrap = styled.div`
  display: flex;
  padding: 20px;
  span {
    font-weight: 700;
    font-size: 1.5em;
  }
`;

const TabList = styled.div`
  border: 1px solid gray;
  border-radius: 30px;
  margin-top: -5px;
  margin-left: 20px;
`;

const Tab = styled.button`
  color: #565655;
  font-size: 1em;
  padding: 5px 10px 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  background: white;
  border: 0;
  outline: 0;
  line-height: 1.5;
  ${({ active }) =>
    active &&
    `
    color: white;
    background-color: #565655;
  `}
`;

const ItemList = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 15%);
    border-radius: 6px;
  }
`;

const Item = styled.div`
  margin-left: 20px;
  width: 150px;
  min-width: 150px;
  line-height: 20px;
  text-align: center;
  img {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
  }
  p {
    font-weight: 700;
  }
  span {
    color: rgb(0 0 0 / 60%);
  }
`;

const VideoWrap = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;
