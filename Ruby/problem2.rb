#!usr/bin/ruby -w

class Conference
	def initialize
		@event = {}
		@event_value = {}
		@event_time = {}
		@event_array = []
		@tracks = 0
		@morning_events = []
		@afternoon_events = []
	end

	def get_input
		while(1 == 1)
			ip = gets.chomp
			if ip == "eof"
				break
			else
				ip = remove_min(ip)
				time = ip.split.last
				ip = ip.gsub(time,"")
				if time == "lightning"
					time = 5
				end
				ip.strip!
				@event[ip] = time.to_i
			end
		end	
		assign_to_index()
	end

	def assign_to_index
		i = 1
		@event.each{|x,y|
			@event_value[i] = x
			@event_time[i] = y
			i += 1
		}		
		@event_time = Hash[@event_time.sort_by{|x,y| y}]
		@event_array = @event_time.values
	end

	def remove_min(str)
		return str.chomp("min")
	end

	def display
		puts @event
		puts ""
		puts @event_value
		puts ""
		puts @event_time
		puts ""
		puts @event_array
	end

	def no_of_tracks
		sum = 0
		@event.each_value{|x| sum += x}
		@tracks = (sum / 60.0) / 7.0
		@tracks = @tracks.ceil
		flag = check_if_possible(@tracks,sum)
		if flag == false
			return flag
		else
			return @tracks
		end
	end

	def check_if_possible(track, sum)
		if ((track * 60 * 6) < sum) && ((track * 60 * 7) > sum)
			return true
		else
			return false
		end		
	end

	def schedule_morning
		@tracks.times {
			arr = combs($event_array,180,@event_array.length)
			@event_array -= arr
			@morning_events.push(arr)
		}		
	end

	def schedule_afternoon
		sum = 0
		for i in 0..@event_array.length
			sum += @event_array[i]
			arr.push(i)
		end
	end
end

ob = Conference.new
ob.get_input
if ob.no_of_tracks 
	ob.display
	ob.schedule_morning
	ob.schedule_afternoon
else
	puts "Conference not possible"
end 
