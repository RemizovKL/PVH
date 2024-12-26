import bcrypt from 'bcryptjs';

class User {
  constructor(username, password) {
    this.username = username;
    this.password = bcrypt.hashSync(password, 8);
  }

  static findByUsername(username) {
    // Здесь должна быть логика для поиска пользователя в базе данных
    // Для примера используем статический массив
    const users = [
      new User('SergeyK', '210105'),
      new User('LevR', '111104'),
    ];
    return users.find(user => user.username === username);
  }
}

export default User;
