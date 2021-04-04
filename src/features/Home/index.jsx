import React from 'react';
import TodoForm from '../../components/TodoForm';

function HomeFeature(props) {

    const handleTodoFormSubmit = (values) => {
        console.log('this is form' , values);
    }

    return (
        <div>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
        </div>
    );
}

export default HomeFeature;