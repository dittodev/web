import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../db'

export async function HasApiKey (
  req: NextApiRequest,
  res: NextApiResponse,
  needsAdminKey?: boolean
) {
  const apiKey = req.headers.authorization
  if (!apiKey) {
    return false
  }

  try {
    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true
      }
    })

    if (!validApiKey) {
      return false
    }

    if (needsAdminKey) {
      if (validApiKey.belongsToAdmin) return true
      return false
    }

    return true
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
