#!usr/bin/ruby -w

class Galaxy
  def initialize
    @dirt = {}
    @metal = {}
    @question = {}
    @error_string = "I have no idea what you are talking about"
    @roman_single = {
      "I" => 1,
      "V" => 5,
      "X" => 10,
      "L" => 50,
      "C" => 100,
      "D" => 500,
      "M" => 1000
    }

    @roman_multiple = {
      "IV" => 4,
      "IX" => 9,
      "XL" => 40,
      "XC" => 90,
      "CD" => 400,
      "CM" => 900
    }   
  end

  def get_input
    while(1 == 1) 
      ip = gets.chomp
      if ip == "eof"
        break
      else
        if ip.include?("?") 
          ip = remove_ques(ip)
          if ip.include?(" is ")
            ip = ip.split(" is ")
            ip = remove_spaces(ip)
            @question[ip[1]] = 0
          else
            @question[ip] = @error_string
          end   
        else
          if ip.include?("Credits")
            ip = remove_credits(ip)
            ip = ip.split(" is ")
            ip = remove_spaces(ip)
            metal_value = calculate_metal_value(ip)
            @metal[metal_value[0]] = metal_value[1]
          else  
            ip = ip.split(" is ")
            remove_spaces(ip)
            @dirt[ip[0]] = ip[1]
          end
        end
      end     
    end
  end

  def remove_ques(str)
    return str.slice(0,str.index('?'))
  end

  def remove_spaces(arr)
    arr = arr.collect{|x| x.strip}
    return arr
  end

  def remove_credits(str)
    return str.slice(0,str.index('Credits'))
  end

  def display
    puts @metal
    puts @dirt
    puts @question
  end

  def to_roman(str)
    sum = 0
    str = str.split(" ")
    str = map_to_roman(str)
    str = str.join("")
    @roman_multiple.each {|x,y|
      if str.include?(x)
        count = str.scan(x).length
        sum += (y*count)
        str = str.gsub(x,"")        
      end
    }
    @roman_single.each {|x,y|
      if str.include?(x)
        count = str.scan(x).length
        sum += (y * count)
        str = str.gsub(x, "")        
      end
    }
    return sum
  end

  def calculate_metal_value(arr)
    metal = arr[0].split.last
    arr[0] = arr[0].gsub(" "+metal,"")
    arr = remove_spaces(arr)
    val = to_roman(arr[0])
    return metal,((arr[1].to_i)/val.to_f)
  end

  def map_to_roman(arr)
    arr = arr.collect{|x| @dirt[x]}
    return arr
  end

  def calculate_question_value
    @question.each{ |x,y| 
      @metal.each{|key,value|
        if x.include?(key) == true
          question_with_metal(x)
        else
          question_without_metal(x)
        end
      }
    }
    @question.each{|x,y|
      if y == 0
        @question[x] = @error_string
      end
    }
  end
  
  def question_with_metal(x)
    m = x.split.last
    str = x
    str = str.gsub(m,"")
    val = to_roman(str)
    val *= @metal[m]
    @question[x] = val
  end

  def question_without_metal(x)
    str = x
    flag = 0
    @metal.each{|key,value| 
      if x.include?(key)
        flag = 1
      end
    }
    if flag == 0
      val = to_roman(str)
      puts x
      @question[x] = val
    end
  end
end

ob = Galaxy.new
ob.get_input
ob.calculate_question_value
ob.display

