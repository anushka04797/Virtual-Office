import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css';
import "react-datetime/css/react-datetime.css";
import withClearCache from "./ClearCache";
import { useHistory } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ClearCacheComponent = withClearCache();

// Pages

const App = () => {
  return (
    <>
      <ClearCacheComponent />;
    </>
  )
}
export default App;
