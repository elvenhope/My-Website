import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className='HeaderTitle'>
                <Link href="/">
                    <p>Dark&apos;s Website</p>
                </Link>
            </div>
            <div className='NavBar'>
                <Link href="/NasaPicture">
                    <div className='HeaderObject'>
                        <p>Space Picture of the Day</p>
                    </div>
                </Link>
                <Link href="/TodoList">
                    <div className='HeaderObject'>
                        <p>Public Board</p>
                    </div>
                </Link>
                <Link href="/Nutrients">
                    <div className='HeaderObject'>
                        <p>Nutrient Calculator</p>
                    </div>
                </Link>
            </div>
        </header>
    )
}
