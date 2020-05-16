# 6 digit number
# value in range of input

# two adjacent digits are the same.
# Going from left to right, digit never decrease

# Examples:
# 111111
# 223450 NOPE (decreasing)
# 123789 NOPE (no double)


# How many different passwords are there within the range of puzzle input


puzzle_min = 171309
puzzle_min_list = [1,7,1,3,0,9]

puzzle_max = 643603

puzzle_max_list = [6,4,3,6,0,3]

sorted_ex = [1,2,3,4,5,6]

def check_six_digit(password):
    return len(password) == 6

def check_in_order(password):
    return sorted(password) == password

def check_if_a_double(password):
    return len(set(password)) < 6

def check_valid_password(password):
    return check_six_digit(password) & check_in_order(password) & check_if_a_double(password)

valid_passwords = []

for password in range (puzzle_min, puzzle_max):

    password_list = list(map(int, str(password)))
    if (check_valid_password(password_list)):
        valid_passwords.append(password)

print(len(valid_passwords))
