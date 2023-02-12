import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { DiaryStateContext } from './../App';
import { emotionList } from "../util/emotion";

import DiaryDetail from "../components/DiaryDetail";

const Diary = () => {
    const { id } = useParams();
    const navigator = useNavigate();

    const [data, setData] = useState();
    const diaryList = useContext(DiaryStateContext);

    useEffect(()=>{
        if(diaryList.data.length >= 1){
            const targetDiary = diaryList.data.find(
                (it) => parseInt(it.id) === parseInt(id)
            );

            if(targetDiary) {
                setData(targetDiary);
            }
            else {
                alert("없는 일기입니다.");
                navigator("/", {replace: true});
            }
        }
    }, [id, diaryList]);

    if(!data){
        return <div className="DiaryPage">로딩중입니다..</div>
    }else {
        const curEmotionData = emotionList.find((it)=> parseInt(it.emotion_id) === parseInt(data.emotion));

        return (
            <div className="DiaryPage">
                <DiaryDetail
                    key={id} 
                    emotion_descript={curEmotionData.emotion_descript} 
                    {...data} 
                />
            </div>
        );    
    }
}

export default Diary;