#! /bin/ruby -w

def factorial(n)
  return (1..n).inject(1) {|s, i| s = s * i; }
end

print 'Enter number: '
n = gets.chomp

puts "Factorial of #{n} is #{factorial(n.to_i)}"
