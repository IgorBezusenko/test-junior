import React from 'react';

const Post = ({title, body, tags}) => {
    return (
        <div id="posts" className="well">
            <article>
                <header>
                    <h3>{title}</h3>
                </header>
                <section>
                    <p>{body}</p>
                </section>
                <footer>
                    <div className="tags">
                        {tags.map((tag, i) => {
                            return <button key={i} className="btn btn-xs btn-default">{tag}</button>
                        })}

                    </div>
                </footer>
                <div className="controls">
                    <button className="btn btn-danger btn-mini">удалить</button>
                </div>
            </article>
        </div>
    );
};

export default Post;
