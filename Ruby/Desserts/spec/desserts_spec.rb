require "desserts"

RSpec.describe Dessert do

	describe ".healthy?" do
		context "given 330 cal" do
			it "returns false" do 
				food = Dessert.new('bolo_de_chocolate', 330)
				food.healthy?
				expect(food.healthy?).to eq false
			end
		end
		context "given 180 cal" do
			it "returns false" do
				food = Dessert.new('torta_de_morango', 180)
				food.healthy?
				expect(food.healthy?).to eq true
			end
		end
	end

	describe ".delicious?" do
		context "given any dessert" do
			it "returns true" do
				food = Dessert.new('rocambole', 220)
				food.delicious?
				expect(food.delicious?).to eq true
			end
		end
	end
end

RSpec.describe JellyBean do

	describe ".delicious?" do
		context "flavor is 'black licorice'" do
			it "returns false" do
				food = JellyBean.new('jujubinha', 140, 'black licorice')
				food.delicious?
				expect(food.delicious?).to eq false
			end
		end
	end
end
