import axios from "../axios";

export const useInfo = {
    getContact: () => axios.get("/contact"),
    getSkills: () => axios.get("/skill"),       
    getLanguages: () => axios.get("/language"),       
    getPosts: () => axios.get("/post/active"),       
    getOnePost: (id) => axios.get(`/post/${id}`),       
    getProject: () => axios.get(`/project`),       
    getExperience: () => axios.get(`/experience`),       
}
