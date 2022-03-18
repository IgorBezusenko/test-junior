import React, {useState} from 'react';

const Tasks = () => {
    const [isTask, setIsTask] = useState(false)
    const handleIsVisibleTask = () => {
        setIsTask(v => !v)
    }
    return (
        <>
            <button onClick={handleIsVisibleTask}>Task</button>
            {isTask &&
            <header id="header">
                <div className="page-header">
                    <h1>Тестовое задание</h1>
                </div>
                <h2>Задача:</h2>
                <ol>
                    <li>
                        Используя коллекцию <code>json/posts.json</code> заполнить базовыми
                        значениями <code>localStorage</code> пользователя, вывести записи в
                        <code>#posts</code>, взяв за основу разметку
                        <code>#posts article</code>.
                    </li>
                    <li>Возможность удаления записи из <code>localStorage</code>.</li>
                    <li>Форма добавления записи, валидация данных.</li>
                    <li>
                        Залить на
                        <a target="_blank"
                           rel="noreferrer"
                           href="https://github.com/">GitHub</a>/
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://bitbucket.com/">Bitbucket</a>
                        , (название репозитория не должно содержать слово "simpals").
                    </li>
                    <li>
                        Задание должно быть выполнено на
                        <a target="_blank" rel="noreferrer" href="https://reactjs.org/"> React</a>.
                    </li>
                    <li>
                        Для инициализации проекта можно использовать
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/facebook/create-react-app"
                        >create-react-app</a
                        >.
                    </li>
                </ol>
                <p className="alert alert-info">
                    Ограничение по использованию библиотек: нет.
                </p>
            </header>
            }
        </>
    );
};

export default Tasks;
