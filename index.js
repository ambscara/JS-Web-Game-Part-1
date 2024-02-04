function newImage(path, left, bottom) {
  let object = document.createElement('img');
  object.src = path;
  object.style.position = 'fixed';
  object.style.left = left + 'px';
  object.style.bottom = bottom + 'px';
  document.body.append(object);
  return object;
}

function newItem(path, left, bottom) {
  let item = newImage(path, left, bottom);

  item.addEventListener('dblclick', function () {
    item.remove();
  });

  return item;
}


let greenCharacter = newImage('assets/green-character.gif', 100, 100);
let pineTree = newImage('assets/pine-tree.png', 450, 200);


let tree = newImage('assets/tree.png', 200, 300);
let pillar = newImage('assets/pillar.png', 350, 100);
let crate = newImage('assets/crate.png', 150, 200);
let well = newImage('assets/well.png', 500, 425);


let sword = newItem('assets/sword.png', 500, 405);
let shield = newItem('assets/shield.png', 165, 185);
let staff = newItem('assets/staff.png', 600, 100);
