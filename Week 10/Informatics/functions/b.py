def func(a, n):
	return a ** int(n)

a = list(map(float, input().split()))
print(func(a[0], a[1]))