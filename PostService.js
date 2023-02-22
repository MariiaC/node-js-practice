import Post from "./Post.js";
import { saveFile } from "./fileService.js";

// Logic of working with DB and Schema model. We dont depend here from req,res

export const createAllPosts = async (post, picture) => {
    const fileName = saveFile(picture);
    const createdPost = await Post.create({...post, picture:fileName});
    return createdPost;
};

export const receiveAllPosts = async () => {
    const receivePosts = await Post.find();
    return receivePosts
}

export const receivePostsById = async (id) => {
  
    if (!id) {
        throw new Error('please enter ID')
    }
    const receivePost = await Post.findById(id);
    return receivePost;
}

export const renewAllPosts = async (post) => {
    
        if (!post._id) {
            throw new Error('lease enter ID')
        }
        const updPost=await Post.findByIdAndUpdate(post._id,post,{new:true} )
        return updPost;
};

export const removePostById = async (id) => {
 
        if (!id) {
       throw new Error('lease enter ID')
        }
        const removedPost = await Post.findByIdAndDelete(id);
    return removedPost;
  
};

