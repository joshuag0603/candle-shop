import { Router, Request, Response } from 'express';
import { User } from '../../models/users2'

const router = Router();

// GET /api/users Retrieves all users.
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Server error fetching users' });
  }
});

// GET /api/users/:id Retrieves a single user by ID.
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error fetching user' });
  }
});

//POST /api/users Creates a new user.
 
router.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // add password hash

  try {
    const newUser = await User.create({ email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error creating user' });
  }
});

//PUT /api/users/:id Updates an existing user by ID.
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    //  password hashing?
    await user.update({ email, password });
    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Server error updating user' });
  }
});

//DELETE /api/users/:id* Deletes a user by ID.
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Server error deleting user' });
  }
});

export default router;
