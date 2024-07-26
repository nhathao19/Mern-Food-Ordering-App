  import exprress, {Request, Response} from "express"
  import cors from "cors"
  import "dotenv/config"

  const app = exprress();
  app.use(exprress.json());
  app.use(cors());

  app.get("/test",  async (req: Request, res: Response) => {
    res.json({message: "Hello!"})
  })

  app.listen(7000, ()=> {
    console.log("server started on localhost:7000")
  })