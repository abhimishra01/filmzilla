import "./footer.css"
import Emoji from 'a11y-react-emoji'

const FooterBar = () => {
    return ( <footer>
        <h3 class='copyright'> Made with <Emoji symbol="💖" label="love"/> by Abhishek Mishra </h3>
        <div className="footer_link">
            {/* <a href="https://www.linkedin.com/in/moonwalkerabhi/">
                Contact the developer
            </a> */}
        </div>
    </footer> );
}
 
export default FooterBar;