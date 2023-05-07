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

type OcurrencesCard = {
  type: string;
  patientId: string,
  _id: string,
  occurrences: [],
  serviceName?: string,
  title: string;
  content: string;
  files: [];
  createdOn: string,
  modifiedOn: string,
}


type Timeline = {
  type: string;
  timelineId: string,
  title: string,
  content: string;
}

type InfoCard = {
  title: string;

}