import style from "./style.module.css";
import { SMALL_IMG } from "../../config";
const MAX_TITLE_CHAR = 20;
export function TVShowListItem({tvShow, onClick}){

    const onClick_ = () => {
        onClick(tvShow);
    };

    return (
        <div onClick={onClick_} className={style.container}>
            <img alt={tvShow.name} src={SMALL_IMG + tvShow.backdrop_path}
            className={style.img}
             />
             <div className={style.title}>
                {tvShow.name.length > MAX_TITLE_CHAR
                ? tvShow.name.slice(0,MAX_TITLE_CHAR) + "..."
                : tvShow.name}
             </div>
        </div>
    )
}