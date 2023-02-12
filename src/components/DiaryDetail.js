import { useNavigate } from 'react-router-dom';

import MyHeader from './MyHeader';
import MyButton from "./MyButton";

import { getStringDate } from "../util/date"

const Diary2 = ({id, emotion_descript, emotion, content, date }) => {
    const navigator = useNavigate();

    return (
        <div className="DiaryDetail">
            <MyHeader 
                leftChild={<MyButton text={"< 뒤로가기"} onClick={()=> navigator(-1)} />}
                headText={`${getStringDate(new Date(date))} 기록`}
                rightChild={<MyButton text={"수정하기"} onClick={()=> navigator(`/edit/${id}`)} />}
            />
            <article>
                <section>
                    <h4>오늘의 감정</h4>
                    <div className={[
                        "diary_img_wrapper", 
                        `diary_img_wrapper_${emotion}`
                    ].join(" ")}>
                        <img src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`} />
                        <div className="emotion_descript">  
                            {emotion_descript}
                        </div>
                    </div>
                </section>
                <section>
                    <h4>오늘의 일기</h4>
                    <div className="diary_content_wrapper">
                        <p>{content}</p>
                    </div>
                </section>
            </article>
        </div>
    );
}

export default Diary2;