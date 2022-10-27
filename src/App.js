import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './components/SearchBar';
import PhotoList from './components/PhotoList';

import unsplash from './Api';

export default function App() {
  const [pics, setPics] = React.useState([]);

  const fetchPhotos = page => {
    unsplash.photos
    .list({
      page: page,
      perPage: 15,
      orderBy: 'latest',
    })
    .then(response => {
      console.log(response);
      const newPics = pics.concat(response.response.results);

      setPics(newPics);
    });
  };

  const handleResponse = response => {
    setPics(response);
  };
  
  return (
    <div className="App">
      <h1 className="brand">Unsplash API</h1>
      <SearchBar onResponseReturn={handleResponse} />
      <PhotoList photoList={pics} loadMore={fetchPhotos}/>
    </div>
  );
}