import axios from "../axios";

export const useBot = {
    send: (state) => axios.post("/bot", state),
            
}
