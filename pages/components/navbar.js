import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={100} height={80}/>
            </div>
            <Link legacyBehavior href="/"><a>Home</a></Link>
            <Link legacyBehavior href="/about"><a>About</a></Link>
            <Link legacyBehavior href="/contact"><a>Contact</a></Link>
        </nav>
     );
}
 
export default Navbar;