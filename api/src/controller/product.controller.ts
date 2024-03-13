import { Request, Response } from "express"
import { sampleProducts } from "../data"

export const getProducts = (req: Request, res: Response) => {
   res.status(200).json(sampleProducts)
}