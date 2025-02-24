import type { NextApiRequest, NextApiResponse } from "next";

const cars = [
  { id: "1", name: "Toyota Corolla", price: 40, image: "/toyota.jpg" },
  { id: "2", name: "Honda Civic", price: 50, image: "/honda.jpg" },
  { id: "3", name: "Tesla Model 3", price: 100, image: "/tesla.jpg" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cars);
}
