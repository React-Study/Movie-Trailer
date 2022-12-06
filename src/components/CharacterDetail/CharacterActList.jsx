import React from 'react';
import styled from 'styled-components';

const CharacterActList = ({ data, btn_info }) => {
  const {cast} = data;
  console.info(btn_info)
  console.info('data4/cast', cast);
  return (
    <ActingBox>
      {
        cast&&cast.forEach(e => {
          if(e.release_date){
            // console.info(e.release_date.split('-')[0])
            e.release_date = e.release_date.split('-')[0];
          } else if(e.first_air_date){
            e.release_date = e.first_air_date.split('-')[0];
          } 
          
          // e.release_date = e.release_date.split('-')[0];
        })
      }
      {
        cast&&cast.sort((a,b)=>b.release_date - a.release_date).filter(e=>{if(btn_info === "all"){return e.media_type}else{return e.media_type === btn_info}}).map(e=>
          <div className='credit' key={e.id}>
            <table>
              <tbody>
                <tr>
                  <td className="act_date">{e.release_date ? e.release_date : "예정"}</td>
                  <td className="act_title">{e.title || e.name}</td>
                  <td className="act_character">
                    {e.character ? e.character + '역' : ''}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          )
      }
    </ActingBox>
  );
};

export default CharacterActList;

const ActingBox = styled.div`
  .credit {
    margin: 20px 5px;
  }
  tr {
    .act_date {
      font-size: 17px;
      color: rgba(0, 0, 0, 0.6);
      padding-right: 40px;
    }
    .act_title {
      font-size: 18px;
    }
    .act_character {
      font-size: 17px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
      padding-left: 5px;
    }
  }
  border: 1px solid #ccc;
  padding: 30px;
`;
