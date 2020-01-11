import React from 'react';
import ArticleImage from './Artimage';

function App() {
    const fullYear = new Date().getFullYear();
    const credit = '© ' + fullYear + ' - PicSum';
    return (
        <div>
            <ArticleImage imgURL='https://i.picsum.photos/id/966/200/200.jpg' credits={credit} />
            <ArticleImage imgURL='https://i.picsum.photos/id/120/200/200.jpg' credits={credit} />
            <ArticleImage imgURL='https://i.picsum.photos/id/424/200/200.jpg' credits={credit} />
        </div>
    );
}

export default App;