import Footer from "./Footer";
import Navbar from "./navbar";

{/**Check comment in _app.js for children components */}
const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar/>
            {/**renders all the page content */}
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;