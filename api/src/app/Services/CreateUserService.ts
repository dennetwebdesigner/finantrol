import UserRepository from "../Repositories/UserRepository";

interface iUser {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
  birthday: string;
}

class CreateUserService {
  private repository: UserRepository;

  constructor(repository) {
    this.repository = repository;
  }

  async execute({
    username,
    email,
    password,
    firstName,
    lastName,
    image,
    birthday,
  }: iUser) {
    const emailExist = await this.repository.findByEmail(email);
    const usernameExist = await this.repository.findByUsername(username);

    if (emailExist)
      throw new Error(JSON.stringify({ message: emailExist, status: 403 }));
    else if (usernameExist)
      throw new Error(
        JSON.stringify({
          message: "Nome de usuário já esta cadastrado!",
          status: 403,
        })
      );

    const user = await this.repository.save({
      username,
      email,
      password,
      firstName,
      lastName,
      image,
      birthday,
    });

    return user;
  }
}

export default CreateUserService;
