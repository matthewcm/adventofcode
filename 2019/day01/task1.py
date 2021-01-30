t = '74666'

file = open('input.txt', 'r')
fileLines = file.readlines()

totalSum = 0
for mass in fileLines:
    totalSum += (int(mass) // 3) - 2

print (totalSum)

