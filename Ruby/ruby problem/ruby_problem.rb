#! usr/bin/ruby -w

class Search
  N = 8

  # @pages and @queries are arrays of keywords
  def initialize
    @pages, @queries = [], []
  end

  # to get input from the user from command line
  def user_input
    puts "Enter pages (P) or queries (Q) followed by keywords or eoi to exit"
    tmp = gets.chomp
    while(tmp != "eoi")
      tmp[0,1] == "P" ? insert_page(tmp) : insert_query(tmp)
      tmp = gets.chomp
    end
  end

  # to get input from file
  def file_input
    File.open("input.txt").readlines.each do |line|
      line[0,1] == "P" ? insert_page(line) : insert_query(line)
    end
  end

  # insert a page keywords to @pages
  def insert_page(tmp)
    arr = tmp.downcase.split(" ")
    arr.shift
    @pages << arr
  end

  # insert a queries keywords to @queries
  def insert_query(tmp)
    arr = tmp.downcase.split(" ")
    arr.shift
    @queries << arr
  end

  # this method will be called after getting input
  def find_top_pages
    i = 1
    @queries.each do |query|
      puts "Q#{i}:" + relevant_pages(query)
      i = i + 1
    end
  end

  # logic to find the relevant pages per query
  def relevant_pages(query)
    sor = []
    @pages.each do |page|
      sor << strength_of_relationship(page, query)
    end
    sor = array_to_hash(sor)
    sor = remove_null_values(sor)
    sor = sor.sort_by{|k,v| [-v, k]}
    make_string(Hash[sor])
  end

  # delete from hash if the stregth is 0
  def remove_null_values(sor)
    y = sor.dup
    sor.each {|k,v| y.delete(k) if v == 0;}
    y
  end

  # to find the strength of relationship between a page and query
  def strength_of_relationship(page, query)
    i = N
    sum = 0
    query.each do |keyword|
      sum += i * (N - page.index(keyword)) if page.index(keyword)
      i = i - 1
    end
    sum
  end

  # convert 1D array to hash with index as key
  def array_to_hash(arr)
    i = 0
    arr.inject({}) { |mem, var| mem[i] = var; i = i + 1; mem; }
  end

  # to return the required string format of pages order
  def make_string(sor)
    arr = sor.keys
    if arr.length > 5
      until(arr.length == 5)
        arr.pop
      end
    end
    arr.inject("") { |mem, var|  mem = mem + " P#{var + 1}"; mem;}
  end

end

obj = Search.new
obj.file_input
obj.find_top_pages
