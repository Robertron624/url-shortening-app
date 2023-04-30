import { ShortenedObject } from "../types";

function ShortenerResult({originalUrl, shortUrl}: ShortenedObject ) {
    return (
        <div className="shortener-result">
            <p>{originalUrl}</p>
            <p>{shortUrl}</p>
            <button className="hoovered">Copy</button>
        </div>
    );
}

export default ShortenerResult;
