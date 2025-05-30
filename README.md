## Run database
To run the database, you need to have Docker installed. Once you have Docker installed, you can run the following command to start the database:

```bash
docker compose up -d
```

## Install dependencies
To install the dependencies, run the following command:

```bash
npm install
```

## Env
To run this project, you need to create a `.env` file in the root directory. You can use the `.env.example` file as a template. Make sure to fill in the required environment variables.

## Generate Prisma Client and Migrate Database
To generate the Prisma client, run the following command:

```bash
npx prisma migrate dev
npx prisma generate
```

## Seed the database
To seed the database, run the following command (!WARNING: This will delete all existing data in the database):

```bash
npx run db:seed
```

