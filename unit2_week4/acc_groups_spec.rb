#2. every person gets in a group
#3. randomness
#4. make groups of 5 when needed
require relative "my_solution"

describe Cohort do
	let!(:sample) {["Adeoye", "Brittaney", "Chantelle", "Charu", "Danielle", "David", "Dinesh", "Gregory", " Ian", "Jake", "Jason", "Jessica", "John", "Judy", "Justin", "Kai", "Ken", "Kennedy", "Kevin", "Lasse", "Natalie", "Nick", "Samuel", "Timothy"]}
	let!(:uneven) {["Adeoye", "Brittaney", "Chantelle", "Charu", "Danielle", "David", "Dinesh", "Gregory", " Ian", "Jake", "Jason", "Jessica", "John", "Judy", "Justin", "Kai", "Ken", "Kennedy", "Kevin", "Lasse", "Natalie", "Nick", "Samuel", "Timothy", "STEEEEEEVEEEEEE", "BILLYYYYY", "JEFFFFFFFF"]}

	describe "#group" do
		it "every group has at least 4 people" do
			for i in 0..groups[sample].length
				for j in 0..groups[sample][i].length
					groups[sample][i][j].length.should eq(4) || groups[sample][i][j].length.should eq(5)
				end
			end
		end
	end
end

