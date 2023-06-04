import postMessage from '../models/post_model.js'


export const getPosts = async (req, res) => {
    
        try {
           
            res.status(200).json(
                [
                    {
                        "title": "test",
                      "imageUrl" : "hhhhhh",
                    "message": "test",
                    "createdAt": "2021-07-07T15:00:00.000Z",
                    "_id": "60e5b3b3c8b0c2b4b4f0b0a0"
                    }
                ]
            );
        
            
        } catch (error) {
            res.status(404).json({message : error.message})
        }
}

   

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);

        try {
            await newPost.save();
            res.status(201).json(newPost);
        } catch (error) {
            res.status(404).json({message : error.message})
        }
    
   
}