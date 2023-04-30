var chosen_word;
var hidden_word;
var button_dic = {};
var hp;

function launch_game() {
    var words = create_list_word();
    var rand = Math.floor(Math.random() * 51);
    hp = 10;
    for (var i = 97; i <= 122; i++){
        var key = String.fromCharCode(i);
        var button = document.getElementById(key);
        button.disabled = false;
        button_dic[key] = button;
    }
    chosen_word = words[rand].toLowerCase();
    hidden_word = "_".repeat(chosen_word.length);
    document.getElementById("word").innerHTML = hidden_word;
    document.getElementById("nbr of lives").innerHTML = "nomber of guess remaining" + hp;
}

function check(char) {
    var button = document.getElementById(char)
    button.disabled = true;
    button_dic[char] = button;
    var hidden_word_arr = hidden_word.split('');
    for (var tmp = 0;tmp != chosen_word.length; tmp++) {
        if (chosen_word[tmp] == char){
            hidden_word_arr[tmp] = char;
        }
    }
    for (var tmp = 0;tmp != chosen_word.length; tmp++) {
        if (chosen_word[tmp] == char){
            hidden_word_arr[tmp] = char;
            hp++;
            break;
        }
    }
    hp--;
    hidden_word = hidden_word_arr.join('');
    document.getElementById("word").innerHTML = hidden_word;
    if (hp > 0){
        document.getElementById("nbr of lives").innerHTML = "nomber of guess remaining" + hp;
    } else {
        document.getElementById("nbr of lives").innerHTML = "YOU LOSE";
    }
    if (hp > 0 && hidden_word === chosen_word){
        document.getElementById("nbr of lives").innerHTML = "YOU WIN";
    }
}

function create_list_word() {
    var words = ["Apple", "Bicycle", "Carpet", "Dandelion", "Elephant", "Flamingo", "Gumball", "Hamburger", "Icicle", "Jellyfish", "Kangaroo",
    "Lollipop", "Mosquito", "Narwhal", "Octopus", "Pancake", "Quicksand", "Rainbow", "Sunflower", "Turtle", "Umbrella", "Volleyball", "Watermelon",
    "Xylophone", "Yellow", "Zebra", "Backpack", "Camera", "Donut", "Eggplant", "Firework", "Giraffe", "Hotdog", "Igloo", "Jaguar", "Kite", "Lemon",
    "Mushroom", "Ninja", "Ostrich", "Penguin", "Quail", "Raccoon", "Seahorse", "Tiger", "Unicorn", "Vampire", "Whale", "X-ray", "Yacht", "Zombie"];
    return words;
}