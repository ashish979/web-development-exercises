require 'rubygems'
require 'nokogiri'
require 'open-uri'

print "Please enter search term: "
search_term = gets.chomp!
search_term = search_term.split(" ").join("+")
url = "https://www.youtube.com/results?search_query=#{search_term}"
doc = Nokogiri::HTML(open(url))
puts doc.at_css("title").text
doc.css(".yt-ui-ellipsis-2.spf-link").each do |x|
  link = "http://www.youtube.com" + x[:href]
  puts "#{x.text} => #{link}"
end