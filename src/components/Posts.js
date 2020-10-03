import React from 'react';
import Loader from './Loader';

const Posts = ({ posts, loading }) => {
    return (
        <div>
            {loading ? <Loader /> : ''}
            <ul className="list-group mb-4">
                {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
