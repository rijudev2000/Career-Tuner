export class Login {
  _id?: string;
  password?: string;
}

export class UserData {
  _id: string = '';
  fname: string = '';
  mname: string = '';
  lname: string = '';
  phone: number | undefined;
  phone2: number | undefined;
  password: string = '';
  bio: string = '';
  role: string = '';
  school: [
    { tenth: String; grade: Number | undefined },
    {
      twelth: String;
      stream: String;
      grade: Number | undefined;
    }
  ] = [
    { tenth: '', grade: undefined },
    {
      twelth: '',
      stream: '',
      grade: undefined,
    },
  ];
  college: [
    {
      name: String;
      degree: String;
      semester: String;
      grade: Number | undefined;
    }
  ] = [{ name: '', degree: '', semester: '', grade: undefined }];
  jobs: string[] = [];
  skills: string[] = [];
  address: {
    streetaddress: String;
    city: String;
    state: String;
    zip: Number | undefined;
  } = { streetaddress: '', city: '', state: '', zip: undefined };
  bday: {} = {};
}
