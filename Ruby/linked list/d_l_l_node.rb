class DLLNode
  attr_accessor :datum, :next_node, :prev_node

  def initialize(datum, next_node, prev_node)
    @datum = datum
    @next_node = next_node
    @prev_node = prev_node
  end
end