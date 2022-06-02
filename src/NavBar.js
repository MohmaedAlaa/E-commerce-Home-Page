import React from 'react'


const Navbar = () => {

    return (
        <div>
            <div className="navBar" id='naBar'>
                <p>Free shipping in all products!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30 days refund period</p>
                <div className='navBottons'>
                    <button>
                        <a href='/#' className='mytreetyPlus'>Mytreety <span>Plus</span></a>
                    </button>
                    <button>
                        <a href='##' className='help'><img src={require('./icons/Icon - help.svg')} alt='Icon - help'></img> Help</a>
                    </button>
                    <button>
                        <a href='###' className='Deutsch'><img src={require('./icons/Icon - language.svg')} alt='Icon - language'></img> Deutsch</a>
                    </button>
                </div>
            </div>
        </div>
        
      )
}
export default Navbar