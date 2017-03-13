```js
{
  session: {
    currentUser: {
      id: 1,
      username: "ryan"
    },
    errors: [],  
  },
  spots: {
    1: {
      id: 1,
      price: 10,
      image_url: "bathroom.jpeg",
      about_this: "bathroom",
      location: "Parker St"
      rating: 3,
      reviews: {
        id: 1
        author: "Bill",
        body: "clean bathroom"
      }
    }
    2 : {
      id: 2,
      price: 50,
      image_url: "",
      about_this: "workspace",
      rating: 4,
      reviews: {
        id: 2
        author: "Bobby",
        body: "Serene Study space"
      }
    }
  },
  bookings: {
    1: {
      id: 1,
      spot_name: "quick bathroom stop",
      location: "Derby St",
      rating: 3,
      description: "instant book"
      start_time: '17:20',
      end_time: '17:40',
    },
    2: {
      id: 2,
      spot_name: "relaxation station",
      location: "Shattuck",
      rating: 4,
      description: "come hang out"
      start_time: '12:20',
      end_time: '12:55',
    }
  }
}
```
