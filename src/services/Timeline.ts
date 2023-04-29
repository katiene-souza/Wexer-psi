import api from "./api";



export const SessionPost = async (): Promise<TimeLine>  => {

    try {
        const result = await api.post('/occurrence', 
            
        
        { headers: { Authorization: token }});
       
    } catch(error) {

        return {} as TimeLine
    }
}