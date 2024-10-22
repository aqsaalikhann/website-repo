import Link from "next/link";
import Style from "./header.module.css";


const Header =() =>{
    return (
    <header className={Style.header}>
    <h1>ShopZone</h1>
    <p>"Where savings meet style"</p>
    <nav className="nav">
        <ul className="ul">
            <li className="li"><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
    </header>
    )
};
export default Header;