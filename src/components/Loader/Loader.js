import React from 'react';
import SpinLoader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// export default class App extends Component {
  const Loader =()=>{
    return (
      <SpinLoader
        type="Watch"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={500} //0.5 secs
      />
    );
}
export default Loader;
