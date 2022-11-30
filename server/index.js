const hostname = '127.0.0.1';
const port = 5000;

import express from 'express';
const app = express();

import data from './data.js';


app.get('/path*', async (req, res)=>{
    const path = req.originalUrl.replace('/path','').split('/');
    path.shift();
    let dirtyData = data;

    //traverse to the desired location in the source object
    for(let i=0; i<path.length; i++){
        dirtyData = dirtyData.children[path[i]];
        if(!dirtyData){
            res.send('path not found');
            return false;
        }
    };

    // if it's a folder
    if(dirtyData.type === 'dir'){
        let output = [];
        for(var key of Object.keys(dirtyData.children)){
            output.push({filename: key, type: dirtyData.children[key].type});
        }
        res.send({children: output, type: dirtyData.type});
    }
    // if it's a file 
    else if(dirtyData.type === 'file'){
        res.send({ content: dirtyData.content, type: dirtyData.type});
    }
    
})

app.listen(port, hostname, async () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
