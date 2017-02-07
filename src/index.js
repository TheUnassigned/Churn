/** @jsx h */
import { h, render } from 'preact'
import App from './components/app/app'
// import './style'

let root
function init () {
  root = render(<App />, document.body, root)
}

init()
