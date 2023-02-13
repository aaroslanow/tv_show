import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

import style from "./style.module.css";

export function TVShowDetail({tvShow}) {
    const rating = Number(Math.round((tvShow.vote_average / 2) + 'e+1')+'e-1');
    return <div>
                <div className={style.title}>{tvShow.name}</div>
                <div className={style.rating_container}>
                    <FiveStarRating rating = {rating} />
                    <span className={style.rating}>{rating}/5</span>
                </div>
                <div className={style.overview}>{tvShow.overview}</div>

    </div>
}
