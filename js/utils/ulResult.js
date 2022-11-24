export const f_crearUlResult = arrData => {
    const ul  = document.createElement("ul");
    arrData.forEach( data => {
          const ulTitle  = document.createElement("ul");
          const liTitle1 = document.createElement("li");
          const liTitle2 = document.createElement("li");

          ulTitle.classList.add("list-group");
          ulTitle.classList.add("list-group-horizontal");
          ulTitle.classList.add("row");

          liTitle1.classList.add("list-group-item");
          liTitle2.classList.add("list-group-item");

          liTitle1.classList.add("col-lg-2");
          liTitle2.classList.add("col-lg-6");

          liTitle1.classList.add("bold");

          liTitle1.append(data[0]);
          liTitle2.append(data[1]);

          ulTitle.appendChild(liTitle1);
          ulTitle.appendChild(liTitle2);

          ul.appendChild(ulTitle);
     });

     return ul;
}