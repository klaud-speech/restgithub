import './App.css';
import React, {useState} from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://api.github.com/search/repositories?q={keyword}')
      .then(response=>response.json())
      .then(data=>setData(data.items))
      .catch( err=> console.error(err))    
  }

  const columns = [
    {field: 'full_name'},
    {field: 'html_url'},
    {field: 'owner.login'}
  ]

  return (
    <div className="App">
      <input value={keyword}
        onChange={( e=>setKeyword(e.target.value))} />
      <button onClick={fetchData}>Fetch</button>

      <div className="ag-theme-material" style={ {height: 500 , width: '90%'} }>
        <AgGridReact
          rowData={data}
          columnDefs={columns}
        />
      </div>

    </div>
  );
}

export default App;
