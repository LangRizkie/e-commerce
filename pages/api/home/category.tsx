import path from 'path'
import { promises as fs } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { HomeCategoryModelData } from 'modules/models.module'

const directory = path.join(process.cwd(), 'json')

const Handler = async (req: NextApiRequest, res: NextApiResponse<HomeCategoryModelData>) => {
  const result = await fs.readFile(directory + '/home_category.json', 'utf8')
  res.status(200).json(JSON.parse(result))
}

export default Handler
