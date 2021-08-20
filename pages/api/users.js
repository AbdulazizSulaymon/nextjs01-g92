// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' }
];

export default function handler(req, res) {
  res.status(200).json(users)
}
