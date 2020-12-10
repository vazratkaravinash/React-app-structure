import React, { Fragment } from 'react'

function Thankyou(props) {
    
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12 text-center">
                    Your Score is <b>{props.score}.</b>
                </div>
                <div className="col-md-12 text-center">
                    Thank you!
                </div>
                <div className="col-md-12 text-center">
                   <button onClick={props.logout}>Logout</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Thankyou


