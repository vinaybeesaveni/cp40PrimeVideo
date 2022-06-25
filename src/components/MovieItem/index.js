import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {img, url} = props
  return (
    <Popup
      trigger={<img src={img} alt="thumbnail" className="image" />}
      modal
      className="popup-content"
    >
      {close => (
        <>
          <div className="popup">
            <button
              type="button"
              className="close-btn"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={url} width="550px" height="300px" controls />
          </div>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
