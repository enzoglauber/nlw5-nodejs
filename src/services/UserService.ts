import { getCustomRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

interface IUser {
  email: string;
}

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async create({ email }: IUser) {
    let user = await this.userRepository.findOne({
      email
    });

    if (!user) {
      user = this.userRepository.create({
        email
      });

      await this.userRepository.save(user);
    }

    return user
  }


  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      email
    });

    return user;
  }
}

export { UserService }
