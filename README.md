# My exam site work

### Generating a secret key

`openssl rand -base64 32`

This command generates a 32-character random string that you can use as your secret key and store in your environment variables file:
`.env`

```
SESSION_SECRET=your_secret_key
```

### Initialize your project modules

Run `npm i`

### Initialize prisma client

Run `prisma generate` for first time