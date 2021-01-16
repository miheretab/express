Create a database and set db config in confg/db.config.json, for now, we use development section

Then run the following commands
 - `npm install`
 - `npm run start`
 - `sequelize db:seed:all` (to be run only once)

1st end point
 - `POST /api/users/login`
 - input should be email and password
 - returns `{token: [token]}`
 
2nd end point
 - `GET /api/treasure/boxes?latitude=[latitude]&longitude=[longitude]&distance=[distance]&prize_value=[prize_value]`
 - only authorized can access this so use `Authorization: Bearer [token]` get from above login end point
 - returns example `{
        "name": "T11",
        "boxes": [{"amt": 10}],
    }`
