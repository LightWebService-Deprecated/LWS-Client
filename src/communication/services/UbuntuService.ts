/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUbuntuServiceRequest } from '../models/CreateUbuntuServiceRequest';
import type { UbuntuDockerService } from '../models/UbuntuDockerService';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UbuntuService {
  /**
   * Create Ubuntu Docker Service
   * @param requestBody Request Body for creating ubuntu docker service
   * @returns UbuntuDockerService When creating ubuntu service succeed.
   * @throws ApiError
   */
  public static postUbuntu(
    requestBody?: CreateUbuntuServiceRequest
  ): CancelablePromise<UbuntuDockerService> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ubuntu',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
