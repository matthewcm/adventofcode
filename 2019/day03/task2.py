import math


paths_file = open('input.txt', 'r')
wire_lines = paths_file.read().split('\n')

wire_a = wire_lines[0].split(',');
wire_b = wire_lines[1].split(',');

x = 0
y = 0

path_list_a = []
for i in wire_a:
    previous_x = x
    previous_y = y

    x_direction = 0
    y_direction = 0

    if i[0] == 'L':
        x -= int(i[1:])
        x_direction = -1
    elif i[0] == 'R':
        x += int(i[1:])
        x_direction = +1
    elif i[0] == 'D':
        y -= int(i[1:])
        y_direction = -1
    elif i[0] == 'U':
        y += int(i[1:])
        y_direction = 1
    else:
        print('oops')

    if (x_direction != 0):
        for j in range(previous_x,x, x_direction):
            path_list_a.append((j,y))
    else:
        for j in range(previous_y,y, y_direction):
            path_list_a.append((x,j))


wire_a_set = set(path_list_a)
x = 0
y = 0
path_list_b = []

for i in wire_b:
    previous_x = x
    previous_y = y

    x_direction = 0
    y_direction = 0

    if i[0] == 'L':
        x -= int(i[1:])
        x_direction = -1
    elif i[0] == 'R':
        x += int(i[1:])
        x_direction = +1
    elif i[0] == 'D':
        y -= int(i[1:])
        y_direction = -1
    elif i[0] == 'U':
        y += int(i[1:])
        y_direction = 1
    else:
        print('oops')

    if (x_direction != 0):
        for j in range(previous_x,x, x_direction):
            path_list_b.append((j,y))
    else:
        for j in range(previous_y,y, y_direction):
            path_list_b.append((x,j))

wire_b_set =set(path_list_b)

shortest_combined_wire = math.inf

intersections = list(wire_a_set & wire_b_set)

wire_length_a = 0
wire_length_b = 0

for coord in intersections:

    wire_length_a = path_list_a.index(coord)
    wire_length_b =path_list_b.index(coord)

    combined_wire = wire_length_a + wire_length_b

    if ((combined_wire != 0) & (combined_wire < shortest_combined_wire)) :
            shortest_combined_wire = combined_wire




print ('Shortest Combined Wire: ' , shortest_combined_wire)







