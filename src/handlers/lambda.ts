import { MessagePublisher } from '../services/MessagePublisher'
import { TaskHandler } from '../types/TaskHandler'
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { getParams } from '../services/UrlUtils'

const publisher = new MessagePublisher()

export const handler: TaskHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  return new Promise(async (resolve, reject) => {
    const form = getParams(event)

    publisher
      .publish(form)
      .then(res =>
        resolve({
          statusCode: 302,
          body: JSON.stringify(res),
          headers: { location: 'https://formit.io/submitted' }
        })
      )
      .catch(err =>
        reject({
          statusCode: 500,
          body: JSON.stringify(err)
        })
      )
  })
}
