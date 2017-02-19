# find if the given array is sorted

#! /usr/bin/ruby -w

def is_sorted?(arr, n)
	if n == 1
		return true
	else
		if arr[n - 2] > arr[n - 1]
			return false
		else
			return is_sorted?(arr, n - 1)
		end
	end

end

print "Enter number of elements in array: "
n = gets.chomp.to_i

print "Enter array element(numbers separated by a space):"
arr = gets.chomp.split(' ').collect(&:to_i)

puts "Array is sorted: #{is_sorted?(arr, n)}"

