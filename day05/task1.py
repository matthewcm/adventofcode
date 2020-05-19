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


PARAMETER = 150

def mode_support (program, position, mode):
    if (mode == 0): # POSITION MODE 
        return program[position]
    elif (mode == 1): # IMMEDIATE MODE
        return position
    else:
        print ('bad mode: ', mode)
        return

def add (parameter_1, parameter_2):
    return parameter_1 + parameter_2

def multiply (parameter_1, parameter_2):
    return parameter_1 * parameter_2

def store ( position):
    program[position] = 1

def read (position):
    global program
    return program[position]

def run_program():
    global program
    print(program)
    index = 0
    while program[index] != 99:
        opcode = program[index] % 10

        if (opcode == 0):
            print('bad opcode: ', opcode)
            index += 1
            continue

        parameter_1_mode = int(str(program[index]).zfill(5)[-3])
        parameter_2_mode = int(str(program[index]).zfill(5)[-4])
        parameter_3_mode = int(str(program[index]).zfill(5)[-5])

        if (opcode == 1):
            parameter_1 =  mode_support(program,program[index + 1], parameter_1_mode)

            parameter_2 = mode_support(program,program[index + 2], parameter_2_mode)
            program[program[index+3]] = add(parameter_1,parameter_2)
            index += 4
        elif (opcode== 2):
            parameter_1 =  mode_support(program,program[index + 1], parameter_1_mode)

            parameter_2 = mode_support(program,program[index + 2], parameter_2_mode)
            program[program[index+3]] =multiply(parameter_1,parameter_2)
            index += 4
        elif (opcode == 3):
            store(program[index + 1])
            index += 2
        elif (opcode == 4):
            parameter_1 =  mode_support(program,program[index + 1], parameter_1_mode)
            print('output: ', parameter_1)
            if (parameter_1 != 0):
                break
            index += 2

        else:
            print('bad opcode: ', opcode)
            index += 1

print(run_program())
