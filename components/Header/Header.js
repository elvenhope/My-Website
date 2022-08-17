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
                    <div>
                        <p>Space Picture of the Day</p>
                    </div>
                </Link>
                <Link href="/SpaceX">
                    <div>
                        <p>SpaceX Latest Launch</p>
                    </div>
                </Link>
                <Link href="/NasaPicture">
                    <div>
                        <p>Picture of the Day</p>
                    </div>
                </Link>
                <Link href="/NasaPicture">
                    <div>
                        <p>Picture of the Day</p>
                    </div>
                </Link>
                <Link href="/NasaPicture">
                    <div>
                        <p>Picture of the Day</p>
                    </div>
                </Link>
            </div>
        </header>
    )
}
