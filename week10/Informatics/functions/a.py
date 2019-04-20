def func(a, b, c, d):
	# return min(min(a, b), min(c, d))
	return min(a, b, c, d)

a = list(map(int, input().split()))

print(func(a[0], a[1], a[2], a[3]))