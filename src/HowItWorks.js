import React from 'react'


const HowItWorks = () => {

    return(    
        <div className='HowItWorks-container' id='HowItWorks-section'>
            <h1>How it Works?</h1>
            {/* <img className='backGround' src={require('./Imgs/vector\ -\ steps@2x.png')}></img> */}
            <div className='HowItWorks'>
                <div className='HowItWorks-line-one'>
                    <div className='HowItWorks-all-one'>
                        <div>
                            <img src={require('./icons/vector - dummy 2.svg')} alt='b'></img>
                        </div>
                        <div className='HowItWorks-row'>
                            <div className='HowItWorks-content'>
                                <h3>01</h3>
                                <h4>Explore</h4>
                                <p>Shop for your favorite products and see their environmental impact via the Mytreety Sustainability Ranking.</p>
                            </div>
                            <img src={require('./icons/vector - footsteps.svg')} alt='Vector - footsteps'></img>
                        </div>
                    </div>
                    <div className='HowItWorks-all-five'>
                        <div>
                            <img src={require('./icons/vector - dummy 2.svg')} alt='b'></img>
                        </div>
                        <div className='HowItWorks-row'>
                            <div className='HowItWorks-content'>
                                <h3>05</h3>
                                <h4>Relax</h4>
                                <p>Your order will then be dispatched as fast as possible and,if applicable,ina"green" manner.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='HowItWorks-line-two'>
                    <div className='HowItWorks-all-two'>
                        <div>
                            <img src={require('./icons/vector - dummy 2.svg')} alt='b'></img>
                        </div>
                        <div className='HowItWorks-row'>
                            <div className='HowItWorks-content'>
                                <h3>02</h3>
                                <h4>Recognize</h4>
                                <p>Understand how a product protects the environment via the Mytreety Sustainability Icons.</p>
                            </div>
                            <img src={require('./icons/vector - footsteps.svg')} alt='Vector - footsteps'></img>
                        </div>
                    </div>
                    <div className='HowItWorks-all-four'>
                        <div>
                            <img src={require('./icons/vector - dummy 2.svg')} alt='b'></img>
                        </div>
                        <div className='HowItWorks-row'> 
                            <div className='HowItWorks-content'>
                                <h3>04</h3>
                                <h4>Purchase</h4>
                                <p>Order your products and guarantee a 30-day refund period.</p>
                            </div>
                            {/* <img src={require('./Imgs/vector - footsteps@2x - reverse.png')}></img> */}
                        </div>
                    </div>
                </div>
                <div className='HowItWorks-line-three'>
                    <div className='HowItWorks-all-three'>
                        <div>
                            <img src={require('./icons/vector - dummy 2.svg')} alt='b'></img>
                        </div>
                        <div className='HowItWorks-row'>
                            <div className='HowItWorks-content'>
                                <h3>03</h3>
                                <h4>Give-back</h4>
                                <p>Select your preferred charity in the Checkout to which Mytreety will donate 5 %of its commission.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )      
}
export default HowItWorks;