import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Odi from './Odi';
import Test from './Test';
import T20 from './T20';

const App = () => {

  const [data, setData] = useState([]);

  const Api_Key = 'csCxHLpjzOT9zrdReK8jYEuQvp43';
  // const Api_Key = 'qZnM0O90ToVsLfLIjBiq9GvT93B2';
  useEffect(() => {
    async function get() {
      const res = await axios.get(`https://cricapi.com/api/matches?apikey=${Api_Key}`);

      setData(res.data.matches);
      console.log(res);
    }
    get();

  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Odi data={data} />} />
        <Route exact path="/t20" render={() => <T20 data={data} />} />
        <Route exact path="/test" render={() => <Test data={data} />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
