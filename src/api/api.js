import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c98f6fbc-d9ff-41de-93ed-d14a024d97dc",
  },
  timeout: 20000
});

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    try {
      return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`);
    }catch(err){
      throw new Error();
    }
  },
};

export const ProfileAPI = {
  getProfile(userId) {
    try {
      return instanceAxios.get(`profile/${userId}`);
    }catch(err){
      throw new Error();
    }
  },
  
  getStatus(userId) {
    try {
      return instanceAxios.get(`profile/status/${userId}`);
    }catch(err){
      throw new Error();
    }
  },

  updateStatus(status) {
    try {
      return instanceAxios.put("profile/status/", { status: status });
    }catch(err){
      throw new Error();
    }
  },
};

export const AuthAPI = {
  getAuth() {
    try {
      return instanceAxios.get(`auth/me`)
    } catch(err){
      throw new Error();
    }
  },

  login(email, password, rememberMe) {
    try {
      return instanceAxios.post("auth/login", { email, password, rememberMe });
    }catch(err){
      throw new Error();
    }
    
  },

  logout(){
    try {
      return instanceAxios.delete("auth/login");
    }catch(err){
      throw new Error();
    }
  }
};

export const FollowAPI = {
  follow(userId) {
    try {
      return instanceAxios.post(`follow/${userId}`);
    }catch(err){
      throw new Error();
    }
  },

  unFollow(userId) {
    try {
      return instanceAxios.delete(`follow/${userId}`);
    }catch(err){
      throw new Error();
    }
  },
};

