
let btn = $(`#get-data`);
console.log(btn);


$(btn).click(function () {

    $.get(`https://akademia108.pl/api/ajax/get-post.php`, function (data) {

        console.log(data);

        const newDiv = $(`<div id="new-data"></div>`);
        console.log(newDiv);

        newDiv.text(`id: ${data.id}\n
        userId: ${data.userId}\n
        title: ${data.title}\n
        body: ${data.body}`)

        newDiv.html(newDiv.html().replace(/\n/g,'<br/>'));

        $(`body`).append(newDiv);

    })

        .fail(function (error) {
            console.error(error);
        })

})