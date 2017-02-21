class LinkedList
  require './node.rb'
  attr_accessor  :head

  def get_input
    print 'Enter linked list elements(numbers separated by a space):'
    gets.chomp.split(' ').collect(&:to_i)
  end

  def create_list(arr)
    @head = Node.new(arr.first, nil)
    current = @head
    arr.shift
    arr.each do |elm|
      node = Node.new(elm, nil)
      current.next_node = node
      current = node
    end
    @head
  end

  def traverse_list(head)
    current = head
    while current != nil
      puts current.datum
      current = current.next_node
    end
  end
end

l = LinkedList.new
arr = l.get_input
head = l.create_list(arr)
l.traverse_list(head)


