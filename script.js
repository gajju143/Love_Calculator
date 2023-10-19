function calculateLove() {
    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();

    if (!name1 || !name2) {
        alert("Please enter both names.");
        return;
    }

    // Remove spaces and convert names to lowercase
    const name1WithoutSpaces = name1.replace(/\s+/g, '');
    const name2WithoutSpaces = name2.replace(/\s+/g, '');

    // Calculate love percentage based on common characters
    const commonCount = [...new Set(name1WithoutSpaces + name2WithoutSpaces)].length;
    const lovePercentage = Math.floor((commonCount / (name1WithoutSpaces.length + name2WithoutSpaces.length)) * 100);

    // Define the flames result categories
    const flamesCategories = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];

    // Calculate the flames result
    const flamesResult = flamesCategories[(commonCount - 1) % flamesCategories.length];

    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `<p>The Love Flames Result is: ${flamesResult}</p><p>💞 Love Percentage: ${lovePercentage}%</p>`;
}
