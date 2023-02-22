
import {
  createAllPosts,
  receiveAllPosts,
  receivePostsById,
  renewAllPosts,
  removePostById,
} from "./PostService.js";

// LOGIC that goes in routes

export const postAllPosts = async (req, res) => {
  try {
    const post = await createAllPosts(req.body, req.files.picture);
    res.json(post);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await receiveAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await receivePostsById(req.params.id);
    return res.json(post);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const updateAllPosts = async (req, res) => {
  try {
    const updatedPost = await renewAllPosts(req.body);
    return res.json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePostById = async (req, res) => {
  try {
    //  const { id } = req.params;
    // if (!id) {
    //   res.status(400).json({ message: "please enter Id" });
    // }
    const post = await removePostById(req.params.id);
    return res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
