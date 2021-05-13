let func1 = function() {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('btn').addEventListener('click', function() {
            let name = document.getElementById('name');
            console.log(name.value);
        }, false);
    }, false);
}

let func2 = function() {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('btn2').addEventListener('click', function() {
            let result = [];
            let foods =document.getElementsByName('food');
    
            for(let i = 0; i < foods.length; i++) {
                let food = foods[i];
                if(food.checked) {
                    result.push(food.value);
                }
            }
    
            window.alert(result.toString());
        }, false);
    } ,false);
}

let func3 = function() {
    document.addEventListener('DOMContentLoaded', function() {
        let getRadioValue = function(name) {
            let result = '';
            let elems = document.getElementsByName(name);

            for(let i = 0; i < elems.length; i++) {
                let elem = elems[i];
                if(elem.checked) {
                    result = elem.value;
                    break;
                }
            }
            return result;
        };

        document.getElementById('btn3').addEventListener('click', function() {
            window.alert(getRadioValue('foods'));
        }, false);
    } ,false);
}

func1();
func2();
func3();