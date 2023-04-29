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

type TimeLine = {
  patientId: string,
  occurrences: [],
  serviceName: string,
  _id: string,
  createdOn:string,
  modifiedOn: string,
}