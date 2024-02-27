import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './state';

function App() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.image.photos)
  const isLoading = useSelector(state => state.image.isLoading)

  useEffect(() => {
    dispatch(getPhotos())
  },[])

  return (
    <div className="App">
      <h1>PHOTO</h1>
      <hr />

      {isLoading ? (
        <div>...</div>
      ) : (
        <div className=''>
          {photos.length > 0 ? (
            photos.map(photo =>
              <img
                key={photo.id} 
                src={photo.download_url}
                alt={photo.author}
                width='400'
                height='400'
              />  
            )
          ) : (
            <div>Failed</div>
          )}
        </div>
      )}

      <button>VIEW MORE</button>
    </div>
  );
}

export default App;
