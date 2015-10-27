class Dessert
	def initialize(name, calories)
		@name = name
		@calories = calories
	end
		def name
			@name
		end
		def name=(newname)
			@name = newname
		end

		def calories
			@calories
		end
		def calories=(newcalories)
			@calories = newcalories
		end

	def healthy?
		return true unless calories >= 200
	end

	def delicious?
		return true
	end

		def healthy_answer
			if (healthy?) then return "yup, #{name} has #{calories} calories and won't make you fatty"
			else return "nope, #{name} has #{calories} calories and will turn you into a fattie"
			end
		end
		def delicious_answer
			if (delicious?) then return "hmm, #{name} is yummy"
			else return "eww, #{name} is gross"
			end
		end
end


class JellyBean < Dessert
	def initialize(name, calories, flavor)
	@name = name
	@calories = calories
	@flavor = flavor
	end

		def flavor
			@flavor
		end
		def flavor=(newflavor)
			@flavor = newflavor
		end

	def delicious?
		return true unless self.flavor == "black licorice"
	end
end

comida = Dessert.new('rabanada', 315)
comida.healthy?
comida.delicious?

treco_ruim = JellyBean.new('jujuba', 180, "black licorice")
treco_ruim.healthy?
treco_ruim.delicious?

puts "--- #{comida.name} ---", "-> Healthy? ", comida.healthy_answer, "-> Delicious?", comida.delicious_answer, "\n"
puts "--- #{treco_ruim.name} ---", "-> Healthy? ", treco_ruim.healthy_answer, "-> Delicious?", treco_ruim.delicious_answer