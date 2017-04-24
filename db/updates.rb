(1..Spot.count).each do |i|
  sp = Spot.find(i)
  link = sp.image_url
  if link[0..4]=="https"
    link = "http"+link[5..-1]
    sp.update_attribute(:image_url, link)
  end
end
