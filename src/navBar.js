import React from 'react';
import './App.css'

function NavBar(props) {
    return (
        <div className='contStyle'>
            <ul className='ulStyle'>
                {
                    props.data.map(el => el.subMenu ?
                        <div className='main-menu'>
                            <a href="#">{el.title}</a>
                            <ul className='subMenuStyle'>
                                {el.subMenu.map(el => <li><a href ="#">{el}</a></li>)}
                            </ul>
                        </div>
                        :
                        <li><a href ="#">{el.title}</a></li>

                    )}
            </ul>
        </div>
    )
}


export default NavBar;



