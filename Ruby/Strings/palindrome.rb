def palindrome?(string)
	formatted_string = string.downcase.gsub(/[^a-z]*\s*\d*/, "") #removes all non-roman-alphabet-letters
	puts string
	puts formatted_string
	puts formatted_string.reverse
	formatted_string == formatted_string.reverse
end

puts palindrome?("A man, a plan, a canal -- Panama"), "\n" #=> true
puts palindrome?("Abracadabra"), "\n"
puts palindrome?("Madam, I'm Adam!")