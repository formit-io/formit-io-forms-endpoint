import { APIGatewayProxyResult } from 'aws-lambda';

export type TaskHandler = (event: any, context?: any) => Promise<APIGatewayProxyResult>;
