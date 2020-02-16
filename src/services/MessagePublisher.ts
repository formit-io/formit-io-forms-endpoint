import { SNS } from 'aws-sdk'
import { PublishInput } from 'aws-sdk/clients/sns'
import { FormSubmission } from '../types/FormSubmission'

export class MessagePublisher {
  private client = new SNS({ apiVersion: 'latest' })

  async publish(message: FormSubmission) {
    const params: PublishInput = {
      Message: JSON.stringify(message),
      TopicArn: 'arn:aws:sns:eu-west-1:572332173513:formit-io-endpoint-topic-prod'
    }

    return this.client.publish(params).promise()
  }
}
