import api from "./api";



export const getPatientData = async (): Promise<Patient>  => {
    const token = localStorage.getItem('jwt');

    try {
        const result = await api.get('patient/64471593e936b3ed3abea89b', { headers: { Authorization: token }});
        const { userId, name, birthdate, profession,  schooling,   demands,  personalAnnotations, _id } = result.data
        return { userId, name, birthdate, profession,  schooling,   demands,  personalAnnotations, _id }
    } catch(error) {

        return {} as Patient
    }
}