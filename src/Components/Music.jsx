import React from 'react'
import dub from '../Util/dub.mp3'

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio id="dub" ref="audio_tag" src={dub} volume={0.5} controls autoPlay loop/>
      </div>
    );
  }
}

export default AudioPlayer;