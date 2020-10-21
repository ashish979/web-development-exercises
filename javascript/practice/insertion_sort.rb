def insertion_sort(a)
  n = a.length
  i = 1
  while i < n
    v = a[i]
    j = i
    while j > 0 && a[j - 1] > v
      a[j] = a[j - 1]
      j -= 1
    end
    a[j] = v
    i += 1
  end
  a
end

print insertion_sort([3, 2, 1, 4, 6, 5])
puts