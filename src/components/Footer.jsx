import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer>
            <div className="listContainer">
                <div className="list">
                    <h4>Store</h4>
                    <div className="linksTo">
                        <Link className='linksFooter' style={{textDecoration:'none', color:'#fff',}}  onClick={() => window.scrollTo(0, 0)} to="/">Home</Link>
                        <a href="#">About</a>
                        <a href="#">Journal</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="list">
                    <h4>Shop</h4>
                    <div className="linksTo">
                        <a href="#">All</a>
                        <a href="#">Lookbook</a>
                        <a href="#">Collections</a>
                        <a href="#">Featured</a>
                    </div>
                </div>
                <div className="list">
                    <h4>Collections</h4>
                    <div className="linksTo">
                        <a href="#">Decors</a>
                        <a href="#">Furnitures</a>
                        <a href="#">Ceramic</a>
                        <a href="#">Lamps</a>
                    </div>
                </div>
                <div className="list">
                    <h4>Help</h4>
                    <div className="linksTo">
                        <Link className='linksFooter' style={{textDecoration:'none', color:'#fff',}}  onClick={() => window.scrollTo(0, 0)} to="/contact">Contact</Link>
                        <a href="#">Login & Account</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Refund Policy</a>
                    </div>
                </div>
            </div>
            <p>© ARUSA 2022 | AGUSTIN SALADINO</p>
        </footer>
    </>
  )
}

export default Footer