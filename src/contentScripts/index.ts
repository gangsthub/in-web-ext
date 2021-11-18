/* eslint-disable no-console */
import { createApp } from 'vue'
import App from './views/App.vue'
import '../styles'

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  // mount component to context window
  const container = document.createElement('div')
  const root = document.createElement('div')
  const styleEl = document.createElement('link')
  const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
  shadowDOM.appendChild(styleEl)
  shadowDOM.appendChild(root)
  createApp(App).mount(root)

  // wait for page to be done more or less
  requestIdleCallback(() => {
    const profileCard = document.querySelector('.artdeco-card')
    if (profileCard)
      profileCard.insertAdjacentElement('afterend', container)
  })
})()
