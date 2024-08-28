// src/api/track.ts
import { type NextApiRequest, type NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.body;
  console.log(`Client-side tracking: ${path}`);

  res.status(200).json({ message: 'Page tracked' });
}
