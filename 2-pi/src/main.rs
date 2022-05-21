use std::fs;

fn main() {
    let pi_digits = fs::read_to_string("pi.txt").unwrap();

    let pi_txt = fs::read_to_string("pi_coords.txt").unwrap();
    let pi_coords = pi_txt
        .split("\r\n")
        .map(|coord| coord.split(","))
        .map(|mut str| (str.next().unwrap(), str.next().unwrap()))
        .map(|(x, y)| (format!("{:0>3}", x), format!("{:0>3}", y)))
        .map(|(x, y)| (pi_digits.find(&x).unwrap(), pi_digits.find(&y).unwrap()));

    let mut file = String::from("xxx,yyy\n");

    for coord in pi_coords {
        file += &format!("Déu[{}],Déu[{}]\n", coord.0, coord.1);
    }
    file.pop();

    fs::write("magic.csv", file).unwrap();
}