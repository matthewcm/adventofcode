import math


pathsFile = open('./input.txt', 'r')
pathsLines = pathsFile.read().split('\n')

pathOne = pathsLines[0].split(',');
pathTwo = pathsLines[1].split(',');

x = 0
y = 0

pathList = []
for i in pathOne:
    prevX = x
    prevY = y

    xDirection = 0
    yDirection = 0

    if i[0] == 'L':
        x -= int(i[1:])
        xDirection = -1
    elif i[0] == 'R':
        x += int(i[1:])
        xDirection = +1
    elif i[0] == 'D':
        y -= int(i[1:])
        yDirection = -1
    elif i[0] == 'U':
        y += int(i[1:])
        yDirection = 1
    else:
        print('oops')

    if (xDirection != 0):
        for j in range(prevX,x, xDirection):
            pathList.append((j,y))
    else:
        for j in range(prevY,y, yDirection):
            pathList.append((x,j))


pathOneSet = set(pathList)
        
x = 0
y = 0
pathList = []
for i in pathTwo:
    prevX = x
    prevY = y

    xDirection = 0
    yDirection = 0

    if i[0] == 'L':
        x -= int(i[1:])
        xDirection = -1
    elif i[0] == 'R':
        x += int(i[1:])
        xDirection = +1
    elif i[0] == 'D':
        y -= int(i[1:])
        yDirection = -1
    elif i[0] == 'U':
        y += int(i[1:])
        yDirection = 1
    else:
        print('oops')

    if (xDirection != 0):
        for j in range(prevX,x, xDirection):
            pathList.append((j,y))
    else:
        for j in range(prevY,y, yDirection):
            pathList.append((x,j))

pathTwoSet =set(pathList)

closestIntersection = math.inf

intersections = list(pathOneSet & pathTwoSet)

for coord in intersections:
    manhatten = abs(coord[0]) + abs(coord[1])
    if (manhatten != 0):
        if (manhatten < closestIntersection):
            closestIntersection = manhatten


print (closestIntersection)







