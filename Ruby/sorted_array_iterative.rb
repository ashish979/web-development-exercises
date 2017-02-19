# find if the given array is sorted

#! /usr/bin/ruby -w

def is_sorted?(arr, n)
	(0..n-2).each do |i|
		return false if arr[i] > arr[i + 1]
	end
	return true
end

print "Enter number of elements in array: "
n = gets.chomp.to_i

print "Enter array element(numbers separated by a space):"
arr = gets.chomp.split(' ').collect(&:to_i)

puts "Array is sorted: #{is_sorted?(arr, n)}"


