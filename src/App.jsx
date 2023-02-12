import { useState } from "react";
import { useEffect } from "react";
import { TVShowAPI } from "./api/tv-show"
import { BACKDROP_BASE_URL } from "./config";
import style from "./style.module.css"

export function App(){
    const [currentTVShow,setCurrentTVShow] = useState();

    async function fetchPopulars() {
        const popularTShowList = await TVShowAPI.fetchPopulars();
        if(popularTShowList.length>0){
            setCurrentTVShow(popularTShowList[0]);
        }
    }
    useEffect(() => {
        fetchPopulars();   
    }, []);
    console.log(currentTVShow);


    return <div className={style.main_container} 
            style={{
                background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` : "black" }}>
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <div>LOGO</div>
                        <div>SUBTITLE</div>
                    </div>
                    <div className ="col-md-12 col-lg-4">
                        <input style={{width:"100%"}} type="text" />
                    </div>
                </div>
            </div>
            <div className={style.tv_show_detail}></div>
            <div className={style.recommended_tv_shows}></div>
         </div>
}