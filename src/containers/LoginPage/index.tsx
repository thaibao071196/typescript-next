import { Fragment, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { FormValues } from './types';

import saga from './saga';
import reducer from './reducer';
import { onLoginSaga } from './actions';

const validateSchema = yup.object({
  email: yup.string().required('Please Enter Your Email!!!'),
  password: yup.string().required('Please Enter Your Password!!!'),
});

const key = 'loginPage';

const LoginPage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validateSchema),
  });

  const [isShowPassword, setShowPassword] = useState(false);

  const onSubmit = handleSubmit((data) => {
    dispatch(onLoginSaga(data));
  });

  const onToggleShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <Fragment>
      <div className="login">
        <form className="form" onSubmit={onSubmit}>
          <div className="form__title">Login</div>
          <div className="form__fields">
            <div className="form__fields__element">
              <div className="form__fields__element__title">Email</div>
              <input
                className="form__fields__element__input"
                type="text"
                placeholder="Enter your username"
                {...register('email')}
              />
            </div>
            {errors?.email && (
              <div className="form__fields__error">{errors.email.message}</div>
            )}
            <div className="form__fields__element">
              <div className="form__fields__element__title">Password</div>
              <input
                className="form__fields__element__input"
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password')}
              />
              <div
                className="form__fields__element--has-eye"
                onClick={onToggleShowPassword}
              >
                {!isShowPassword ? <BsEye /> : <BsEyeSlash />}
              </div>
            </div>
            {errors?.password && (
              <div className="form__fields__error">
                {errors.password.message}
              </div>
            )}
          </div>
          <input className="form__submit" value="Log In" type="submit" />
        </form>
      </div>
    </Fragment>
  );
};

export default LoginPage;
