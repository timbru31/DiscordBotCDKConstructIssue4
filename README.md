# Welcome to your CDK TypeScript project!

Issue reproduction for https://github.com/GEMISIS/discord-bot-cdk-construct/issues/4  
Just run `cdk synth` and notice the following:

```sh
Bundling asset DiscordBotCdkConstructIssue4Stack/discord-commands-lambda/Code/Stage...

  ../../cdk.out/bundling-temp-23deeaa8f239238a7d97c6614a32369cc02f472ed7712f30aa5aa0d1fa30bddf/index.js  3.4mb ⚠️
```

The command lambda is 3.4mb big.