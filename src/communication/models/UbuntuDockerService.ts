/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Ubuntu Docker Service Entity
 */
export type UbuntuDockerService = {
  /**
   * Account ID for corresponding user.
   */
  accountId?: string;
  /**
   * The Ubuntu Deployment Name
   */
  deploymentName?: string;
  /**
   * Ubuntu SSH Port(Default to 22)
   */
  sshPort?: number;
  /**
   * Denotes when this sandbox createdAt
   */
  createdAt?: string;
};
