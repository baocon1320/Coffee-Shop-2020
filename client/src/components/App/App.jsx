import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, Suspense, useEffect } from 'react';
import Footer from '../ClientView/CommonView/Footer/Footer';
import SpinnerView from '../ClientView/CommonView/SpinnerView/SpinnerView';
import AlertPanel from '../ClientView/CommonView/AlertPanel/AlertPanel';// handle error
// For send request and handle request error
import useHttpClient from '../../share/hook/http-hook';
import ManagerView from '../ManagerView/ManagerView';
import ClientView from '../ClientView/ClientView';


//export default class App extends Component {
function App() {
  const [infoData, setInfoData] = useState();
  //const [error, setError] = useState();
  //const [alert, setAlert] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);

  const {isLoading, alert, error, sendRequest, alertHandler} = useHttpClient();


  // useEffect to fetch the data for the first time only without redenring
  useEffect(() => {
    const fetchData = async () => {
      try{
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/info');
        setInfoData(responseData);
      }  catch (err){

      };
    };
    fetchData();

  }, [sendRequest]);


  // Update the main page when info is update
  function updateInfodata(newInfodata){
    setInfoData(newInfodata);
}

  return (
    <React.Fragment>
      <AlertPanel onClose={alertHandler} heading="HomePage Loading Error" content={error} alert={alert}></AlertPanel>
      {!isLoading && infoData && (
        <Router>
          <Suspense
            fallback={
              <div>
                <h1>Loading...</h1>
              </div>
            }
          >
            <Routes>
              <Route path="/baocon/*" element={<ManagerView updateInfodata={updateInfodata}
               infoData={infoData} />} />
              <Route path="/*" element={<ClientView infoData={infoData} />} />
            </Routes>
          </Suspense>
          <Footer infoData={infoData} />
        </Router>
      )}
      {isLoading && <SpinnerView role="loading" />}
    </React.Fragment>
  );
}

export default App;
