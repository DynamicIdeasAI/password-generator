interface PasswordOptionDataType {
  length: number;
  containsLowercase: boolean;
  containsUppercase?: boolean;
  containsNumber?: boolean;
  containsSpecialCharacter?: boolean;
  excludeCharacters?: string[];
}

export type { PasswordOptionDataType };
