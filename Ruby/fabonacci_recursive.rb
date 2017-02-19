#! /usr/bin/ruby -w

def fabonacci(n)
	if n == 1 || n == 2
		return 1 
	else
		return fabonacci(n - 1) + fabonacci(n - 2)
	end
end

print "Enter number(n): "
n = gets.chomp.to_i

arr = []

(1..n).each do |i|
	arr << fabonacci(i)
end

puts "Fabonacci series upto #{n}: #{arr.join(',')}"
