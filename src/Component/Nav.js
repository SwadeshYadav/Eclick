// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping, faAddressBook, faListUl } from '@fortawesome/free-solid-svg-icons'
// import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
// export default function Nav() {


//     return (
//         <div>

//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand fw-bold fs-3" to="/" style={{ color: 'red' }}>Shopping</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto mx-5 mb-2 mb-lg-0 fw-bold fs-5">

//                             <li className="nav-item mx-3">
//                                 <FontAwesomeIcon icon={faListUl} /> Products
//                             </li>
//                             <li className="nav-item mx-3">
//                                  <FontAwesomeIcon icon={faAddressCard} /> About
//                             </li>
//                             <li className="nav-item mx-3">
//                                <FontAwesomeIcon icon={faAddressBook} /> Contact us
//                             </li>


//                         </ul>
//                         <i class="fa-light fa-cart-shopping"></i>
//                         <div className="buttons">
//                             <span className='btn btn-outline-dark mx-2' to="/Login"><i class="fa fa-user"></i> Login </span>

//                             <span className='btn btn-outline-dark' to="/Logout"><i class="fa fa-user"></i>Logout</span>


//                             <span className='btn btn-outline-dark mx-2' to="/cart"><FontAwesomeIcon icon={faCartShopping} />Cart (0)</span>
//                         </div>

//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }




import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faAddressBook, faListUl } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
export default function Nav() {


    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" to="/" style={{ color: 'red' }}>Shopping</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mx-5 mb-2 mb-lg-0 fw-bold fs-5">

                            <li className="nav-item mx-3">
                              <FontAwesomeIcon icon={faListUl} /> Products
                            </li>
                            <li className="nav-item mx-3">
                               <FontAwesomeIcon icon={faAddressCard} /> About
                            </li>
                            <li className="nav-item mx-3">
                           <FontAwesomeIcon icon={faAddressBook} /> Contact us
                            </li>


                        </ul>
                        <i class="fa-light fa-cart-shopping"></i>
                        <div className="buttons">
                            <Link className='btn btn-outline-dark mx-2' to="/Login"><i class="fa fa-user"></i> Login </Link>

                            <Link className='btn btn-outline-dark' to="/Logout"><i class="fa fa-user"></i>Logout</Link>


                            <Link className='btn btn-outline-dark mx-2' to="/cart"><FontAwesomeIcon icon={faCartShopping} />Cart (0)</Link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}
