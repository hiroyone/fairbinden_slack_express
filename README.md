# fairbinden_slack_express

Send a fairbinden lunch menu to Slack by expressjs

<a href="https://ibb.co/JCM4516"><img src="https://i.ibb.co/nR5vzGd/Screen-Shot-2020-01-02-at-17-30-50.png" alt="Screen-Shot-2020-01-02-at-17-30-50" border="0"></a>

This program is to scrape daily lunch menu at Fairbinden blog and extract the main information to send to your Slack channel during weekdays.

Tech Stack

- Nodejs
- Express
- Docker

# Run the app in the Cloud Run

1. Set up webhook channel url as export variables

```
NODE_ENV=PRD
WEB_HOOK_URL=https://hooks.slack.com/services/xxxxxx/xxxxx/xxxxxxxxxxxxxxxxxxxxx
CHANNEL_OFFICE_BEN=https://app.slack.com/client/xxxxxxxxxxxxxxxx
```

2. Deploy the code to the Source Repository

3. Create a service in the Cloud Run, connecting to the Source Repository

4. Set up a cloud scheduler to trigger the function at 10 a.m. every Weekday

# Run the app in the local environment

1. Set up webhook channel url as export variables

```
NODE_ENV=STG
WEB_HOOK_URL=https://hooks.slack.com/services/xxxxxx/xxxxx/xxxxxxxxxxxxxxxxxxxxx
CHANNEL_OFFICE_BEN=https://app.slack.com/client/xxxxxxxxxxxxxxxx
```

2. Start the app locally, using docker-compose

```
docker-compose up
```

3. Call the app

```
curl -H "Content-Type: application/json" -X POST -d '{"lunchDate":"2021-04-05T11:10+09:00"}' "localhost:8080/fairbinden"
```

## Supported Request Parameters

- lunchDate
  - desc: date for lunch information
  - format: date string
  - example: "2021-04-05T11:10+09:00"
- webHookURL: URL string
  - desc: Slack incoming webhook URL
  - format: URL string
  - example: "https://hooks.slack.com/services/xxxxxx/xxxxx/xxxxxxxxxxxxxxxxxxxxx"
