import React, {useState} from 'react';
import ErrorMessage from "./ErrorMessage";

const Form = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')

    const [error, setError] = useState(null)
    console.log(error)
    const handleBlur = (e) => {
        if (!e.target.value) {
            setError(v => ({...v, [e.target.name]: 'Поле не должно быть пустым'}))
        } else setError(v => ({...v, [e.target.name]: null}))
    }


    const submitForm = (e) => {
        e.preventDefault()
        if (!title) {
            setError(v => ({...v, title: 'Поле не должно быть пустым'}))
        }
        if (!body) {
            setError(v => ({...v, body: 'Поле не должно быть пустым'}))
        }
        if (!tags) {
            setError(v => ({...v, tags: 'Поле не должно быть пустым'}))
        }

        if (title && body && tags) {
            console.log({title, body, tags})
            setTitle('')
            setBody('')
            setTags('')
            setError(null)
        }

    }
    return (
        <form
            onSubmit={submitForm}
            id="post-add" className="col-lg-4 ">
            <div className={"form-group" + ` ${error && error.title && "bg-danger"}`}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={handleBlur}
                    type="text"
                    className={"form-control"}
                    name="title"
                    placeholder="заголовок"
                />
                <ErrorMessage error={error && error.title}/>
            </div>
            <div className={"form-group" + ` ${error && error.body && "bg-danger"}`}>
                <input
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="body"
                    placeholder="запись"
                />
                <ErrorMessage error={error && error.body}/>
            </div>
            <div className={"form-group" + ` ${error && error.tags && "bg-danger"}`}>
                <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="tags"
                    placeholder="тег, еще тег"
                />
                <ErrorMessage error={error && error.tags}/>
            </div>
            <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
    );
};

export default Form;
