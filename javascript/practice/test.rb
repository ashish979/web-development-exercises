class Animal
  attr_accessor :name

  def initialize(name)
    @name = name;
  end

  def bark
    puts 'Boo!!!Woo!!!'
  end

end

animal = Animal.new('barky')
puts animal.name
animal.bark
