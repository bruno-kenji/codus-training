def count_words(string)
	hash_of_words = Hash.new
	
	string.downcase.scan(/\b\w*\b/) do |word|
		if hash_of_words.has_key?(word)
			hash_of_words[word] += 1
		elsif word == ""
		else hash_of_words[word] = 1
		end
	end
	puts hash_of_words
end

puts count_words("A man, a plan, a canal -- Panama")
puts count_words("Doo bee doo bee doo")
puts count_words("blah blah blah blah blah")