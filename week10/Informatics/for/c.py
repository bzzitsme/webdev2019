a = int(input())
b = int(input())
for i in range(1, b + 1):
	if(i * i <= b and i * i >= a):
		print(i * i, end = ' ')