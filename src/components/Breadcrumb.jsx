import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section className='page-title'>
            <div className='container'>
                <ul className='breadcrumb'>
                    <li><i className="fa-regular fa-house"></i></li>
                    <li><Link to="/">Home</Link></li>
                    <li><i className="fa-solid fa-chevrons-right"></i></li>
                    {
                        pathnames.map((value, index) => {
                            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                            return (
                                <li key={to}>
                                    { index === pathnames.length - 1
                                        ? (<span>{value.replace(/-/g, ' ')}</span>)
                                        : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}
                                </li>
                            )
                        })
                    } 
                </ul>
            </div>
        </section>
    )
}

export default Breadcrumb