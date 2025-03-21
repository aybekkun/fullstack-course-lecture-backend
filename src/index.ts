import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'

import express from 'express'

const expressApp = express()
expressApp.get('/ping', (req, res) => {
  res.send('pong')
})
expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
)

expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000')
})
