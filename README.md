# Animal Shelter Backend JS

Welp, this is my sad rebuild of the rust project
https://github.com/LosAngelesController/animal-shelter-backend

Which failed lol, because I'm not a lvl 9000 programmer.

## Installation

You'll need to fill in a config.json with your config like this:
```
{
    "db": {
        "user": "postgres",
        "password": "postgres",
        "host": "127.0.0.1",
        "port": "5432",
        "database": "postgres"
    }
}
```

Then run `npm run cloudrunhttp` to host with no SSL on 8080

## Github Actions + GCP Run

You'll need to add the following secrets into your repo

Insert the config.json into a secret called `CONFIGJSON`

`CLOUD_RUN_PROJECT_NAME`: The project name of your Google Cloud Project

`SQL_INSTANCE_NAME`: The connection name of your Google Cloud SQL

`CLOUD_RUN_SERVICE_ACCOUNT_EMAIL`: Service Account of the email

`CLOUD_RUN_SERVICE_ACCOUNT`: Raw Json File of the service account key