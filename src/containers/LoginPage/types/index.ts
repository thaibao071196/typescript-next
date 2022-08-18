export type DepotState = {
  login: FormValues;
};

export type FormValues = {
  email: string;
  password: string;
};

export type dataUserLogin = {
  errCode: number;
  message: string;
  user: {
    email?: string;
    roleId?: string;
  };
};

export type LoginSaga = {
  payload: DepotState['login'];
  type: string;
};
