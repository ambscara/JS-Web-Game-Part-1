function newImage(path, left, bottom) {
    let image = document.createElement('img');
    image.src = path;
    image.style.position = 'fixed';
    image.style.left = left + 'px'; // Make sure to add 'px' for left and bottom values
    image.style.bottom = bottom + 'px';
    document.body.append(image);
  }
  
  newImage('assets/tree.png', 200, 300);
  newImage('assets/pillar.png', 350, 100);
  newImage('assets/crate.png', 150, 200);
  newImage('assets/well.png', 500, 425);
  
  let sword = document.createElement('img');
  sword.src = 'assets/sword.png';
  sword.style.position = 'fixed'; // Fix: Use style.position instead of position
  sword.style.left = '500px';
  sword.style.bottom = '405px';
  document.body.append(sword);
  
  sword.addEventListener('dblclick', function () {
    sword.remove();
  });
  
  function newItem(path, left, bottom) {
    let item = document.createElement('img');
    item.src = path;
    item.style.position = 'fixed';
    item.style.left = left + 'px';
    item.style.bottom = bottom + 'px';
    document.body.append(item);
  }
  
  newItem('assets/sword.png', 500, 405);
  newItem('assets/shield.png', 165, 185);
  newItem('assets/staff.png', 600, 100);

 