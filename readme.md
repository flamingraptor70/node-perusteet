# Assigment for NodeJS Express / Pug

## Starting server
1. Clone this repo

2. Install node-modules
```npm i```

3. Installing nodemon utility/frameworks for node.js
```npm i nodemon```
```npm i express```
```npm i pug```

4. Run server with npm run dev code
```npm run dev ```

5. Go to the website with the local server link
``` Server running at http://127.0.0.1:3000/ ```

## This REST API has basic functionalities of:

- Static file server
- Routing
- Middlewares
- Support template engines like "pug.js"
- Express application generator

## Examples of requests
### Get all media items
```http
GET /api/media
```

Response:

```json
{
    media_id: 9632,
    filename: "ffd8.jpg",
    filesize: 887574,
    title: "Favorite drink",
    description: "",
    user_id: 1606,
    media_type: "image/jpeg",
    created_at: "2023-10-16T19:00:09.000Z",
  },
  {
    media_id: 9626,
    filename: "dbbd.jpg",
    filesize: 60703,
    title: "Miika",
    description: "My Photo",
    user_id: 3671,
    media_type: "image/jpeg",
    created_at: "2023-10-13T12:14:26.000Z",
  },
  {
    media_id: 9625,
    filename: "2f9b.jpg",
    filesize: 30635,
    title: "Aksux",
    description: "friends",
    user_id: 260,
    media_type: "image/jpeg",
    created_at: "2023-10-12T20:03:08.000Z",
  },
  {
    media_id: 9592,
    filename: "f504.jpg",
    filesize: 48975,
    title: "Desert",
    description: "",
    user_id: 3609,
    media_type: "image/jpeg",
    created_at: "2023-10-12T06:59:05.000Z",
  },
  {
    media_id: 9590,
    filename: "60ac.jpg",
    filesize: 23829,
    title: "Basement",
    description: "Light setup in basement",
    user_id: 305,
    media_type: "image/jpeg",
    created_at: "2023-10-12T06:56:41.000Z",
  },
```


### Get all users
```http
GET /api/user
```

Response:

```json
[
  {
    "user_id": 260,
    "username": "VCHar",
    "password": "********",
    "email": "vchar@example.com",
    "user_level_id": 1,
    "created_at": "2020-09-12T06:56:41.000Z"
  },
  {
    "user_id": 305,
    "username": "Donatello",
    "password": "********",
    "email": "dona@example.com",
    "user_level_id": 1,
    "created_at": "2021-12-11T06:00:41.000Z"
  },
  {
    "user_id": 3609,
    "username": "Anon5468",
    "password": "********",
    "email": "x58df@example.com",
    "user_level_id": 3,
    "created_at": "2023-04-02T05:56:41.000Z"
  }
]
```