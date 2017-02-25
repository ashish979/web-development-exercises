class CLLNode
  attr_accessor :next_node, :datum

  def initialize(datum, next_node)
    @datum = datum
    @next_node = next_node
  end
end