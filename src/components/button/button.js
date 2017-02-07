/** @jsx h */
import { h } from 'preact'
import styles from './button.css'

const Button = props => {
  return (
    <a href={props.link} class={styles.btn}>{props.text}</a>
  )
}

export default Button
