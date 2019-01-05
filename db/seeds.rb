10.times do
  video = Video.new(
    title: Faker::Beer.name,
    duration: Faker::Number.between(1, 10),
    genre: Faker::Music.genre,
    description: Faker::Cannabis.health_benefit,
    url: "https://www.youtube.com/embed/V-_O7nl0Ii0",
    )
    video.save!

    5.times do
      comments = video.comments.new(
        body: Faker::BojackHorseman.quote,
      )
      comments.save!
    end
  end
  
  puts "10 videos created"

  # <iframe width="1438" height="620" src="https://www.youtube.com/embed/V-_O7nl0Ii0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>