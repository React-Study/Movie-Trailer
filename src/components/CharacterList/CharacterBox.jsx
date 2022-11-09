import React from 'react';
import styled from 'styled-components';
import { BASE_IMAGE_URL, w235h235 } from 'util/consts';

const CharacterBox = ({characterData}) => {
    console.info(characterData);
    
    const sub_title = [];

    function sub(sub_title){
        {characterData.known_for.forEach((e)=>{
            sub_title.push(`${e.title || e.name}`);
            sub_title.push(', ');
        })}
        sub_title.pop();
    }
    sub(sub_title);
    

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
                    <div className='content'>
                        <p className='name'>{characterData.name}</p>
                        <p className='sub'>{sub_title}</p>
                    </div>
                </Content>
            </div>
        </Box>
    );
};

export default CharacterBox;

const Box = styled.div`
    width: 17.5%;
      max-width: calc(var(--maxPrimaryPageWidth));
      display: flex;
      flex-direction: column;
    //   background: aqua;
      margin: 0 auto;
      .box_wrap {
        width: 100%;
        // height: 280px;
        // background: green;
        box-shadow: 0 1px 15px 5px #eee;
        margin: 15px 0;
        .img_wrap {
            width:100%;
            img {
                width: 100%;
            }
        }
        .content {
            // background: red;
            padding: 10px;
            .name {
                font-weight: 600;
                white-space: nowrap;
                overflow:hidden;
                text-overflow: ellipsis;
            }
            .sub {
                // background: aqua;
                font-family: 'Source Sans Pro', Arial, sans-serif;
                font-weight: 400;
                font-size: 12px;
                padding: 5px 0;
                width: 100%;
                height: 7px;
                white-space: nowrap;
                overflow:hidden;
                text-overflow: ellipsis;
            }
        }
      }
`

const Content = styled.div`
`