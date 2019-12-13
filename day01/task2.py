file = open('input.txt', 'r')
fileLines = file.readlines()

total_sum = 0
test = '100756'


def calculate_additional_fuel(mass):
    global total_sum
    additional_fuel = (int(mass) // 3) - 2
    while additional_fuel >= 0:
        total_sum += additional_fuel
        additional_fuel = (int(additional_fuel) // 3) - 2


for mass in fileLines:
    calculate_additional_fuel(mass)

# calculate_additional_fuel(test)


print(total_sum)
