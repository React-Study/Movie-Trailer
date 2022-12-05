import React from 'react';
import styled from 'styled-components';

const CharacterActList = ({ data }) => {
  console.info('data4/cast', data);
  return (
    <ActingBox>
      {data &&
        data.map((e) => (
          <div key={e.id}>
            <table>
              <tbody>
                <tr>
                  <td className="act_date">{e.release_date}</td>
                  <td className="act_title">{e.title}</td>
                  <td className="act_character">
                    {e.character ? e.character + '역' : ''}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </ActingBox>
  );
};

export default CharacterActList;

const ActingBox = styled.div`
  tr {
    .act_date {
      font-size: 17px;
      color: rgba(0, 0, 0, 0.6);
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
