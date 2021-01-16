1st end point
 => `POST /api/users/login`
 => input should be email and password
 => returns `{token: [token]}`
 
2nd end point
 => `GET /api/treasure/boxes?latitude=[latitude]&longitude=[longitude]&distance=[distance]&prize_value=[prize_value]`
 => only authorized can access this so use `Authorization: Bearer [token]` get from above login end point
 => returns example `{
        "name": "T11",
        "boxes": [{"amt": 10}],
    }`