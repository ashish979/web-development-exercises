#!usr/bin/ruby -w

class Combinations
	def initialize
		@result = []
		@for_perms = []
		@final = []
	end

	def callme(arr,k)
		@for_perms = []
		@result = []
		@final = []
		combs(arr,k,0,k)
		@for_perms.each{|x| 
			arr = x.split("")
			permute(arr,0,k)
		}
		puts @final.uniq
	end

	def combs(arr,len,start,k)
		if(len == 0)
			@for_perms.push(@result.join(""))
			return
		end
		for i in start..(arr.length - len)
			@result[k - len] = arr[i]
			combs(arr,len-1,i+1,k)
		end
	end	

	def permute(a,i,n)
		if i==n
			@final.push(a.join(""))
		else
			for j in i..n
				a[i],a[j] = a[j],a[i]
				permute(a,i+1,n)
				a[i],a[j] = a[j],a[i]
			end
		end
	end

	def remove_spaces(arr)
		arr = arr.collect{|x| x.strip}
		return arr
	end

	def get_input
		while(1 == 1)
			ip = gets.chomp
			if ip == "eof"
				break
			end
			ip.strip!
			if ip =~ /[0-9]/
				ip = ip.split(" ")
				ip = remove_spaces(ip)
				str = ip[0]
				num = ip[1].to_i			
			else
				puts 'error'
			end
			print "#{str} #{num}\n"
			callme(str.split(""),num)
		end
	end
end

ob = Combinations.new
ob.get_input