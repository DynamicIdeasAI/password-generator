import { PasswordOptionDataType } from '../types/password.type';

export default class PasswordHelper {
  static characterMap = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    special: '!@#$%^&*()_+{}:"<>?|[];\',./`~'
  };

  private constructor() {}

  static generatePassword(option: PasswordOptionDataType): string {
    const {
      length,
      containsLowercase,
      containsUppercase,
      containsNumber,
      containsSpecialCharacter,
      excludeCharacters
    } = option;

    if (!length || length < 1) throw new Error('Password length must be greater than 0');
    if (!containsLowercase && !containsUppercase && !containsNumber && !containsSpecialCharacter)
      throw new Error('At least one character type must be selected');

    let characters = '';

    if (containsLowercase) characters = characters + this.characterMap.lowercase;
    if (containsUppercase) characters = characters + this.characterMap.uppercase;
    if (containsNumber) characters = characters + this.characterMap.number;
    if (containsSpecialCharacter) characters = characters + this.characterMap.special;

    excludeCharacters?.forEach((char) => {
      characters = characters.replace(new RegExp(char, 'g'), '');
    });

    let password = '';

    for (let index = 0; index < length; index++)
      password += characters.charAt(Math.floor(Math.random() * characters.length));

    return password;
  }
}
