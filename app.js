function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let main = document.getElementById("body");

let title = document.createElement("h1");
title.id = "title";
title.innerHTML = "Hello World!";

title.addEventListener('click', async () => {
  title.animate(
    [
      {
        // from
        opacity: 1,
        color: "#000",
      },
      {
        // to
        opacity: 0,
        color: "#fff",
      },
    ],
    2000,
  );
  await sleep(2000).then(() => {
    title.remove()
  });
});

main.appendChild(title);
