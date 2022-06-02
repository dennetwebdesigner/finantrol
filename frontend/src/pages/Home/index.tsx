import './Home.css';

import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { MenuDashboard } from '../../components/MenuDashBoard';
import { authValidate } from '../../helpers/authHelpers';
import { validateKeys } from '../../helpers/KeysHelpers';
import { destroyAuth } from '../../store/actions/authActions';
import { PermissionDenied } from '../Errors/PermissionDenied';

export const Home = () => {
  const [Protected, setProtected] = useState(PermissionDenied);

  const authState = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();
  const removeAuth = useDispatch();

  const validateAuth = useCallback(authValidate, []);

  useEffect(() => {
    const permission = validateAuth();
    permission.then((data) => console.log(data));
    permission
      .then((data) => {
        console.log('allow: ' + data.status);
        if (!validateKeys() || authState.token.length < 1) {
          setTimeout(() => {
            removeAuth(destroyAuth({}));
            navigate('/login');
          }, 4000);
          return;
        }
        setProtected(() => (
          <div className="dashboard-container">
            <MenuDashboard />
            <Outlet className="container-sections" />
          </div>
        ));
      })
      .catch((data) => {
        console.log('denied: ' + data.status);
        removeAuth(destroyAuth({}));
        setTimeout(() => {
          navigate('/login');
        }, 4000);
      });
  }, [validateAuth]);

  return Protected;
};
