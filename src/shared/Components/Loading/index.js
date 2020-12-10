import React from 'react'
// import { ReactComponent as LoadingSVG } from './loading.png'
// import LoadingSVG  from './loading.png'

import './style.scss'
import classnames from 'classnames'

function Loading({ isLoading = '', children, orderStyle }) {
  if (isLoading)
    return (
      <div className={classnames('loding-container', `${orderStyle}`)}>
        <div className="logo">
          {/* <label  className="mt-5 pl-1" style={{fontSize: "22px", fontWeight: 'bold'}}> Loading... </label> */}
          {/* <img src={LoadingSVG} className="mt-5 pl-1 overlay-content rotate" style={{height: '80px', width: '80px', zIndex:-1}} /> */}
        </div>
      </div>
    )
  else return children
}

export default Loading
