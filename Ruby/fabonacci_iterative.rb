#! /bin/ruby -w

def fabonacci(n)
	f1, f2 = 1, 1
	arr = [f1, f2]
	(3..n).each do |i|
		f3 = f1 + f2
		arr << f3
		f1 = f2
		f2 = f3
	end
end

print "Enter number(n): "
n = gets.chomp

fabonacci(n.to_i)
