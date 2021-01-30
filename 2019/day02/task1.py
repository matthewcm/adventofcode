program_file = open('./input.txt', 'r')
program_string_array = program_file.read().strip('\n').split(',')

program = [int(i) for i in program_string_array]

test = [1, 0, 0, 0, 99]


def apply_noun(noun):
    global program
    program[1] = noun


def apply_verb(verb):
    global program
    program[2] = verb


def run_program():
    global program
    print(program)
    index = 0
    while program[index] != 99:
        if program[index] == 1:
            program[program[index + 3]] = program[program[index + 1]] + program[program[index + 2]]
        elif program[index] == 2:
            program[program[index + 3]] = program[program[index + 1]] * program[program[index + 2]]
        index += 4
    return program

# to_find = 19 690 720


apply_noun(52)
apply_verb(96)
print(run_program())

print (52 * 100 + 96)