/** @jsx h */
import { h } from 'preact'
import page from './page.css'
import styles from './hero.css'

const Hero = props => {
  return (
    <div>
      <div class={styles.hero}>
        <div class={page.pageWidth}>
          <div class={styles.heroTitle}>
            <p>Get lost in a forest of video. Or some bullshit.</p>
          </div>
        </div>
      </div>
      <div class={styles.headerGap} />
    </div>
  )
}

export default Hero
