import React from 'react';
import Card from './Cards';

function App() {
    return (
        <div>
            <Card user='Erik Smith' imgURL='https://i.picsum.photos/id/1/100/100.jpg' email='eric@me.com' phone='123 450 6789'/>
            <Card user='Tom Sawyer' imgURL='https://i.picsum.photos/id/1005/100/100.jpg' email='tom.sawyer@ubisoft.com' phone='222 555 6789'/>
            <Card user='Will Robinson' imgURL='https://i.picsum.photos/id/1062/100/100.jpg' email='will.robinson@jupiter2.gov' phone='999 789 0123'/>
        </div>
    )
}

export default App;