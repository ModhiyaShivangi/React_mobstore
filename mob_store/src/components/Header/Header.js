import headerCSS from './header.module.css';
import headerLogo from './data.png'

function Header() {

    return (

        <nav className={headerCSS.top_nav}>
            
            <img className={headerCSS.header_img} src={headerLogo} alt="alternative"/>

            <ul>  
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

    );
}

export default Header;
