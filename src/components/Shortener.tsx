import { useState } from "react";
import axios from "axios";
import { ShortenedObject } from "../types";

function Shortener({
    shortUrls,
    setShortUrls,
}: {
    shortUrls: ShortenedObject[];
    setShortUrls: React.Dispatch<React.SetStateAction<ShortenedObject[]>>;
}) {
    const [longUrl, setLongUrl] = useState("");
    const [error, setError] = useState(false);

    const BASE_API_URL = "https://api.shrtco.de/v2/shorten?url=";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted -> ", longUrl);

        if (longUrl === "") {
            setError(true);
            return;
        }

        const response = axios.get(`${BASE_API_URL}${longUrl}`);

        response
            .then((res) => {
                console.log("reponse shorter api -> ", res.data);

                const objectToSave = {
                    originalUrl: res.data.result.original_link,
                    shortUrl: res.data.result.short_link,
                };

                setShortUrls([...shortUrls, objectToSave]);
                console.log('Saved object -> ', objectToSave);
            })
            .catch((err) => {
                console.log("error -> ", err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                    className={`${error ? "input-error" : ""}`}
                    type="text"
                    placeholder="Shorten a link here..."
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                />
                <span className={`${error ? "visible" : "invisible"}`}>
                    Please add a link
                </span>
            </div>
            <button className="hoovered" type="submit">
                Shorten It!
            </button>
        </form>
    );
}

export default Shortener;
