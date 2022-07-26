window.addEventListener('load', function() {

    let bookList = document.getElementById('bookInfo');
    bookList.style.visibility = "hidden"
    let form = document.getElementById("BookForm");

    let bookTitle = document.getElementById("bookTitle");
    let bookAuthor = document.getElementById("bookAuthor");
    let bookPages = document.getElementById("bookPages");
    let bookType = document.getElementById("bookType");
    let bookStatus = document.getElementById("bookStatus");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        let titleInput = document.querySelector("input[name=title]");
        let title = titleInput.value;

        let authorInput = document.querySelector("input[name=author]");
        let author = authorInput.value;

        let pagesInput = document.querySelector("input[name=numPages]");
        let pages = pagesInput.value;

        let typeInput = document.querySelector("select[name=type]");
        let type = typeInput.value;

        let statusInput = document.getElementsByName("status");
        let status;
        for (let i =0; i<statusInput.length; i++){
            if(statusInput[i].checked){
                status = statusInput[i].value;
            }
        }

        bookList.style.visibility = "visible";
        bookTitle.innerHTML= `Title: ${title}`;
        bookAuthor.innerHTML= `Author: ${author}`;
        bookPages.innerHTML= `Num Pages: ${pages}`;
        bookType.innerHTML= `Type: ${type}`;
        bookStatus.innerHTML= `Status: ${status}`;

        
    });

});



