/** @jsx h */
import { h } from 'preact'
import Header from '../page/header'
import Hero from '../page/hero'
import Footer from '../page/footer'
import ChannelFan from '../channel/channelFan'
import ChannelTile from '../channel/channelTile'
import page from '../page/page.css'
import styles from './channels.css'

const Channels = props => {
  return (
    <div class={page.container}>
      <div class={page.header}>
        <Header />
      </div>
      <div class={page.hero}>
        <Hero />
      </div>
      <div class={page.main}>
        <div class={styles.favourites}>
          <div class={page.section}>
            <div class={page.pageWidth}>
              <h2 class={page.sectionTitle}>Our favourite channels</h2>
              {props.channels.map(channel => {
                return <div class={styles.channelFanItem}><ChannelFan channel={channel} /></div>
              })}
            </div>
          </div>
        </div>
        <div class={styles.more}>
          <div class={page.section}>
            <div class={page.pageWidth}>
              <h2 class={page.sectionTitle}>More channels</h2>
              <div class={styles.channelGrid}>
                {props.channels.map(channel => {
                  return <div class={styles.channelGridItem}><ChannelTile channel={channel} /></div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={page.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Channels
