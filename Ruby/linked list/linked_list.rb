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
    arr = []
    while current != nil
      arr << current.datum
      current = current.next_node
    end
    puts arr.join(', ')
  end

  def insert_element(head, data, position)
    current = head
    k = 1
    while k < position
      current = current.next_node
      k += 1
    end
    new_node = Node.new(data, nil)
    new_node.next_node = current.next_node
    current.next_node = new_node
    head
  end

  def delete_element(head, position)
    p, q = head, head.next_node
    k = 2
    while k < position
      p = p.next_node
      q = q.next_node
      k += 1
    end
    p.next_node = q.next_node
    q.next_node = nil
    head
  end
end

l = LinkedList.new
arr = l.get_input

head = l.create_list(arr)
l.traverse_list(head)

head = l.insert_element(head, 4, 3)
l.traverse_list(head)

head = l.delete_element(head, 4)
l.traverse_list(head)

