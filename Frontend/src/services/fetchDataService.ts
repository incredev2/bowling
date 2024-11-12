import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchOrCreate = async (userId: string) => {
  try {
    const response = await axios.get(`${baseUrl}/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      const createResponse = await axios.post(`${baseUrl}`, {
        userId,
      });
      return createResponse.data;
    }
    console.error("Error fetching or creating data:", error);
  }
};

export const updateData = async (userId: string, pins: number) => {
  try {
    const response = await axios.put(`${baseUrl}`, {
      userId,
      pins: `${pins}`,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
  }
};
