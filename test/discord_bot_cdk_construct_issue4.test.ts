import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DiscordBotCdkConstructIssue4 from '../lib/discord_bot_cdk_construct_issue4-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DiscordBotCdkConstructIssue4.DiscordBotCdkConstructIssue4Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
