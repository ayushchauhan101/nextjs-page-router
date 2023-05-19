// this will be a dynamic page [-unique-identifier-]
import { useRouter } from "next/router"

export default function DetailPage() {
    const router = useRouter();

    // mention the identifier
    const identifier = (router.query.newsId)

    return (
        <div>
            <h1>This is dynamic generated page</h1>
            <h3>
                You are viewing {' '}
                {!(identifier) ? '--loading--' : identifier + ' '}
                page.
            </h3>
        </div>
    )
}