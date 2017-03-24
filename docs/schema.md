## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## spots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
location    | string    | not null
lat         | float     | not null
lng         | float     | not null
price       | integer   | not null, indexed
image_url   | string    | not null
about_this  | string    | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
spot_id     | integer   | not null, foreign key (references spot ), indexed
start_time  | date  | not null
end_time    | date  | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
spot_id     | integer   | not null, foreign key (references spot ), indexed
rating      | integer   | not null,
body        | string    | not null
