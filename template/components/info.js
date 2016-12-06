import html from 'yo-yo'
import header from './header'
import button from './buttons/custom'
import link from './buttons/link'

module.exports = (state, dispatch) => html`
    <div>
      ${header(state, dispatch)}
      ${button('back', dispatch, 'CHANGE_ROUTE', '/')}
      <h3>Technologies used</h3>
      <p><a target="_blank" href='https://www.npmjs.com/package/yo-yo'>yo-yo</a></p>
      <p><a target="_blank" href='https://www.npmjs.com/package/sheet-router'>sheet-router</a></p>
      <p><a target="_blank" href='https://www.npmjs.com/package/redux'>redux</a></p>
      ${button('lemon', dispatch, 'CHANGE_ROUTE', '/lemon')}
    </div>
  `
