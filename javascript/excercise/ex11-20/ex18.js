function greeting() {
    const greetingStr = ['おはよう','こんにちは','おやすみなさい','good morning', 'good afternoon', 'good evening'];
    const index = Math.floor(Math.random() * greetingStr.length);
    return greetingStr[index];
}

for(let i = 0; i < 10; i++){
    console.log(greeting());
}