class CircularLinkedList
  require './c_l_l_node.rb'

  attr_accessor :head

  def get_input
    print 'Enter linked list elements(numbers separated by a space):'
    gets.chomp.split(' ').collect(&:to_i)
  end

  def create_list(arr)
    new_node = CLLNode.new(arr.first, nil)
    self.head = current = new_node
    arr.shift
    arr.each do |elm|
      new_node = CLLNode.new(elm, nil)
      current.next_node = new_node
      current = current.next_node
    end
    new_node.next_node = head
  end

  def traverse_list
    current = self.head
    arr = []
    loop do
      arr << current.datum
      current = current.next_node
      break if current == head
    end
    puts arr.join(',')
  end

  def insert_element(datum, position)
    current = head
    (1...position).each { current = current.next_node }
    new_node = CLLNode.new(datum, current.next_node)
    current.next_node = new_node
  end

  def delete_element(position)
    p, q = head, head.next_node
    (2...position).each do
      p = p.next_node
      q = q.next_node
    end
    p.next_node = q.next_node
    q.next_node = nil
  end
end

l = CircularLinkedList.new
arr = l.get_input

l.create_list(arr)
l.traverse_list

l.insert_element(4, 3)
l.traverse_list

l.delete_element(4)
l.traverse_list

