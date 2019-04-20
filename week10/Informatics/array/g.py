n = int(input())
a = [int (x) for x in input().split()]
# for i in range (n - 1, 0 - 1, -1):
# 	print(a[i], end = ' ')
a.reverse()
print(*a)

# Update, есть функция reverse => a.reverse() :/