const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragOver = (e) => e.preventDefault()
const dragEnter = (e) => e.target.classList.add('hovered')
const dragLeave = (e) => e.target.classList.remove('hovered')
const dragDrop = (e) => {
  e.target.append(item);
  e.target.classList.remove('hovered');
}

placeholders.forEach((placeholder) => {
  // dragover - Элемент который мы перетаскиваем находится над зоной куда мы можем поместить
  placeholder.addEventListener('dragover', dragOver)
  // dragenter - вход в помещаемую зону
  placeholder.addEventListener('dragenter', dragEnter)
  // dragleave - покинули помещаемую зону
  placeholder.addEventListener('dragleave', dragLeave)
  // drop - отпустили
  placeholder.addEventListener('drop', dragDrop)
});

const dragStart = (e) => {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0)
};
const dragEnd = (e) => e.target.classList.remove('hold', 'hide');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);