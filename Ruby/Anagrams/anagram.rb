def combine_anagrams(words)
	array_of_anagrams = []

	words.each do |word|
		formatted_word = word.downcase.split("").sort

		array_of_words = []

		words.each do |next_word|
			formatted_next_word = next_word.downcase.split("").sort

			if (formatted_word == formatted_next_word)
			array_of_words.push(next_word)
			end
		end
		array_of_anagrams.push(array_of_words)
	end
	return array_of_anagrams.uniq
end

words = [ 'cars', 'for', 'potatoes', 'Racs', 'four','scar', 'creams',
'Scream', 'Mearsc' ]
print combine_anagrams(words), "\n"