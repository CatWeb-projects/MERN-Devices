import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000/api';

export const fetchDevices = async (type: string) => {
  try {
    const response = await axios.get('/devices', {
      ...(type ? { params: { type } } : {})
    });

    if (response.status !== 200) {
      throw new Error('Devices not fetched');
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/categories');

    if (response.status !== 200) {
      throw new Error('Categories not fetched');
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}