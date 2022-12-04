fn part_one (input :&str) -> i32 {
    let inventories = input.split("\n\n");

    inventories.map(|inventory| {
        return inventory.lines().map(|line| line.parse::<i32>().unwrap()).sum::<i32>()
       }).max().unwrap()
}

fn part_two (input :&str) -> i32{
    let inventories = input.split("\n\n");
    let mut mosts : Vec<i32> = inventories.map(|inventory| {
        return inventory.lines().map(|line| line.parse::<i32>().unwrap()).sum::<i32>()
       }).collect::<Vec<i32>>();


    mosts.sort_by(|a, b| b.cmp(a));
    mosts.iter().take(3).sum::<i32>()
}

fn main() {
    let input = include_str!("./input1.txt");


    let part_one_answer = part_one(input);
    println!("Part 1: {}",  part_one_answer);

    let part_two_answer = part_two(input);
    println!("Part 2: {}",  part_two_answer);

}
