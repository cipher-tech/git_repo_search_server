import axios from 'axios';
import express, { Request, Response } from 'express';
import MarkdownIt from 'markdown-it';
import {data} from "../models/data"
const router = express.Router();

const Md = new MarkdownIt()
interface IReadmeInfo{
    data:{download_url: string}
}
router.get('/get-repo', async (req: Request, res: Response) => {
    const repo = data
    res.send({ status: "successful", data:repo });
});

router.get('/get-readme/:user/:repo', async (req: Request, res: Response) => {
    const {user, repo } = req.params;
    
    console.log({user, repo });
    
    
    try { 
        const {data}: IReadmeInfo = await axios.get(`https://api.github.com/repos/${user}/${repo}/readme`);
        console.log(data.download_url);
        
        const readme = await axios.get(data.download_url);
        console.log(readme);
        
        const readmeFile = Md.render(readme.data)
        res.send({ status: "successful", data: readmeFile });
    } catch (error) { 
        res.status(422).send({ error: error });
    }
});
export default router;