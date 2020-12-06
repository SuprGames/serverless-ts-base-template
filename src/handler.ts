import { APIGatewayProxyHandler, APIGatewayEvent, Context, Callback } from 'aws-lambda';
import 'source-map-support/register';
import { pino } from 'pino';

const logger = pino({ name: __filename.split(/[\\/]/).pop() });

export const hello: APIGatewayProxyHandler = async (
    event: APIGatewayEvent,
    context: Context,
    callback: Callback,
): Promise<any> => {
    logger.info('Test Log - Request done');
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
                input: event,
                context: context,
                callback: callback,
            },
            null,
            2,
        ),
    };
};
