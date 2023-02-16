console.log('actions.js loaded');

document.getElementById("open-button").addEventListener("click", openPage);
document.addEventListener("keyup", function(event)
{
    if (event.keyCode === 13)
    {
        openPage();
    }
});

function openPage()
{
    window.open('https://www.acmicpc.net/problem/' + document.getElementById("problem-number-input").value,'_blank')
}