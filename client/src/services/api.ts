import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

export const fetchDevices = async (category: string) => {
  try {
    const response = await axios.get('/devices', {
      ...(category ? { params: {category } } : {})
    });

    if (response.status !== 200) {
      throw new Error('Devices not fetched');
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchDevice = async (link: string) => {
  try {
    const response = await axios.get(`/devices/${link}`);

    if (response.status !== 200) {
      throw new Error('Device not found');
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const searchDevices = async (name: string) => {
  try {
    const response = await axios.get(`/devices/search/${name}`);

    if (response.status !== 200) {
      throw new Error(`${response.data.error}`);
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