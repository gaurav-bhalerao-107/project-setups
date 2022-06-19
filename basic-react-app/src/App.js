import api from './api';

function App() {
  const backendAPICall = () => {
    api
      .get('/users/')
      .then(response => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div className="App text-center">
      <h1 className="text-3xl font-bold mt-5">Gaurav Bhalerao - MERN Project Setup</h1>
      <button className="btn btn-priamry mt-5" onClick={backendAPICall}>API CALL</button>
    </div>
  );
}

export default App;
