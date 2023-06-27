
import './App.css';
import { Parallax } from 'react-parallax';
import sunset from './utils/sunset.jpg';
import butterfly from './utils/butterfly.jpg';
import finch from './utils/finch.jpg';
import flower from './utils/flower.jpg';
import bird from './utils/bird.jpg';
function App() {
  return (
    <div className="App">
        <Parallax strength={200} bgImage={bird}>
          <div className='content'>
            <h1 className='text-content'>Normal Parallax</h1>
          </div>
        </Parallax>

        <Parallax strength={200} blur={{min:-5, max:15}} bgImage={butterfly}>
          <div className='content'>
            <h1 className='text-content'>Blur Parallax</h1>
          </div>
        </Parallax>

        <Parallax strength={-200} bgImage={finch}>
          <div className='content'>
            <h1 className='text-content'>Reverse Parallax</h1>
          </div>
        </Parallax>

        {/* <Parallax strength={600} bgImage={sunset}>
          <div className='content'>
            <h1 className='text-content'>Nomal Parallax</h1>
          </div>
        </Parallax> */}

        {/* <Parallax strength={600} bgImage={flower}>
          <div className='content'>
            <h1 className='text-content'>Nomal Parallax</h1>
          </div>
        </Parallax> */}
    </div>
  );
}

export default App;
