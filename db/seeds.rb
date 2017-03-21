# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create({fname:'Guest', lname:'McGuestface', email:'guest@guest.com', password:'password'})

Spot.create({owner_id: 1, description: 'PIER 39',
  image_url: "https://res.cloudinary.com/dfsandkf4/image/upload/v1489786442/bssgy7jteuiqkap9idmq.jpg",
  lat: 37.8099331369301, lng: -122.410423283, price: 0})

Spot.create({owner_id: 1, description: 'The Exploratorium',
  image_url: "https://media-cdn.tripadvisor.com/media/photo-s/03/d5/08/a5/the-exploratorium.jpg",
  lat: 37.8024600488627, lng: -122.402114868164, price: 0})

Spot.create({owner_id: 1, description: 'Coit Tower',
  image_url: "https://upload.wikimedia.org/wikipedia/commons/d/de/Coittower1.jpg",
  lat: 37.8024600488627, lng: -122.405891418457, price: 0})

Spot.create({owner_id: 1, description: 'Ferry Building',
  image_url: "https://res.cloudinary.com/dfsandkf4/image/upload/v1489787260/zq6heznqfvt1opqihbsy.jpg",
  lat: 37.7953388901613, lng: -122.393445968628, price: 0})

Spot.create({owner_id: 1, description: 'Ghiradelli Square',
  image_url: "https://lh4.googleusercontent.com/-zTVa6NhdUb0/WIY85BG6SBI/AAAAAAAAEEs/xZw98ri55tYzMTjKK19OgR-mKMQ4pOCKQCLIB/h16383-k/=s16383",
  lat: 37.794877687518536, lng: -122.42297172546387, price: 0})

Spot.create({owner_id: 1, description: 'Union Square',
  image_url: "http://sfplayhouse.org/sfph/wp-content/uploads/2015/08/o-SAN-FRANCISCO-UNION-SQUARE-facebook.jpg",
  lat: 37.788352705583755, lng: -122.40649223327637, price: 0})

Spot.create({owner_id: 1, description: 'City College',
  image_url: "https://lh5.googleusercontent.com/-vEEvbskyqrQ/WGga5rnXFSI/AAAAAAAAt30/W1Xef4jNOTci9YuBwJlEWLw8N98j9JvjgCLIB/h16383-k/=s16383",
  lat: 37.78445236378305, lng: -122.410423283, price: 0})

Spot.create({owner_id: 1, description: 'AMC Metreon Theaters',
  image_url: "https://media.timeout.com/images/101714769/image.jpg",
  lat: 37.784282779035216, lng: -122.40323066711426, price: 0})

Spot.create({owner_id: 1, description: 'Century 9 Theaters',
  image_url: "https://i.ytimg.com/vi/K1GETs2B1SM/maxresdefault.jpg",
  lat: 37.785077, lng: -122.406714, price: 0})

Spot.create({owner_id: 1, description: 'Westfield Shopping Center',
  image_url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Westfield_Shopping_Centre%2C_Stratford%2C_London._(6974444470).jpg",
  lat: 37.784061, lng: -122.406968, price: 0})

Spot.create({owner_id: 1, description: 'Yerba Buena Square Shopping',
  image_url: "https://lh6.googleusercontent.com/-TxI6oTucsO8/V8kKs72SKAI/AAAAAAAACq8/TKJqt7JSa8wZkDyxocRz0_dMMULk7qj8ACJkC/h16383-k/=s16383",
  lat: 37.782305, lng: -122.403064, price: 0})

Spot.create({owner_id: 1, description: 'Peacock Meadow',
  image_url: "https://lh6.googleusercontent.com/-jfvkSMTnO5U/V2svqYEk4DI/AAAAAAAAB0o/15sQdqHtcHUrs3g2V1q197oICCSA9O-PACJkC/h16383-k/=s16383",
  lat: 37.771696, lng: -122.457713, price: 0})

Spot.create({owner_id: 1, description: 'Conservatory of Flowers',
  image_url: "https://lh5.googleusercontent.com/-e_ibfVIdmfM/V5kQaPHYVCI/AAAAAAAAACs/dS8qiI5tuPU4mKmkRPTFHpTkye6pfoFLwCJkC/h16383-k/=s16383",
  lat: 37.772688, lng: -122.458899, price: 0})

Spot.create({owner_id: 1, description: 'Golden Gate Park Tennis Courts',
  image_url: "https://lh6.googleusercontent.com/-3NBkAkBSnwE/VZq7xkEo9eI/AAAAAAAADRY/2NwICojDBLsWimIZOKE7EbojDNrDCpmcgCJkC/h16383-k/=s16383",
  lat: 37.770141, lng: -37.770141, price: 0})

Spot.create({owner_id: 1, description: 'Sharon Meadow',
  image_url: "https://lh3.googleusercontent.com/-NcaVjYZKXco/VyYlQHGhulI/AAAAAAAAAmU/6Xs4neD0IaIGFZX3uuIZUVsBXPA1OpWawCJkC/h16383-k/=s16383",
  lat: 37.769364, lng: -122.457713, price: 0})

Spot.create({owner_id: 1, description: 'Kezar Stadium',
  image_url: "https://hoodwork-production.s3.amazonaws.com/uploads/story/image/16683/14839881422_61ec0e331a_k.jpg",
  lat: 37.767247, lng: -122.455136, price: 0})

Spot.create({owner_id: 1, description: 'UCSF',
  image_url: "https://www.ucsf.edu/sites/default/files/styles/2014_featured_content_block/public/field/image/landing-page/Parnassus_aerial.jpg?itok=oskJbgTL",
  lat: 37.762905, lng: -122.458018, price: 0})

Spot.create({owner_id: 1, description: "Koret Children's Quarter Playground",
  image_url: "https://lh4.googleusercontent.com/-3EW85dX8wSM/V76JAVXY2WI/AAAAAAABuNQ/qoKwNZyGRAAeSdpnTGhariMOL88D0SbSQCJkC/h16383-k/=s16383",
  lat: 37.768212, lng: -122.457102, price: 0})

Spot.create({owner_id: 1, description: 'Park Branch Library',
  image_url: "http://sfpl.org/images/about/blip/noevalley/noevalley9.jpg",
  lat: 37.770409, lng: -122.451305, price: 0})

Spot.create({owner_id: 1, description: "Panhandle Children's Playground",
  image_url: "https://lh5.googleusercontent.com/-8SoTaXt-VZA/Ufm_6RVOvDI/AAAAAAAAACE/6cksrFlZNjcK5DciG0u0fIaJqsduKMG5QCJkC/h16383-k/=s16383",
  lat: 37.772366, lng: -122.448321, price: 0})
