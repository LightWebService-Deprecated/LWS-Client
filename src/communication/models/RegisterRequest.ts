/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegisterRequest = {
  /**
   * Email to register. Must be valid email.
   */
  userEmail?: string;
  /**
   * Nickname, choose the best one.
   */
  userNickName?: string;
  /**
   * Password, strongly recommended to use very strong password.
   */
  userPassword?: string;
};
