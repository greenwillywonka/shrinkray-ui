import { useState } from "react";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
import styles from '../components/Button.module.css'; 



const AddLink = () => {
    const [linkName, setLinkName] = useState("");
    const [linkUrl, setLinkUrl] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const shortUrl = nanoid(6);
        const apiUrl = "https://bzzt.fun/api/urls";

        const body = {
            "long_url": linkUrl,
            "short_url": shortUrl,
            "title": linkName,
            "user_id": 1
        };

        try {
            const repsonse = await fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await repsonse.json();
            console.log("Data: ", data);
            navigate("/links");

        } catch (error) {
            console.error(error);
        }
    };

    return <>
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
            <label>
                Name of Link
                <input type="text"
                    name="linkName"
                    value={linkName}
                    onChange={(e) => setLinkName(e.target.value)}
                />
            </label>
            <label>
                URL of Link
                <input type="text"
                    name="linkUrl"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                />
            </label>
            <button type="submit" classname={styles.btn} >ZAP IT!</button>
        </form>
    </>;

};
export default AddLink;


