def palindrome?(string)
	formatted_string = string.downcase.gsub(/[^a-z]*\s*\d*/, "") #removes all non-roman-alphabet-letters
	puts string
	puts formatted_string
	puts formatted_string.reverse
	puts formatted_string == formatted_string.reverse ? "true" : "false"
end

palindrome?("A man, a plan, a canal -- Panama") #=> true
palindrome?("Madam, I'm Adam!") # => true
palindrome?("Abracadabra") # => false (nil is also ok)
