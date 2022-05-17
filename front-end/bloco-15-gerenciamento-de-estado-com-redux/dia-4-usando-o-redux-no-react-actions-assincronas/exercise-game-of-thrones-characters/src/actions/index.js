import charAPI from "../services/charAPI";

const request = () => ({
  type: 'REQUEST',
})

const get = (data) => ({
  type: 'GET',
  payload: data,
})

const erro = (error) => ({
  type: 'ERROR',
  payload: error
})

const fetchCharacters = (name) => {
  return async (distpatch) => {
    distpatch(request());
    try {
      const response = await charAPI(name);
      const character = response[0];
      distpatch(get(character));
    } catch (error) {
      distpatch(erro(error));
    }
  }
}

export default fetchCharacters