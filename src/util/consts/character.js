import http from 'util/api/base';

// CHARACTER 관련 상수
const CHARACTER_API_ENDPOINT = '/person';

export const getCharacter = async (pageName, { language, page }) => {
  // console.info(pageName, language, page)
  try {
    const res = await http.get({
      url: `${CHARACTER_API_ENDPOINT}/${pageName}?laguage=${language}&page=${page}`,
      params: {
        language: language,
        page: page,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCharacterDetail = async (charcterId, language) => {
  try {
    const res = await http.get({
      url: `${CHARACTER_API_ENDPOINT}/${charcterId}`,
      params: {
        language: language,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCharacterCreidit = async (charcterId, language) => {
  try {
    const res = await http.get({
      url: `${CHARACTER_API_ENDPOINT}/${charcterId}/translations`,
      params: {
        language: language,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCharacterMovieCreidit = async (charcterId, language) => {
  try {
    const res = await http.get({
      url: `${CHARACTER_API_ENDPOINT}/${charcterId}/movie_credits`,
      params: {
        language: language,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCharacterAct = async (charcterId, language) => {
  try {
    const res = await http.get({
      url: `${CHARACTER_API_ENDPOINT}/${charcterId}/combined_credits`,
      params: {
        language: language,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
