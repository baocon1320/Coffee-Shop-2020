import React, { useState, useCallback, useEffect } from 'react';
import CategoryManagerView from './CategoryManagerView/CategoryManagerView';
import InfoManagerView from './InfoManagerView/InfoManagerView';
import LoginView from './LoginView/LoginView';
import ProductManagerView from './ProductManagerView/ProductManagerView';
import { Routes, Route } from 'react-router-dom';
import ManagerNavBar from './ManagerCommonView/ManagerNavBar/ManagerNavBar'
import BackgroundImageManagerView from './BackgroundImageManagerView/BackgroundImageManagerView';
import { AuthContext } from '../../share/context/auth-context';

// For send request and handle request error
import useHttpClient from '../../share/hook/http-hook';
import LoginFailureView from './LoginFailureView/LoginFailureView';

function ManagerView(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;


    // http-hook
    const { sendRequest } = useHttpClient();

    // useEffect to fetch the data for the first time only without redenring
    useEffect(() => {
        const fetchData = async () => {
            try {
                await sendRequest(process.env.REACT_APP_BACKEND_URL + '/auth/google/success', 
                'GET', null, {}, 'include');
                //console.log(response);
                //console.log(response.status);
                //console.log("login success");
                setIsLoggedIn(true);
            } catch (err) {
                setIsLoggedIn(false);
            };
        };
        fetchData();

    }, [sendRequest]);


    if (isLoggedIn) {
        routes = (
            <Routes>
                <Route path='/*' element={<InfoManagerView
                    infoData={props.infoData} updateInfodata={updateInfodata} />} />
                <Route path='/info' element={<InfoManagerView
                    infoData={props.infoData} updateInfodata={updateInfodata} />} />
                <Route path='/image'
                    element={<BackgroundImageManagerView infoData={props.infoData}
                        updateInfodata={updateInfodata} />} />
                <Route path='/category' element={<CategoryManagerView />} />
                <Route path='/product' element={<ProductManagerView />} />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path='/*' element={<LoginView />} />
                <Route path='/login' element={<LoginView />} />
                <Route path='/login-failure' element={<LoginFailureView />} />
            </Routes>
        )
    }

    // Update the main page when info is update
    function updateInfodata(newInfodata) {
        props.updateInfodata(newInfodata);
    }
    return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }} >
            <ManagerNavBar />
            {routes}
        </AuthContext.Provider>

    );
}

export default ManagerView;