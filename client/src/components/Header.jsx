import React from 'react'
import Logo from '../components/logo'
import Search from '../components/search'
import User from '../components/user'

export default function Header(){
    return(
        <div>
            <header className='p-4 flex justify-between'>
                <Logo />
                <Search />
                <User />
            </header>
        </div>
    )
}