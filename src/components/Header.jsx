import React from 'react';

const ArticleItem = ({ article }) => {
    return (
        <header>
            {/* <!-- logo --> */}
            <a className="logo" href="#hero">Logo</a>
            {/* <!-- navbar --> */}
            <nav className="nav-bar">
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="icon-container blue-color" >
                                <i className="fa fa-brands fa-facebook"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="icon-container red-color">
                                <i className="fa fa-brands fa-instagram"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="icon-container mustard-color">
                                <i className="fa fa-brands fa-youtube"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="menu-icons">
                <i className="bx bx-menu"></i>
                <i className="bx bx-x"></i>
            </div>
        </header>)

}

export default ArticleItem;