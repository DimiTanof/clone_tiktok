import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Video from './components/Video';
import Header from './components/Header';
import Sidebar from './components/Sidebar.jsx';
import db from './firebase';
import { useEffect, useState } from 'react';

db.collection("videos").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " =>", doc.data());
  });
});


function App() {
  
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const querySnapshot = await db.collection('videos').get();
      const videoData = querySnapshot.docs.map((doc) => doc.data());
      setVideos(videoData);
    };
    fetchVideos();
  }, []);
  useEffect(() => {
    document.getElementById('focus').focus();
  }, []);
  
    return (
    <div>
      <Header />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div id='focus' tabIndex="1" className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden">
            {videos.map((video) => (
              <Video data={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
