import React from 'react'

function Loader(props) {
  return (
    <div className="main-loader">
            <div className='loader'>
            </div>
            <h4>{props.loaderTag}</h4>
    </div>
  )
}

export default Loader;