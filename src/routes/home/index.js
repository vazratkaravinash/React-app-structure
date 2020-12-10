import React, { Fragment } from 'react'
import enhancer from './enhancer'
import './style.scss'


function Home(props) {
    const {
        top_classes,
        categories,
        updateData, selectedTargetVal,
        loader
    } = props
  
    return (
        <Fragment>
                <div className="container-fuild">
                    <div className="row pt-5 pl-3">
                        <div className="list-search-row d-flex flex-grow-1 align-items-center">
                            
                        </div>
                    </div>
                 </div>
        </Fragment>
    )
}

export default enhancer(Home)


