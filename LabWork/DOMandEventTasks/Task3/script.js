let link = document.getElementById("link");
let button = document.getElementById("showAttributes");
let result = document.getElementById("result");

button.addEventListener("click", function(){
    let href = link.getAttribute("href");
    let title = link.getAttribute("title");
    let target = link.getAttribute("target");
    let rel = link.getAttribute("rel");

    result.innerHTML = `
        <table border="1" cellpadding="10">

            <tr>
                <th>Attribute Name</th>
                <th>Attribute Value</th>
            </tr>

            <tr>
                <td>href</td>
                <td>${href}</td>
            </tr>

            <tr>
                <td>title</td>
                <td>${title}</td>
            </tr>

            <tr>
                <td>target</td>
                <td>${target}</td>
            </tr>

            <tr>
                <td>rel</td>
                <td>${rel}</td>
            </tr>

        </table>
    `;    
});