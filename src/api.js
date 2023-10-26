import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/?`;

export const fetchImg = async (filter, page) => {
  console.log(filter, page);
  const response = await axios.get(
    `&q=${filter}&page=${page}&key=39226453-68311701c5a3afc9a6c056ab8&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(response.data.hits);

  return response.data;
};
