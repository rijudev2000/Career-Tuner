export class Login {
  _id?: string;
  password?: string;
}

export class UserData {
  _id?: string;
  fname?: string;
  mname?: string;
  lname?: string;
  role?: string;
  phone?: number;
  password?: string;
  school: [
    { tenth: String; grade: Number | null },
    {
      twelth: String;
      stream: String;
      grade: Number | null;
    }
  ] = [
    { tenth: '', grade: null },
    {
      twelth: '',
      stream: '',
      grade: null,
    },
  ];
  college: [{ name: String; degree: String; semester: String; grade: Number | null }] = [
    { name: '', degree: '', semester: '', grade: null },
  ];
  bio?: String;
}

/* export interface UserStore {
  _id: string;
  fname: string;
  mname: string;
  lname: string;
  role: string;
  phone: number;
  password: string;
} */
