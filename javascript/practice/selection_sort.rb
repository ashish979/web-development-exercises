def selection_sort(a)
  n = a.length
  i = 0
  while i < n - 1
    min = i
    j = i + 1
    while j < n
      if a[j] < a[min]
        min = j
      end
      j += 1
    end
    a[i], a[min] = a[min], a[i]
    i += 1
  end
  a
end

print selection_sort([3, 2, 1, 4, 6, 5])
puts
