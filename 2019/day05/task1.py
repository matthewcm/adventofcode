program_file = open('input.txt', 'r')
program_string_array = program_file.read().strip('\n').split(',')

program = [int(i) for i in program_string_array]

#program = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31, 1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104, 999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]

INPUT_ID = 5

def apply_noun(noun):
    global program
    program[1] = noun


def apply_verb(verb):
    global program
    program[2] = verb



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
    program[position] = 5

def read (position):
    global program
    return program[position]

def run_program():
    global program
    print(program)
    index = 0
    while program[index] != 99:

        opcode = int(str(program[index]).zfill(5)[-2:])

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
        elif (opcode == 5):
            # JUMP IF TRUE
            parameter_1 =  mode_support(program,program[index + 1], parameter_1_mode)

            if (parameter_1 != 0):
                parameter_2 =  mode_support(program,program[index + 2], parameter_2_mode)
                index = parameter_2
            else:
                index += 3
        elif (opcode == 6):
            # JUMP IF TRUE
            parameter_1 =  mode_support(program,program[index + 1], parameter_1_mode)


            if (parameter_1 == 0):
                parameter_2 =  mode_support(program,program[index + 2], parameter_2_mode)
                index = parameter_2
            else:
                index += 3
        elif (opcode == 7):

            parameter_1 =  mode_support(program,program[index + 1], parameter_1_mode)
            parameter_2 =  mode_support(program,program[index + 2], parameter_2_mode)


            if (parameter_1 < parameter_2):
                program[program[index+3]] = 1
            else:
                program[program[index+3]] = 0

            index += 4
        elif (opcode == 8):
            parameter_1 =  mode_support(program,program[index + 1], parameter_1_mode)
            parameter_2 =  mode_support(program,program[index + 2], parameter_2_mode)


            if (parameter_1 == parameter_2):
                program[program[index+3]] = 1
            else:
                program[program[index+3]] = 0

            index += 4
        elif (opcode == 99):
            print('HALT: ', opcode)
            break
        else:
            print('bad opcode: ', opcode)
            index += 1

run_program()
