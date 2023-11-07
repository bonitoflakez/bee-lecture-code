# bee-lecture-code

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run server.ts
```

`.env` example

```config
URI_USERNAME=''
URI_PASSWORD=''
URI_CLUSTER_URL=''

```

Add a user

```txt
➜  ~ curl -X POST -H "Content-Type: application/json" -d '{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "age": 30
}' http://localhost:3000/api/user/add
```
