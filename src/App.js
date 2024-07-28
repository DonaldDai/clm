import './App.css';
import { StandaloneStructService } from 'ketcher-standalone'
import { Ketcher } from 'ketcher-core';
import { useEffect, useRef, useState } from 'react';

const structServiceProvider = new StandaloneStructService()
const ketcher = new Ketcher({}, structServiceProvider, {});

function App() {
  const [imgLink, setImgLink] = useState('');

  useEffect(() => {
    ketcher.generateImage('Oc1ccccc1', {
      outputFormat: 'svg',
      backgroundColor: "255, 255, 255"
    }).then((res) => {
      const url = window.URL.createObjectURL(res);
      setImgLink(url)
    })
  }, [])
  return (
    <div className="App">
      <img src={imgLink} alt='SMILES'/>
    </div>
  );
}

export default App;
