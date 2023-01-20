import { useEffect, useState } from "react";
import developers from "../mockData/developers.json";
import qualities from "../mockData/qualities.json";
import comments from "../mockData/comments.json";
import favourites from "../mockData/favourites.json";
import httpService from "../services/http.service";

const useMockData = () => {
    const statusConsts = {
        idle: "Not started",
        pending: "In Process",
        successed: "Ready",
        error: "Error occured"
    };
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summuryCount =
        developers.length +
        qualities.length +
        comments.length +
        favourites.length;

    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };
    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summuryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };
    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const comment of comments) {
                await httpService.put("comments/" + comment.id, comment);
                incrementCount();
            }
            for (const favourite of favourites) {
                await httpService.put("favourites/" + favourite.id, favourite);
                incrementCount();
            }
            for (const develop of developers) {
                await httpService.put("developers/" + develop.id, develop);
                incrementCount();
            }
            for (const qual of qualities) {
                await httpService.put("qualities/" + qual.id, qual);
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }

    return { error, initialize, progress, status };
};

export default useMockData;
