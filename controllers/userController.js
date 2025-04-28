import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // encryption of password
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        phone,
      },
      select:{
        id: true,
        name: true,
        email: true,
        phone: true,
      }
    });
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error creating user" });
  }
};


