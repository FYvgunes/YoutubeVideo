var myArray = [{
        "name": "Veysel",
        "age": "23",
        "birtdat": "12/05/2010"
    },
    {
        "name": "Mert",
        "age": "21",
        "birtdat": "12/05/2010"
    },
    {
        "name": "Göksal",
        "age": "26",
        "birtdat": "12/05/2010"
    },
    {
        "name": "Halis",
        "age": "28",
        "birtdat": "12/05/2010"
    },
    {
        "name": "Gülten",
        "age": "9",
        "birtdat": "12/05/2010"
    },
    {
        "name": "Muhiddin",
        "age": "30",
        "birtdat": "12/05/2010"
    }
];



// $("#search-input").on("keyup", function () {
//     var value = $(this).val();
//     console.log("value", value);
//     var data = searchTable(value, myArray);
//     builTable(data);
// })

// builTable(myArray);

// function searchTable(value, data) {
//     var filteredData = [];
//     for (let i = 0; i < data.length; i++) {
//         value = value.toLowerCase();
//         var name = data[i].name.toLowerCase();

//         if (name.includes(value)) {
//             filteredData.push(data[i]);
//         }
//     }
//     return filteredData;
// }

$("th").on("click", function () {
    var column = $(this).data("column");
    var order = $(this).data("order");
    var text = $(this).html();
    text = text.substring(0, text.length - 1)



    if (order == "desc") {
        $(this).data("order", "asc")
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        text += "&#9660";
    } else {
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        text += "&#9650";
    }
    $(this).html(text);
    builTable(myArray)
})

builTable(myArray)

function builTable(data) {
    var table = document.getElementById("myTable");
    table.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var row = `
        <tr>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].birtdat}</td>
        </tr>`
        table.innerHTML += row;
    }
}