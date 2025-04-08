
import {usuario} from "./usuarios";

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'POST' })
  }else if (req.method === 'GET') {
    res.status(200).json(usuario)
  } else {
    // Handle any other HTTP method  https://www.youtube.com/watch?v=hpI-d39hUWY
  }
}