var i = 0;
const lis = document.querySelectorAll('#sec-c .container #faq ul .question');
lis.forEach(li => {
  li.addEventListener('click', e => {
    i += 1;

    if (i % 2 !== 0) {
      li.children[0].setAttribute('checked', 'true');
    } else if (i % 2 === 0) {
      li.children[0].removeAttribute('checked');
    }
  });
});
