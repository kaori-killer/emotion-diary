import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MyHeader from './../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryEditor from '../components/DiaryEditor';

const New = () => {
    

    useEffect(() => {
        const titleElement = document.getElementsByTagName("title")[0];
        titleElement.innerHTML = `감정 일기장 - 새 일기`;
    }, []);

    return (
        <div>
            <DiaryEditor />
        </div>
    )
}

export default New;