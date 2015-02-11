#!usr/bin/ruby -w

if "IIVV" =~ /([I]{3,})|([X]{3,})|([C]{3,})|([M]{3,})/
	puts "yes"
else
	puts "no"
end

if "IIVV" =~ /([I]{3,})|([X]{3,})|([C]{3,})|([M]{3,})/
	puts "yes"
else
	puts "no"
end

patt1 = /([I]{3,})|([X]{3,})|([C]{3,})|([M]{3,})/
patt1_2 = /([V]{1,})|([L]{1,})|([D]{1,})/
patt2 = /IV|IX|XL|XC|CD|CM/

