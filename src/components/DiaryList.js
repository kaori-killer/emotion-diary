import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from './MyButton';
import DiaryItem from './DiaryItem';

const sortOptionList = [
    { value: "latest", name: "최신순"},
    { value: "oldest", name: "오래된 순"},
];

const filterOptionList = [
    { value: "all", name: "전부다"},
    { value: "good", name: "좋은 감정만"},
    { value: "bad", name: "안좋은 감정만"},
];

// React memo로 onChange가 잘 동작하는 이유는 useState에서 만든 함수이기 때문이다.
const ControlMenu = React.memo(({ value, onChange, optionList }) => {
    return (
        <select className="ControlMenu" value={value} onChange={(e)=>onChange(e.target.value)}>
            {optionList.map((it, idx)=>
            <option key={idx} value={it.value}>
                {it.name}
            </option>)}
        </select>
    );
})

const DiaryList = ({ diaryList }) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("all");

    const getProcessDiaryList = () => {
        // sort로 정렬을 하게 되면 원본 배열이 정렬이 된다.
        // 이를 방지하기 위해 배열을 copy하고 정렬한다. (배열 -> 문자열 -> 배열) [깊은 복사]
        const compare = (a, b) => {
            if(sortType === "latest")
                return parseInt(b.date) - parseInt(a.date);
            else 
                return parseInt(a.date) - parseInt(b.date); 
        }

        const filterCallBack = (item) => {
            if(filter === "good"){
                return parseInt(item.emotion) <= 3
            }
            else {
                return parseInt(item.emotion) > 3
            }
        }
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const filteredList = filter === "all" ? copyList : copyList.filter((it)=>filterCallBack(it));
        const sortedList = filteredList.sort(compare);
        return sortedList;
    };
    
    return(
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <ControlMenu 
                        value={sortType}
                        onChange={setSortType}
                        optionList={sortOptionList}
                    />
                    <ControlMenu
                        value={filter}
                        onChange={setFilter}
                        optionList={filterOptionList}
                    />
                </div>
                <div className="right_col">
                    <MyButton type={"positive"} text={"새 일기쓰기"} onClick={()=>navigate("/new")}/>
                </div>
            </div>
            {getProcessDiaryList().map((it) => {
                return <DiaryItem key={it.id} {...it}/>
            })}
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList: [],
}
export default DiaryList;