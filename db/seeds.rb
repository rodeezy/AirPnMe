# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative('image_urls')

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
  image_url: "https://image.ibb.co/jLiqmF/IMG_20160305_102608246_HDR.jpg",
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
  image_url: "https://image.ibb.co/eqEKfa/2016_06_22.jpg",
  lat: 37.771696, lng: -122.457713, price: 0})

Spot.create({owner_id: 1, description: 'Conservatory of Flowers',
  image_url: "https://image.ibb.co/f3XSYv/COF_building_with_pink_red_flowers.jpg",
  lat: 37.772688, lng: -122.458899, price: 0})

Spot.create({owner_id: 1, description: 'Golden Gate Park Tennis Courts',
  image_url: "https://lh6.googleusercontent.com/-3NBkAkBSnwE/VZq7xkEo9eI/AAAAAAAADRY/2NwICojDBLsWimIZOKE7EbojDNrDCpmcgCJkC/h16383-k/=s16383",
  lat: 37.770141, lng: -122.459893, price: 0})

Spot.create({owner_id: 1, description: 'Sharon Meadow',
  image_url: "http://sfrecpark.org/wp-content/uploads/IMG_5974-e1399335963721-600x400.jpg",
  lat: 37.769364, lng: -122.457713, price: 0})

Spot.create({owner_id: 1, description: 'Kezar Stadium',
  image_url: "https://hoodwork-production.s3.amazonaws.com/uploads/story/image/16683/14839881422_61ec0e331a_k.jpg",
  lat: 37.767247, lng: -122.455136, price: 0})

Spot.create({owner_id: 1, description: 'UCSF',
  image_url: "https://www.ucsf.edu/sites/default/files/styles/2014_featured_content_block/public/field/image/landing-page/Parnassus_aerial.jpg?itok=oskJbgTL",
  lat: 37.762905, lng: -122.458018, price: 0})

Spot.create({owner_id: 1, description: "Koret Children's Quarter Playground",
  image_url: "",
  lat: 37.768212, lng: -122.457102, price: 0})

Spot.create({owner_id: 1, description: 'Park Branch Library',
  image_url: "http://sfpl.org/images/about/blip/noevalley/noevalley9.jpg",
  lat: 37.770409, lng: -122.451305, price: 0})

Spot.create({owner_id: 1, description: "Panhandle Children's Playground",
  image_url: "https://image.ibb.co/iP5s0a/2013_07_31.jpg",
  lat: 37.772366, lng: -122.448321, price: 0})



  # https://image.ibb.co/cXJO6F/2016_12_31.jpg
  # https://image.ibb.co/gSsSYv/20160831_195532.jpg


  #faker:: fname: Faker::Name.first_name, lname: Faker::Name.last_name,
  # lat: Faker::Address.latitude, lng: Faker::Address.longitude.
  # description: fname's Faker::Hacker.adjective bathroom or Faker::Hacker.adjective Faker::Adress.street_name bathroom

  #bounds: bottom: 37.710163, right: -122.388417, left (bottom): -122.502833, top (lower) (left): 37.787663
  #top portion bounds:: bottom: 37.787663, left: -122.479284, top: 37.803457, right: -122.402027
bottom = 37.710163
right = -122.388417
left = -122.502833
top = 37.787663 #ubottom

uleft = -122.479284
utop = 37.803457
uright = -122.402027

50.times do |i|
  region = rand(2) == 0 ? [bottom, top, left, right] : [top, utop, uleft, uright]
  User.create({fname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.unique.email, password:'password'})
  Spot.create({owner_id: i+2, description: (rand(2) == 0 ? User.last.fname + "'s " + Faker::Hacker.adjective.capitalize + " " + "bathroom"
    : Faker::Hacker.adjective + " " + Faker::Address.street_name + " " + "bathroom"),
    image_url: $urls[i],
    lat: rand(region[0]..region[1]), lng: rand(region[2]..region[3]), price: rand(1..100)})
  rand(3..6).times do
    Review.create(author_id: rand(User.all.length), spot_id: i + 1, rating: rand(0..5), body: Faker::Lorem.paragraph)
  end
end

14.times do |i|
  Booking.create(author_id: 1, spot_id: i + 10,
  start_time: DateTime.new(2018, 1, i * 2 + 1, 3, 4, 5),
  end_time: DateTime.new(2018, 1, i * 2 + 2, 3, 4, 5),)
end
