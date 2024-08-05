import { PasswordOptionDataType } from './types/password.type';

export default class PasswordGenerator {
  static charMap = {
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

    let chars = '';

    if (containsLowercase) chars = chars + this.charMap.lowercase;
    if (containsUppercase) chars = chars + this.charMap.uppercase;
    if (containsNumber) chars = chars + this.charMap.number;
    if (containsSpecialCharacter) chars = chars + this.charMap.special;

    excludeCharacters?.forEach((char) => {
      chars = chars.replace(new RegExp(char, 'g'), '');
    });

    let password = '';

    for (let index = 0; index < length; index++) password += chars.charAt(Math.floor(Math.random() * chars.length));

    return password;
  }
}
