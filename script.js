function removeDuplicates() {
    const input = document.getElementById('input').value;
    const array = input.split(',').map(Number);
    const uniqueArray = [...new Set(array)];
    document.getElementById('result').innerText = `The Entered Unique values: ${uniqueArray}`;
}
