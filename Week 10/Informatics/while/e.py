n = int(input())
cnt = 0
i = 1
while i < 1000000:
	if(i >= n):
		print(cnt)
		break
	cnt += 1
	i *= 2