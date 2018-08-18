
function sayHello(){
alert('helloworld');
}

const container = document.querySelector("#container");
for(i=0;i<4;i++){
    const contentRow = document.createElement('div');
    container.appendChild(contentRow);
    contentRow.className = "row"+i;
    for(j=0;j<4;j++){
        const contentColumn = document.createElement('div');
        contentColumn.className = "column"+j;
        contentRow.appendChild(contentColumn);
    }
}

