import prisma from "src/db/prismaClient";

const findOrCreateUser = async (
  googleId: string,
  username: string,
  email: string,
  profilePicture: string
) => {
  const user = await prisma.user.findUnique({ where: { googleId } });
  if (user) return user; // return already existing user

  const newUser = await prisma.user.create({
    data: {
      googleId,
      username,
      email,
      profilePicture,
    },
  });

  return newUser;
};

const getUser = async (googleId: string) => {
  const user = await prisma.user.findUnique({ where: { googleId } });
  return user;
};

export { findOrCreateUser, getUser };
