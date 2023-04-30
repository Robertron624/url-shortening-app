import { ShortenedObject } from "../types";
import { useState } from "react";

function ShortenerResult({originalUrl, shortUrl}: ShortenedObject ) {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
    }

    return (
        <div className="shortener-result">
            <p className="original-url">{originalUrl}</p>
            <p className="short-url">{shortUrl}</p>
            <button onClick={handleCopy} className={`hoovered ${copied ? 'copied' : 'not-copied'}`}>{copied ? 'Copied!': 'copy'}</button>
        </div>
    );
}

export default ShortenerResult;
