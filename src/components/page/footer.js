/** @jsx h */
import { h } from 'preact'
import page from './page.css'
import styles from './footer.css'

const Footer = props => {
  return (
    <div>
      <div class={styles.wrap}>
        <div class={page.pageWidth}>
          <nav class={styles.nav}>
            <ul class={styles.navList}>
              <li><a href="#">Create a channel</a></li>
              <li><a href="#">About Churn</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class={styles.headerGap} />
    </div>
  )
}

export default Footer
