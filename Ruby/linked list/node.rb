class Node
  attr_accessor :datum, :next_node

  def initialize(datum, next_node)
    @datum = datum
    @next = next_node
  end
end
