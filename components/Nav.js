import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="nav p-3 border-bottom">
            <Link href="/" passHref>
                <h2 className="pointer">John Constantine</h2>
            </Link>
            <Link href="/bio" passHref>
                <h2 className="ms-5 pointer">Bio</h2>
            </Link>
        </nav>
    )
}