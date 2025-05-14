import axios from "axios";

import axiosClient from "./axiosClient";
import { API_URL } from "~/utils/constants";

export const fetchLoginAPI = async (email, password) => {
  const reponse = await axios.post(
    `${API_URL}/auth/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  return reponse.data;
};

export const fetchRegisterAPI = async (
  email,
  password,
  confirmPassword,
  fullName
) => {
  const response = await axios.post(
    `${API_URL}/auth/register`,
    {
      email,
      password,
      confirmPassword,
      fullName,
      birthDay: "2002-07-27",
    },
    { withCredentials: true }
  );

  return response.data;
};

export const fetchGetProfileAPI = async (accessToken) => {
  const response = await axiosClient.get(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

export const fetchGetUserConversationsAPI = async (accessToken) => {
  const response = await axiosClient.get(`${API_URL}/conversations`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

export const fetchGetConversationAPI = async (accessToken, participantId) => {
  const response = await axiosClient.post(
    `${API_URL}/conversations/`,
    {
      participants: participantId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export const fetchGetConversationDetailAPI = async (
  accessToken,
  conversationId
) => {
  const response = await axiosClient.get(
    `${API_URL}/conversations/${conversationId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export const fetchGetMessagesAPI = async (
  accessToken,
  conversationId,
  page
) => {
  const response = await axiosClient.get(
    `${API_URL}/messages/${conversationId}?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export const fetchSearchApi = async (query) => {
  const response = await axios.get(`${API_URL}/users/?query=${query}`);

  return response.data;
};
