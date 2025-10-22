import axios from "axios";

let baseURL = `http://localhost:3000/api`;

async function getUser(token) {
  let res = await axios.get(`${baseURL}/auth`, {
    headers: { "x-auth-token": token },
  });

  return res.data;
}

async function getPostById(id, token) {
  let res = await axios.get(`${baseURL}/posts/${id}`, {
    headers: { "x-auth-token": token },
  });
  return res.data;
}


async function createPost(postData, token) {
  const res = await axios.post(`${baseURL}/posts`, postData, {
    headers: { "x-auth-token": token },
  });
  return res.data;
}

async function updatePost(id, postData, token) {
  const res = await axios.put(`${baseURL}/posts/${id}/edit`, postData, {
    headers: { "x-auth-token": token },
  });

  return res.data;
}

async function deletePost(id, token) {
  const res = await axios.delete(`${baseURL}/posts/${id}`, {
    headers: { "x-auth-token": token },
  });

  return res.data;
}

export default { getUser, getPostById, createPost, updatePost, deletePost };
