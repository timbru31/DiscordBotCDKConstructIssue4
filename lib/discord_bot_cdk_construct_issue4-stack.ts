import { Runtime } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import * as cdk from '@aws-cdk/core';
import { Duration } from '@aws-cdk/core';
import { DiscordBotConstruct } from 'discord-bot-cdk-construct';
import { join } from 'path';

export class DiscordBotCdkConstructIssue4Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the Commands Lambda.
    const discordCommandsLambda = new NodejsFunction(this, 'discord-commands-lambda', {
      runtime: Runtime.NODEJS_14_X,
      entry: join(__dirname, './functions/lambda.ts'),
      handler: 'handler',
      timeout: Duration.seconds(60),
    });

    const discordBot = new DiscordBotConstruct(this, 'discord-bot-endpoint', {
      commandsLambdaFunction: discordCommandsLambda,
    });
  }
}
