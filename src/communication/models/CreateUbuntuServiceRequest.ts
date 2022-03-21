/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Used when creating ubuntu docker service.
 */
export type CreateUbuntuServiceRequest = {
    /**
     * Deployment Name - should be unique within same namespace.
     */
    deploymentName?: string;
    /**
     * SSH Overrideable port.
     */
    sshOverridePort?: number;
};
