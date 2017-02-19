#! /bin/ruby -w

def factorial(n)
	return 1 if n == 0 || n == 1
	return n * factorial(n - 1)
end

print 'Enter number: '
n = gets.chomp

puts "Factorial of #{n} is #{factorial(n.to_i)}"
