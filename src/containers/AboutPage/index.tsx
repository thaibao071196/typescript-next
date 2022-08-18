import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch } from '../../configs/redux/store';
import { getDefaultSaga } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'aboutPage';

const AboutPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    dispatch(getDefaultSaga());
  }, []);

  return <div>hello</div>;
};

export default AboutPage;
