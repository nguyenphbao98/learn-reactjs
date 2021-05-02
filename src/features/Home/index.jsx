import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TodoForm from '../../components/TodoForm';

function HomeFeature(props) {

    const handleTodoFormSubmit = (values) => {
        console.log('this is form' , values);
    }

    const [num,setNum] = useState(0);

    useEffect(() => {
        console.log(num);
    }, [num]);

    const handleShowNum = () => {
        
        setNum(num+1);
    }

    

    return (
        <div>
            {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}

            <span onClick={handleShowNum}>{num}</span>
        </div>
    );
}

export default HomeFeature;