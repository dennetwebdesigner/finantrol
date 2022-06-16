import './Home.css';

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { MenuDashboard } from '../../components/MenuDashBoard';
import MarketplaceController from '../../controllers/MarketplaceController';
import { authValidate } from '../../helpers/authHelpers';
import { validateKeys } from '../../helpers/KeysHelpers';
import { destroyAuth } from '../../store/actions/authActions';
import { PermissionDenied } from '../Errors/PermissionDenied';

export const Home = () => {
  const [Protected, setProtected] = useState(PermissionDenied);

  const authState = useSelector((state: any) => state.auth.auth);
  const navigate = useNavigate();
  const removeAuth = useDispatch();
  const dispatch = useDispatch();

  const allMarketplaces = useCallback(async () => {
    const list = await MarketplaceController.list();
    dispatch({
      type: 'ADD_ALL_MARKETPLACE',
      payload: list,
    });
  }, []);

  const validateAuth = useCallback(authValidate, []);

  useEffect(() => {
    const permission = validateAuth();

    allMarketplaces();

    permission
      .then((data) => {
        console.log('allow: ' + data.status);
        if (!validateKeys() || authState.token.length < 1) {
          setTimeout(() => {
            removeAuth(destroyAuth());
            navigate('/login');
          }, 2000);
          return;
        }
        setProtected(() => (
          <div className="dashboard-container">
            <MenuDashboard />
            <div className="container-sections">
              <Outlet />
            </div>
          </div>
        ));
      })
      .catch(() => {
        removeAuth(destroyAuth());
        setTimeout(() => {
          navigate('/login');
        }, 4000);
      });
  }, [validateAuth, authState, allMarketplaces]);

  return Protected;
};
