import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import MyHeader from './../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryEditor from '../components/DiaryEditor';

const New = () => {
    return (
        <div>
            <DiaryEditor />
        </div>
    )
}

export default New;