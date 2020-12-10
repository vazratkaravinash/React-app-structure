import React, { Fragment } from 'react'
import { random } from 'underscore'
import enhancer from './enhancer'
import './style.scss'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'
import six from '../../assets/6.png'
import Thankyou from './thankyou'
function Dashboard(props) {
    const {
        randomNumber,
        clickRandom,
        counter,
        score,
        isFiveSecoundFlag,
        logout
    } = props
    console.log(isFiveSecoundFlag)
    return (
        <Fragment>

            <div className="row p-5 m-5">
                {(counter !== 3 || isFiveSecoundFlag) && <div className="col-md-12 text-center">
                    Game {counter}/3
            </div>}
                {(counter !== 3 || isFiveSecoundFlag) && <div className="col-md-12 box-size text-center">
                    {randomNumber == 0 && <img src={one} />}
                    {randomNumber == 1 && <img src={two} />}
                    {randomNumber == 2 && <img src={three} />}
                    {randomNumber == 3 && <img src={four} />}
                    {randomNumber == 4 && <img src={five} />}
                    {randomNumber == 5 && <img src={six} />}

                </div>}
                {counter == 0 && <div className="col-md-12 text-center">
                    Click Random to start the game.
                </div>}
                <div className="col-md-12 text-center">
                    {(counter < 3) && <button onClick={clickRandom}>Random</button>}
                    {counter === 3 && !isFiveSecoundFlag && <Thankyou logout={logout} score={score} />}

                </div>
                <div>

                </div>
            </div>
        </Fragment >
    )
}

export default enhancer(Dashboard)


