import { useState } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'
import { Header } from '../components/Header'
import { Player } from '../components/Player'

import '../styles/globals.scss'
import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setIsPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, isPlaying, play, togglePlay, setIsPlayingState }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
