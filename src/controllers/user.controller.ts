import { Request, Response } from 'express';
import { fetchUsers } from '../services/user.service';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await fetchUsers();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch users' });
  }
};
