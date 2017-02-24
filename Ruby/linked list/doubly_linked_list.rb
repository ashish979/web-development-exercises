class DoublyLinkedList
  require './d_l_l_node.rb'

  def get_input
    print 'Enter linked list elements(numbers separated by a space):'
    gets.chomp.split(' ').collect(&:to_i)
  end

  def create_list(arr)
    head = DLLNode.new(arr[0], nil, nil)
    current = head
    arr.shift
    arr.each do |elm|
      new_node = DLLNode.new(elm, nil, current)
      current.next_node = new_node
      current = new_node
    end
    head
  end

  def traverse_list(head)
    current = head
    arr = []
    while current != nil
      arr << current.datum
      current = current.next_node
    end
    puts arr.join(',')
  end

  def insert_element(head, datum, position)
    current = head
    (1...position).each { current = current.next_node }
    new_node = DLLNode.new(datum, current.next_node, current)
    current.next_node = new_node
    new_node.next_node.prev_node = new_node
    head
  end

  def delete_element(head, position)
    p, q = head, head.next_node
    (2...position).each do
      p = p.next_node
      q = q.next_node
    end
    p.next_node = q.next_node
    p.next_node.prev_node = p
    q.next_node = nil
    q.prev_node = nil
    head
  end

end

l = DoublyLinkedList.new
arr = l.get_input

head = l.create_list(arr)
l.traverse_list(head)

head = l.insert_element(head, 4, 3)
l.traverse_list(head)

head = l.delete_element(head, 4)
l.traverse_list(head)
