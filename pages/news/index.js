// domain/news
// using links to navigate to dynamic generated page
import Link from "next/link"

export default function NewsPage() {
    return (
        <>
            <h1>News page</h1>
            <p>
                Advantage of Link component from NextJs is to provide navigation without re rendering and still being a single page application.
            </p>
            <ul>
                <li>
                    <Link href="/news/docs">
                        Nextjs generated link using Link component
                    </Link>
                </li>
                <li>
                    <a href="/news/nextjs">
                        Harcoded link using a href
                    </a>
                </li>
            </ul>
        </>
    )
}