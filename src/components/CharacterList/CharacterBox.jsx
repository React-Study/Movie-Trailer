import React from 'react';
import styled from 'styled-components';
import { BASE_IMAGE_URL, w235h235 } from 'util/consts';

const CharacterBox = ({characterData}) => {
    console.info(characterData);
    
    const sub_title = [];
    {characterData.known_for.forEach((e)=>{
        console.info(e.title);
        sub_title.push(`${e.title || e.name}`);
        sub_title.push(', ');
    })}
    sub_title.pop();
    

    return (
        <Box className='box'>
            <div className='box_wrap'>
                <div className='img_wrap'>
                    <img
                    className="poster"
                    src={`${BASE_IMAGE_URL}${w235h235}${characterData.profile_path}`}
                    />
                </div>
                <Content>
                    <div>
                        <p>{characterData.name}</p>
                        <p>{sub_title}</p>
                    </div>
                </Content>
            </div>
        </Box>
    );
};

export default CharacterBox;

const Box = styled.div`
    width: 18%;
      max-width: calc(var(--maxPrimaryPageWidth));
      display: flex;
      flex-direction: column;
    //   background: aqua;
      margin: 0 auto;
      .box_wrap {
        width: 100%;
        // background: green;
        margin: 10px 0;
        .img_wrap {
            width:100%;
            img {
                width: 100%;
            }
        }
      }
`

const Content = styled.div`
`