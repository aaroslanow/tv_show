import { useState } from "react";
import { useEffect } from "react";
import { TVShowAPI } from "./api/tv-show"
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import logoImg from "./assets/images/logo2.png";
import {Logo} from "./components/Logo/Logo" ;
import style from "./style.module.css";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App(){
    const [currentTVShow,setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    async function fetchPopulars() {
        try{
        const popularTShowList = await TVShowAPI.fetchPopulars();
        if(popularTShowList.length>0){
            setCurrentTVShow(popularTShowList[0]);
        }
    }catch(error){
        alert("something went wrong when fetching popular tv shows")
    }
    }
    
    async function fetchRecommendations(tvShowId){
        try{
        const recommendedTVShowList = await TVShowAPI.fetchRecomendations(tvShowId);
        if(recommendedTVShowList.length > 0){
            setRecommendationList(recommendedTVShowList.slice(0,10));
        }
    }catch(error){
        alert("something went wrong when fetching popular tv shows")
    }
    }

    async function fetchByTitle(title){
        try{
        const searchResp = await TVShowAPI.fetchByTitle(title);
        if(searchResp.length > 0){
            setCurrentTVShow(searchResp[0]);
        }
    }catch(error){
        alert("something went wrong when fetching popular tv shows")
    }
    }

    useEffect(() => {
        fetchPopulars();   
    }, []);
    console.log(currentTVShow);

    useEffect(() => {
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id);
        }
    },[currentTVShow]);
    console.log(recommendationList);


    function updateCurrentTVShow(tvShow) {
        setCurrentTVShow(tvShow);
    }

    return <div className={style.main_container} 
            style={{
                background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` : "black" }}>
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo img={logoImg} title="costam" subtitle=" cocococ" />

                    </div>
                    <div className ="col-md-12 col-lg-4">
                       <SearchBar onSubmit={fetchByTitle} />
                    </div>
                </div>
            </div>
            <div className={style.tv_show_details}>
                {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
            </div>
            <div className={style.recommended_tv_shows}>
            {currentTVShow && <TVShowList onClickItem ={updateCurrentTVShow} tvShowList={recommendationList} />}
            </div>
         </div>
}