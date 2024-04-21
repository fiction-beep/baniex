export interface Project {
  id: number;
  projectName: string;
  city: string;
  address: string;
  phone: string;
}

export interface responseData {
  data? : Project[];
  itemId? : string;
  message? : string;
  stackTrace? : any;
  status? : string;
  success? : boolean;
}