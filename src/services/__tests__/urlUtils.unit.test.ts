import { getParams } from '../UrlUtils'
import event from './apigatewayevent.json'

test('should map correct params', () => {
  const today = new Date()
  const testEvent = { ...event, requestContext: { requestTimeEpoch: today.getTime() } }
  // @ts-ignore
  const data = getParams(testEvent)

  expect(data.target).toBe('johndoe@example.com')
  expect(data.form.first).toBe('test')
  expect(data.form.second).toBe('test')
  expect(data.form.third).toBe('test')
  expect(data.referrer).toBe('http://localhost/contact')
  expect(data.submitted).toEqual(today)
})
