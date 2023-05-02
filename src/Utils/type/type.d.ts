 type Patient = {
   _id?: string,
    userId: string,
    name: string,
    birthdate: string,
    profession: string,
    schooling: string,
    demands: string,
    personalAnnotations: string,
}

type sessionCard = {
  patientId: string,
  _id: string,
  occurrences: [],
  serviceName: string,
  createdOn:string,
  modifiedOn: string,
}