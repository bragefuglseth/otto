# Otto

A simple, multipurpose Discord bot. Otto is currently a work in progress.

## Installing

Follow these instructions to install Otto:

1. Go to the [Discord developer page](https://discord.com/developers/applications) and create a new application. Create a bot for your application.
2. Create a test server.
3. Fork this repository. Clone your fork into your environment.
4. Create a copy of `.env-example` and rename it to `.env`.

- Replace `your_discord_bot_token` with the token of your bot.
- Replace `your_application_id` with your application ID.
- Replace `your_test_server_id` with the ID of the server you want to test the bot on.

5. Run `npm i` to install all dependencies. This project requires Node 16.13.2. Make sure you have [nvm](https://github.com/nvm-sh/nvm) installed, and run `nvm use 16.13.2`.
6. Run `npm run commands` to deploy your application commands globally. Run `npm run commands:local` to deploy them to your test server only.
7. Start the bot with `npm start`. If you want the bot to restart every time you save a file, run `npm start:dev`.
