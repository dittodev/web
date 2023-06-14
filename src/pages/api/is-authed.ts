import { HasApiKey } from '@/lib/api-middlewares/key-required'
import { withMethods } from '@/lib/api-middlewares/with-methods'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const hasKey = await HasApiKey(req, res, false)
  const hasAdminKey = await HasApiKey(req, res, true)

  if (!hasKey) return res.status(401).send({ error: 'Unauthorized' })

  if (hasAdminKey)
    return res
      .status(200)
      .json({ message: 'You are authorized with an admin key.' })
  return res
    .status(200)
    .json({ message: 'You are authorized with a regular key.' })
}

export default withMethods(['GET'], handler)
