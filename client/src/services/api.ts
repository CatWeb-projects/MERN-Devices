import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

export const fetchSlides = async () => {
  const response = await axios.get('/sliders');

  if (response.status !== 200) {
    throw new Error(`${response.data.message}`);
  }

  return response.data;
}

export const fetchDevices = async (category: string) => {
  try {
    const response = await axios.get('/devices', {
      ...(category ? { params: {category } } : {})
    });

    if (response.status !== 200) {
      throw new Error(`${response.data.message}`);
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
      throw new Error(`${response.data.message}`);
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
      throw new Error(`${response.data.message}`);
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
      throw new Error(`${response.data.message}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchCollection = async () => {
  try {
    const response = await axios.get('/collection');

    if (response.status !== 200) {
      throw new Error(`${response.data.message}`);
    }
    
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const userLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post('/users/login', {
      email,
      password
    });
    if (response.status !== 200) {
      throw new Error(`${response.data.message}`);
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const validateSession = async (refreshToken: string) => {
  try {
    const response = await axios.post('/users/session/validate', {
      refreshToken
    });
    if (response.status !== 200) {
      throw new Error(`${response.data.message}`);
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
}