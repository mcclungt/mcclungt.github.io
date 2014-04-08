def north_korean_cipher(coded_message)
  input = coded_message.downcase.split("") 
  decoded_sentence = []
  alphabet = ('a'..'z').to_a
  cipher = Hash[alphabet.zip(alphabet.rotate(-4))] 
  symbols = ["@", "#", "$", "%", "^", "&", "*"] 
  input.each do |x|
    found_match = false #must be INSIDE input.each do |x| but OUTSIDE cipher.each_key do |y|
    cipher.each_key do |y| 
      if x == y 
        decoded_sentence << cipher[y]
        found_match = true
        break
      elsif (0..9).to_a.include?(x)
        found_match = true  #default code has decoded_sentence << x but it doesn't seem to be necessary
        break
      elsif symbols.include?(x) 
        decoded_sentence << " "
        found_match = true
        break
      end 
    end
    if not found_match 
      decoded_sentence << x
    end
  end
  decoded_sentence = decoded_sentence.join("")

  if decoded_sentence.match(/\d+/)
    decoded_sentence.gsub!(/\d+/) { |num| num.to_i / 100 }
  end

  return decoded_sentence
 end



# Driver Code:
p north_korean_cipher("m^aerx%e&gsoi!") == "i want a coke!" #This is driver code and should print true
# Find out what Kim Jong Un is saying below and turn it into driver code as well. Driver Code statements should always return "true"
p north_korean_cipher("syv@tistpi$iex#xli*qswx*hipmgmsyw*erh*ryxvmxmsyw%jsshw^jvsq^syv#1000000#tvsjmxefpi$jevqw.") == "our people eat the most delicious and nutritious foods from our 10000 profitable farms."
p north_korean_cipher("syv%ryoiw#evi#liph^xskixliv@fc^kveti-jpezsvih@xsjjii.*hsr'x%xipp&xli#yw!") == "our nukes are held together by grape-flavored toffee. don't tell the us!" 
p north_korean_cipher("mj^csy&qeoi^sri*qmwxeoi,%kir.*vm@csrk-kmp,&csy^ampp*fi&vitpegih*fc@hirrmw&vshqer.") == "if you make one mistake, gen. ri yong-gil, you will be replaced by dennis rodman."
p north_korean_cipher("ribx^wxst:$wsyxl%osvie,$xlir$neter,#xlir%xli%asvph!") == "next stop: south korea, then japan, then the world!"
p north_korean_cipher("ger^wsqifshc*nywx^kix^qi&10000*fekw@sj$gssp%vergl@hsvmxsw?") == "can somebody just get me 100 bags of cool ranch doritos?"

# Reflection