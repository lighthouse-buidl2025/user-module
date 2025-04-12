import { Request, Response } from 'express';
import User from '../models/user.model';

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { address } = req.body;

  console.log(address)

  if (!address) {
    res.status(400).json({ success: false, message: 'Address is required' });
    return;
  }

  try {
    const normalizedAddress = address.toLowerCase();
    const existing = await User.findOne({ address: normalizedAddress });

    if (existing) {
      res.status(409).json({ success: false, message: 'User already exists' });
      return;
    }

    const newUser = new User({ address: normalizedAddress });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User created', data: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { address } = req.params;

  try {
    const user = await User.findOne({ address: address.toLowerCase() });

    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch user' });
  }
};

export const setEmail = async (req: Request, res: Response): Promise<void> => {
  const { address } = req.params;
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ success: false, message: 'Email is required' });
    return;
  }

  try {
    const user = await User.findOneAndUpdate(
      { address: address.toLowerCase() },
      { email },
      { new: true, upsert: true }
    );

    res.status(200).json({ success: true, message: 'Email set successfully', data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to set email' });
  }
};

export const setTelegram = async (req: Request, res: Response): Promise<void> => {
  const { address } = req.params;
  const { telegram } = req.body;

  if (!telegram) {
    res.status(400).json({ success: false, message: 'Telegram ID is required' });
    return;
  }

  try {
    const user = await User.findOneAndUpdate(
      { address: address.toLowerCase() },
      { telegram },
      { new: true, upsert: true }
    );

    res.status(200).json({ success: true, message: 'Telegram set successfully', data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to set telegram' });
  }
};
