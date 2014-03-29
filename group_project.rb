my_array_sorting_method(i_want_pets)
i_want_pets=["3", "I", "want", "pets", "but", "have", "only","4"]

def my_array_sorting_method(array)
	@array=array
	@array.sort
	return @array
end


def my_hash_sorting_method(source)
	@source = source
 	return @source.sort_by { |name,age| age }
end

my_family_pets_ages=[["Annabelle", 2],["George", 14], ["Hoobie", 5], ["Bogart", 6], ["Poly", 6], ["Evi", 8], ["Ditto", 5] ]
puts my_hash_sorting_method(my_family_pets_ages) #=>
#my_family_pets_ages.sort_by { |name, age| age }