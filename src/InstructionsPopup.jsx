import React from 'react';
import Popup from 'reactjs-popup';

function InstructionsPopup() {

  return <Popup
    trigger={<button className="button"> How to Play </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="header"> How to Play </div>
        <div className="content">
          {' '}
          Press the "Start Game" button and then use the arrow keys to move the snake (green squares). If the snake's head hits the wall of the grid or runs into itself it's game over. Eating the food (red squares) will cause the snake to grow and add a point to your score but also make the game increasingly difficult. Enjoy!
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
  
}

export default InstructionsPopup