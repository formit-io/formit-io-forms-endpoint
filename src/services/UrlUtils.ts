import * as querystring from 'querystring'
import { APIGatewayProxyEvent } from 'aws-lambda'
import { FormSubmission } from '../types/FormSubmission'

export const getParams = (event: APIGatewayProxyEvent): FormSubmission => {
  const { headers, requestContext, pathParameters, body } = event
  const { referrer } = headers
  const { requestTimeEpoch } = requestContext
  const { _to } = pathParameters

  return {
    referrer,
    form: {
      ...querystring.parse(body),
      ...pathParameters
    },
    submitted: new Date(requestTimeEpoch),
    target: _to
  }
}
