import { NextApiRequest, NextApiResponse } from 'next';
import psicologos from '../../../public/psicologos.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(psicologos);
}
